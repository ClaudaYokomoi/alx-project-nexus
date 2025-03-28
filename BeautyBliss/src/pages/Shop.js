import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { fetchProducts } from '../services/api';
import Product from '../components/Product';
import Loading from '../components/Loading';

const Shop = () => {
  const { products, loading } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  const categories = ['All', ...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesBrand && matchesPrice;
  });

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shop Beauty Products</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
            <div className="space-y-2">
              {brands.map(brand => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, e.target.value])}
              className="w-full"
            />
          </div>

          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedBrands([]);
              setPriceRange([0, 100]);
            }}
            className="w-full bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Reset Filters
          </button>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;