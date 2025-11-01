import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Skin Therapy', id: '68a1a01c65c8051118d05cf5' },
  { name: 'Vitamin B12', id: '68a1a2cc63fabec29b1a83c7' },
  { name: 'Women Care', id: '68a1a2cc63fabec29b1a83c8' },
  { name: 'Health Care', id: '68a1a2cc63fabec29b1a83c9' },
  { name: 'Beauty Care', id: '68a1a2cc63fabec29b1a83ca' },
  { name: 'Skin Care', id: '68a1a2cc63fabec29b1a83cb' },
  { name: 'Baby Care', id: '68a1a2cc63fabec29b1a83cc' },
  { name: 'Hair Care', id: '68a1a2cc63fabec29b1a83cd' },
  { name: 'Oral Care', id: '68a1a2cc63fabec29b1a83ce' },
  { name: 'Medicine', id: '68a1a2cc63fabec29b1a83cf' }
];

const CategoryCard = ({ name, id }) => (
  <Link
    to={`/product/category/${id}`}
    className="bg-blue-500 text-white p-6 rounded-lg shadow hover:scale-105 hover:bg-blue-600 transition-transform duration-300 flex items-center justify-center text-center"
  >
    <p className="text-lg font-semibold">{name}</p>
  </Link>
);

const CategoryList = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Browse by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;