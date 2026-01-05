import React from "react";
import { FaLeaf, FaGem, FaShippingFast, FaCheckCircle } from "react-icons/fa";

// Images (Reusing existing assets for now to demonstrate layout)
import bannerImg from "../../../public/Images/banner.webp";
import tShirt1 from "../../../public/Images/t-shirt1.jpg";
import cardImg from "../../../public/Images/card.webp";

const About = () => {
    
  const stats = [
      { label: "Years of Experience", value: "10+" },
      { label: "Happy Customers", value: "25k+" },
      { label: "Products Designed", value: "500+" },
      { label: "Countries Served", value: "30+" },
  ];

  const values = [
      { icon: <FaGem />, title: "Premium Quality", desc: "We source only the finest materials to ensure long-lasting comfort and style." },
      { icon: <FaLeaf />, title: "Sustainability", desc: "Eco-friendly practices are at the heart of our production process." },
      { icon: <FaShippingFast />, title: "Fast Delivery", desc: "Get your favorite styles delivered to your doorstep in record time." },
      { icon: <FaCheckCircle />, title: "Authenticity", desc: "Every piece is guaranteed authentic and crafted with passion." },
  ];

  const team = [
      { name: "Sarah Jenkins", role: "Creative Director", img: tShirt1 },
      { name: "Michael Chen", role: "Head of Design", img: cardImg },
      { name: "Emma Wilson", role: "Lead Stylist", img: tShirt1 },
  ];

  return (
    <div className="font-sans text-[#333]">
      
      {/* HERO SECTION */}
      <div className="relative h-[400px] mb-16">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={bannerImg} alt="About Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Redefining Fashion</h1>
              <p className="text-lg md:text-xl max-w-2xl font-light">Where style meets substance. We believe in creating pieces that tell a story.</p>
          </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mb-20">
          
          {/* OUR STORY */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
               <div className="w-full md:w-1/2">
                   <img src={cardImg} alt="Our Story" className="w-full h-[500px] object-cover rounded-sm shadow-xl" />
               </div>
               <div className="w-full md:w-1/2 space-y-6">
                   <h2 className="text-3xl font-bold font-serif">Our Story</h2>
                   <div className="w-16 h-1 bg-black"></div>
                   <p className="text-gray-600 leading-relaxed">
                       Founded in 2015, we started with a simple mission: to create clothing that inspires confidence. What began as a small boutique has grown into a global brand, yet our core values remain unchanged. We are passionate about design, obsessed with quality, and dedicated to our community.
                   </p>
                   <p className="text-gray-600 leading-relaxed">
                       Every stitch, every fabric choice, and every silhouette is carefully considered. We don't just sell clothes; we offer a way to express yourself. Join us as we continue to push the boundaries of modern fashion.
                   </p>
               </div>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12 mb-20">
              {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                      <div className="text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
              ))}
          </div>

          {/* OUR VALUES */}
          <div className="text-center mb-20">
              <h2 className="text-3xl font-bold font-serif mb-12">Why Choose Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((val, idx) => (
                      <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                          <div className="text-4xl text-black mb-4">{val.icon}</div>
                          <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                          <p className="text-gray-600 text-sm">{val.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Team Section */}
          <div className="bg-black text-white py-16 px-8 rounded-2xl mb-20">
              <h2 className="text-3xl font-bold font-serif text-center mb-12">Meet The Team</h2>
              <div className="flex flex-wrap justify-center gap-10">
                   {team.map((member, idx) => (
                       <div key={idx} className="text-center group">
                           <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 mb-4 mx-auto relative">
                               <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                           </div>
                           <h4 className="text-xl font-bold">{member.name}</h4>
                           <p className="text-white/60 text-sm">{member.role}</p>
                       </div>
                   ))}
              </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
              <h2 className="text-3xl font-serif">Be Part of Our Journey</h2>
              <p className="text-gray-500 max-w-lg mx-auto">Subscribe to our newsletter and stay updated with the latest trends and exclusive offers.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                  <input type="email" placeholder="Enter your email" className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:border-black" />
                  <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-[#333]">Subscribe</button>
              </div>
          </div>

      </div>
    </div>
  );
};

export default About;
