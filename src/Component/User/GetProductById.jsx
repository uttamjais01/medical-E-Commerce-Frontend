import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const GetProductById = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/product/${productId}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product');
        toast.error(err.response?.data?.message || 'Error fetching product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="p-8 text-xl">Loading product...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!product) return <div className="p-8 text-gray-500">Product not found.</div>;

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6">{product.productName}</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        {product.image && (
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-60 object-cover rounded mb-4"
          />
        )}
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-blue-600">₹{product.price}</p>
        {/* Add more fields if available: stock, category, etc. */}
      </div>
    </div>
  );
};

export default GetProductById;