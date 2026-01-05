import React, { useState } from "react";
import { Link } from "react-router";
import { MdKeyboardArrowRight, MdStar, MdStarBorder } from "react-icons/md";
import { FaHeart, FaFacebookF, FaTwitter, FaPinterest, FaEnvelope, FaRuler, FaTruck, FaUndo, FaHeadset, FaEye } from "react-icons/fa";
import { TbHanger } from "react-icons/tb";

// Images
import tShirt from "../../../public/Images/t-shirt.jpg";
import tShirt1 from "../../../public/Images/t-shirt1.jpg";
import tShirt2 from "../../../public/Images/t-shirt2.jpg";
import tShirt3 from "../../../public/Images/t-shirt3.jpg";
import cardimage1 from "../../../public/Images/card4.avif";
import cardimage2 from "../../../public/Images/card3.avif";
import cardimage3 from "../../../public/Images/card2.avif";

import Card from "../../Component/Card/Card";

const CardDetails = () => {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [tShirt, tShirt1, tShirt2, tShirt3];
  const [mainImage, setMainImage] = useState(productImages[0]);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "red", hex: "#EF4444" },
    { name: "white", hex: "#FFFFFF" },
    { name: "black", hex: "#000000" },
  ];

  const relatedProducts = [
      cardimage3, cardimage1, cardimage2, tShirt1
  ];

  return (
    <div className="font-sans text-[#333]">
        {/* Breadcrumb */}
      <div className="bg-[#f8f8f8] py-4 px-4 sm:px-8 mb-8">
          <div className="max-w-[1200px] mx-auto flex items-center text-xs text-gray-500 gap-2">
            <Link to="/" className="hover:text-black">Home</Link> <MdKeyboardArrowRight />
            <Link to="/products" className="hover:text-black">Shop</Link> <MdKeyboardArrowRight />
            <Link to="/products" className="hover:text-black">Products</Link> <MdKeyboardArrowRight />
            <span className="text-black font-medium">Jersey Graphic Tee Dolce</span>
          </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-16">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT: GALLERY SECTION */}
            <div className="w-full lg:w-1/2 flex gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-4 hidden sm:flex">
                    {productImages.map((img, idx) => (
                        <div 
                           key={idx} 
                           className={`w-[70px] h-[90px] cursor-pointer border ${mainImage === img ? 'border-black' : 'border-transparent'}`}
                           onClick={() => setMainImage(img)}
                        >
                            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                
                {/* Main Image */}
                <div className="flex-1 bg-gray-100 relative h-[500px] sm:h-[600px] overflow-hidden">
                     <span className="absolute top-4 left-4 bg-[#00CED1] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">In Stock</span>
                     <img src={mainImage} alt="Main" className="w-full h-full object-cover" />
                     {/* Arrows (Mock) */}
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white">{"<"}</span>
                     <span className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white">{">"}</span>
                </div>
            </div>

            {/* RIGHT: DETAILS SECTION */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl font-serif mb-2">Jersey Graphic Tee Dolce</h1>
                <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="text-gray-500">SKU: <span className="text-black">546374</span></span>
                    <span className="text-gray-500">Vendor: <span className="text-black">Dolce & Gabbana</span></span>
                </div>

                <div className="text-2xl font-bold mb-6">$129.00</div>

                {/* Stock Progress */}
                <div className="mb-6">
                     <p className="text-sm text-gray-600 mb-2">Hurry! Only <span className="text-red-500 font-bold">14</span> left in stock!</p>
                     <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                         <div className="h-full bg-black w-[80%] rounded-full"></div>
                     </div>
                </div>

                {/* Real time visitors */}
                <div className="flex items-center gap-2 text-sm text-black font-medium mb-6">
                   <span className="animate-pulse w-2 h-2 rounded-full bg-red-500"></span>
                   <p>Real time <span className="text-white bg-black px-1 mx-1">7</span> visitor right now</p>
                </div>

                <hr className="border-gray-100 mb-6" />

                {/* Selling Points */}
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2"><TbHanger className="text-lg" /> <span>Warranty: No code needed, just head to checkout!</span></div>
                    <div className="flex items-center gap-2"><FaTruck className="text-lg" /> <span>Free shipping: All orders are dispatched the next business day!</span></div>
                    <div className="flex items-center gap-2"><FaUndo className="text-lg" /> <span>We will beat any price: We back all products with a 14 days guarantee.</span></div>
                </div>

                {/* Selectors */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider mb-3">Select Color: <span className="text-gray-500 capitalize">{selectedColor}</span></p>
                    <div className="flex gap-2">
                        {colors.map(color => (
                             <div 
                                key={color.name}
                                className={`w-8 h-8 rounded-full border cursor-pointer flex items-center justify-center ${selectedColor === color.name ? 'border-2 border-gray-400' : 'border-gray-200'}`}
                                onClick={() => setSelectedColor(color.name)}
                             >
                                 <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color.hex }}></div>
                             </div>
                        ))}
                    </div>
                </div>

                 <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                         <p className="text-xs font-bold uppercase tracking-wider">Size: <span className="text-gray-500">{selectedSize}</span></p>
                         <p className="text-xs font-bold uppercase underline cursor-pointer hover:text-gray-600">Size Guide</p>
                    </div>
                    <div className="flex gap-3">
                        {sizes.map(size => (
                             <div 
                                key={size}
                                className={`w-10 h-10 border flex items-center justify-center text-sm cursor-pointer transition-colors ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-black'}`}
                                onClick={() => setSelectedSize(size)}
                             >
                                 {size}
                             </div>
                        ))}
                    </div>
                </div>

                {/* Sub Features */}
                 <div className="flex gap-6 text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
                     <span className="flex items-center gap-1 cursor-pointer hover:text-black"><FaRuler /> Size Guide</span>
                     <span className="flex items-center gap-1 cursor-pointer hover:text-black"><FaTruck /> Delivery & Return</span>
                     <span className="flex items-center gap-1 cursor-pointer hover:text-black"><FaEye /> Ask A Question</span>
                 </div>

                 {/* Buy Actions */}
                 <div className="flex flex-col gap-4">
                     <div className="relative">
                         <textarea 
                            className="w-full border border-gray-200 bg-gray-50 p-3 text-sm focus:outline-none focus:border-black resize-none h-16"
                            placeholder="Write your notes for the order..."
                         ></textarea>
                         <span className="absolute -top-2 left-2 bg-white px-1 text-[10px] uppercase font-bold text-gray-500">Notes:</span>
                     </div>
                     <div className="flex gap-4 h-12">
                         <div className="flex w-32 border border-gray-300">
                             <button className="flex-1 hover:bg-gray-100" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                             <div className="flex-1 flex items-center justify-center text-sm font-bold">{quantity}</div>
                             <button className="flex-1 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>+</button>
                         </div>
                         <button className="flex-1 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[#333] transition-colors">
                             Add to Cart
                         </button>
                     </div>
                 </div>

            </div>
        </div>
      </div>

       {/* REVIEWS & TABS SECTION */}
       <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-20 text-center">
            <h2 className="text-2xl font-bold mb-10">Customer Reviews</h2>

            <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
                <div className="flex items-center gap-4">
                     <div className="flex text-yellow-500 text-lg">
                         <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                     </div>
                     <span className="text-sm text-gray-500">Based on 1 review</span>
                </div>
                {/* Mock Review Bars */}
                <div className="flex flex-col gap-1 w-full max-w-xs">
                     {[5,4,3,2,1].map((stars, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                             <div className="flex text-yellow-500 w-20">
                                 {[...Array(5)].map((_, i) => i < stars ? <MdStar key={i}/> : <MdStarBorder key={i}/>)}
                             </div>
                             <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                 <div className={`h-full bg-yellow-400 ${idx === 0 ? 'w-full' : 'w-0'}`}></div>
                             </div>
                             <span>{idx === 0 ? 1 : 0}</span>
                         </div>
                     ))}
                </div>
                <div>
                     <button className="border border-gray-300 px-8 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors rounded-full">
                         Write a review
                     </button>
                </div>
            </div>
            
            <div className="text-left border-t border-gray-100 pt-8 max-w-4xl mx-auto">
                 <div className="flex text-yellow-500 text-sm mb-2"><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></div>
                 <h4 className="font-bold text-sm mb-2 flex items-center justify-between">
                     <span>Youngla</span>
                     <span className="text-gray-400 font-normal text-xs">April 11, 2026</span>
                 </h4>
                 <div className="flex items-center gap-2 mb-4">
                     <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src={tShirt3} className="w-full h-full object-cover"/></div>
                     <span className="text-xs font-bold">Verified Buyer</span>
                 </div>
                 <p className="text-sm text-gray-600">Love this breezy striped top. Lightweight, comfy, and the snappy detail adds a cute sumary vibe. Perfect with jeans or skirts!</p>
            </div>
       </div>

       {/* RELATED PRODUCTS */}
       <div className="bg-[#fff] py-16">
           <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
               <h2 className="text-2xl font-bold text-center mb-2">Related products</h2>
               <p className="text-center text-gray-500 text-sm mb-10">You may also like these popular picks! Explore our related products and find more styles you'll love.</p>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                   {relatedProducts.map((prod, idx) => (
                       <Card key={idx} data={prod} />
                   ))}
               </div>
           </div>
       </div>

    </div>
  );
};

export default CardDetails;
