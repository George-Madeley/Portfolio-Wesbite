import React from "react";
import './Home.css';

import Blog from './blog/Blog';
import Bio from './bio/Bio';
import ContactForm from './contact_form/ContactForm';
import Hero from './hero/Hero';
import Highlights from './highlights/Highlights';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Bio />
      <Highlights />
      <Blog />
      <ContactForm />
    </div>
  )
}
