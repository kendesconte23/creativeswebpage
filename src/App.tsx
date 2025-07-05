import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  // Check if we're on the admin route
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return <AdminDashboard />;
  }

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;