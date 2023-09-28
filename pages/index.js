// pages/index.js
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Home = () => {
  
  return (
    <Layout>
      <div className="bg-black h-screen text-white">
      <div className="bg-red-600 p-4">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-4">
              <li>  
               SK PRODUCTS
              </li>
            
            </ul>
            
            
          </div>
        </div>

        <div className="bg-hero-image h-96 bg-cover bg-center flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-2">Purchase Anytime, Anywhere.</h1>
            <p className="text-lg">Buy unlimited Dresses and Electronics on your device.</p>
            <button className="bg-red-600 text-white py-2 px-4 mt-4 rounded hover:bg-red-700">
              Get Started
            </button>
          </div>
        </div>

        
      </div>
    </Layout>
  );
};

export default Home;
