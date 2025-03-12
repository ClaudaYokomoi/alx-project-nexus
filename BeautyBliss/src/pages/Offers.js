import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
        const discountedProducts = response.data.filter(product => product.price < 10); 
        setOffers(discountedProducts);
      } catch (err) {
        setError("Failed to fetch offers");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <p>Loading offers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Special Offers</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {offers.map(product => (
          <div key={product.id} className="border p-2 rounded shadow">
            <img src={product.image_link} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-red-500 font-bold">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
