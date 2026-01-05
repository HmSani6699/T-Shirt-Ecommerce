import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { FaList, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

// Images
import tShirt from "../../../public/Images/t-shirt.jpg";
import tShirt1 from "../../../public/Images/t-shirt1.jpg";
import tShirt2 from "../../../public/Images/t-shirt2.jpg";
import tShirt3 from "../../../public/Images/t-shirt3.jpg";
import tShirt4 from "../../../public/Images/t-shirt4.jpg";

import cardimage1 from "../../../public/Images/card4.avif";
import cardimage2 from "../../../public/Images/card3.avif";
import cardimage3 from "../../../public/Images/card2.avif";

const Product = () => {
  // Mock Data
  const categories = [
    {
      id: "womens",
      name: "Women's",
      count: 20,
      subCategories: [
        { name: "Clothing", count: 18 },
        { name: "Shoes", count: 20 },
      ],
    },
    { id: "mens", name: "Men's", count: 18, subCategories: [] },
  ];

  const colors = [
    "#FF0000",
    "#000000",
    "#FFFF00",
    "#0000FF",
    "#008000",
    "#FFC0CB",
    "#FFFFFF",
    "#800080",
    "#FFA500",
    "#ADD8E6",
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  const brands = [
    { name: "Calvin Klein", count: 5 },
    { name: "Chanel", count: 2 },
    { name: "Dior", count: 6 },
    { name: "Dolce & Gabbana", count: 5 },
    { name: "Gucci", count: 4 },
  ];

  const products = [
    {
      id: 1,
      brand: "Giorgio Armani",
      name: "Faux Splateral Polo Shirt",
      price: 250.0,
      image: cardimage1,
    },
    {
      id: 2,
      brand: "Levi's",
      name: "Long strappy dress",
      price: 130.0,
      image: cardimage2,
    },
    {
      id: 3,
      brand: "Versace",
      name: "Low waist ripped jeans",
      price: 250.0,
      image: cardimage3,
    },
    {
      id: 4,
      brand: "Versace",
      name: "Mickey Hands forming a heart",
      price: 190.0,
      image: tShirt1,
    },
    {
      id: 5,
      brand: "Lacoste",
      name: "Mini sized backpack",
      price: 270.0,
      image: tShirt2,
      sale: "-20%",
    },
    {
      id: 6,
      brand: "Versace",
      name: "Oversized denim jacket",
      price: 170.0,
      image: cardimage3,
    },
  ];

  const featuredProducts = [
    {
      id: 101,
      brand: "Zara",
      name: "Cotton T-shirt with print",
      price: 150.0,
      image: tShirt,
    },
    {
      id: 102,
      brand: "Prada",
      name: "Cotton Crewneck Sweater",
      price: 350.0,
      image: tShirt3,
    },
    {
      id: 103,
      brand: "Calvin Klein",
      name: "Floppy hat",
      price: 155.0,
      image: tShirt4,
      sale: "-20%",
    },
  ];

  const [openCategory, setOpenCategory] = useState("womens");

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 font-sans text-[#333]">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* SIDEBAR FILTER SECTION */}
        <div className="w-full lg:w-[250px] flex-shrink-0 space-y-8">
          
          {/* Collection Filter */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Collection</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat.id}>
                  <div
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`border w-4 h-4 flex items-center justify-center text-[10px] ${openCategory === cat.id ? 'border-black' : 'border-gray-300'}`}>
                         {openCategory === cat.id && "✔"}
                      </span>
                      <span className={`text-sm ${openCategory === cat.id ? 'font-bold' : 'text-gray-600'}`}>{cat.name} ({cat.count})</span>
                    </div>
                    {cat.subCategories.length > 0 && (
                        <span className="text-gray-400 text-xs">{openCategory === cat.id ? "-" : "+"}</span>
                    )}
                  </div>
                  
                  {/* Subcategories */}
                  {openCategory === cat.id && (
                    <div className="pl-6 mt-2 space-y-2">
                      {cat.subCategories.map((sub, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                           <div className="w-3 h-3 border border-gray-200"></div>
                           <span className="text-sm text-gray-500">{sub.name} ({sub.count})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Color Filter */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Color</h3>
            <div className="flex flex-wrap gap-2">
                {colors.map((color, idx) => (
                    <div key={idx} 
                         className="w-6 h-6 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                         style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Price Filter (Visual Only) */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Price</h3>
            <div className="bg-gray-200 h-1 w-full relative mb-2">
                <div className="absolute left-0 w-1/2 h-full bg-black"></div>
                <div className="absolute left-1/2 w-3 h-3 bg-black rounded-full -top-1 -ml-1.5 cursor-pointer"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>$0</span>
                <span>$450</span>
            </div>
          </div>

           <hr className="border-gray-100" />

          {/* Size Filter */}
           <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Size</h3>
            <div className="grid grid-cols-2 gap-2">
                {sizes.map((size, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                         <div className="w-4 h-4 border border-gray-300 flex items-center justify-center"></div>
                         <span className="text-xs text-gray-600">{size} (5)</span>
                    </div>
                ))}
            </div>
          </div>

           <hr className="border-gray-100" />

          {/* Brand Filter */}
          <div>
             <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Brand</h3>
             <div className="space-y-2">
                 {brands.map((brand, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                         <div className="w-4 h-4 border border-gray-300"></div>
                         <span className="text-sm text-gray-600 hover:text-black cursor-pointer">{brand.name} ({brand.count})</span>
                     </div>
                 ))}
             </div>
          </div>

          {/* Featured Products Sidebar */}
          <div className="pt-8">
             <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Featured Products</h3>
             <div className="space-y-6">
                 {featuredProducts.map(item => (
                     <div key={item.id} className="flex gap-4 group cursor-pointer">
                         <div className="w-[70px] h-[90px] bg-gray-100 overflow-hidden relative">
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                             {item.sale && <span className="absolute top-1 left-1 bg-red-500 text-white text-[9px] px-1 py-0.5 font-bold">{item.sale}</span>}
                         </div>
                         <div className="flex-1">
                             <p className="text-[10px] text-gray-400 mb-1">{item.brand}</p>
                             <h4 className="text-sm font-medium leading-tight mb-2 group-hover:underline text-gray-800">{item.name}</h4>
                             <p className="text-sm font-bold text-gray-900">${item.price.toFixed(2)}</p>
                         </div>
                     </div>
                 ))}
             </div>
          </div>

        </div>

        {/* MAIN PRODUCT GRID */}
        <div className="flex-1">
            
            {/* Header & Toolbar */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">Women's</h1>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-b border-gray-200 py-3">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Sort:</span>
                            <span className="text-black font-medium cursor-pointer">Best selling</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                         <span className="text-sm text-gray-400">Showing all {products.length} products</span>
                         <div className="flex items-center gap-2 text-gray-400">
                             <div className="p-1 cursor-pointer hover:text-black"><FaList /></div>
                             <div className="p-1 cursor-pointer hover:text-black border-l border-gray-300 pl-3"><BsGrid3X3GapFill /></div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {products.map(product => (
                    <div key={product.id} className="group flex flex-col">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                             <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             {product.sale && <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1">{product.sale}</span>}
                             
                             {/* Hover Actions (Overlay) */}
                             <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                 {/* Could add quick view buttons here if needed */}
                             </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col flex-1">
                            <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
                            <h3 className="text-base font-medium text-gray-900 mb-1 leading-snug group-hover:text-gray-600 transition-colors cursor-pointer">
                                {product.name}
                            </h3>
                            <p className="text-sm font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
                            
                            {/* Actions */}
                            <div className="mt-auto flex items-center justify-between">
                                <button className="flex-1 text-xs font-bold uppercase tracking-widest border border-gray-300 py-3 hover:bg-black hover:text-white transition-colors duration-300">
                                    Add to cart
                                </button>
                                <div className="ml-3 flex items-center gap-3 text-gray-400">
                                    <IoMdHeartEmpty className="text-xl cursor-pointer hover:text-black" />
                                    {/* <BsBag className="text-lg cursor-pointer hover:text-black" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination / Load More */}
             <div className="mt-16 flex justify-center items-center gap-2 text-sm text-gray-500">
                 <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50">PREV</button>
                 <span className="font-bold text-black border-b border-black">1</span>
                 <span className="cursor-pointer hover:text-black">2</span>
                 <span className="cursor-pointer hover:text-black">3</span>
                 <span>...</span>
                 <span className="cursor-pointer hover:text-black">5</span>
                 <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50">NEXT</button>
             </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
