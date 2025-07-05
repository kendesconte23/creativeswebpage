import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  message: string;
  source?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Parse request body
    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Name and message are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Insert into database
    const { data: submission, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone || null,
        event_type: formData.eventType || null,
        event_date: formData.eventDate || null,
        message: formData.message,
        source: formData.source || 'website',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Send email notification only for website submissions
    if (formData.source === 'website' || !formData.source) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@creativesbyhazelken.com',
            to: ['creatives.partydecor@gmail.com'],
            subject: `New Contact Form Submission from ${formData.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              ${formData.email ? `<p><strong>Email:</strong> ${formData.email}</p>` : ''}
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              ${formData.eventType ? `<p><strong>Event Type:</strong> ${formData.eventType}</p>` : ''}
              ${formData.eventDate ? `<p><strong>Event Date:</strong> ${formData.eventDate}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Source: ${formData.source || 'website'}</small></p>
              <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        id: submission.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});