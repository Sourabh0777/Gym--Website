import './App.css';
import React from 'react';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';
import Testimonials from './Components/Testimonials/Testimonials';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs></Programs>
          <Reasons></Reasons>
          <Plans></Plans>
          <Testimonials></Testimonials>
          <Join/>
          <Footer/>
    </div>
    
  );
}

export default App;
