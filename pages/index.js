import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$49.99",
      image: "https://picsum.photos/400/300?random=4",
    },
  ];

  return (
    <Layout>
      <div className="h-screen text-white">
        <div className="bg-red-500 p-4">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-4">
              <li>SR PRODUCTS</li>
            </ul>
          </div>
        </div>

        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-2">
              Discover Amazing Products
            </h1>
            <p className="text-lg">
              Shop the latest trends in fashion and electronics
            </p>
            <button className="bg-red-600 text-white py-2 px-4 mt-4 rounded hover:bg-red-700">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-black">{product.price}</p>
                <button className="bg-red-600 text-white mt-2 py-1 px-2 rounded hover:bg-red-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-red-500 py-12 mt-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-white">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
            />
            <button className="bg-white text-red-600 py-2 px-4 ml-2 rounded-full hover:bg-red-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
