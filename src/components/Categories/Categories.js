import React, { useState } from 'react';
import './Categories.css';

function Categories() {
  const categories = ['Beachfront', 'Cabins', 'Trending', 'Unique', 'Pets Allowed'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <button 
          key={category} 
          className={category === activeCategory ? 'active' : ''} 
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
