import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Offers = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p className="text-center text-gray-500">Loading offers...</p>;

  // Select random 6 products for offers
  const offerProducts = products.slice(5, 11);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Exclusive Offers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offerProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
