import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  event_type?: string;
  event_date?: string;
  message: string;
  status: 'new' | 'contacted' | 'quoted' | 'booked' | 'completed';
  created_at: string;
  updated_at: string;
}