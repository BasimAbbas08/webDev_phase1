import React, { useEffect, useState } from 'react';
import './Listings.css';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const mockListings = [
      {
        image: 'https://via.placeholder.com/150',
        title: 'Beautiful Beach House',
        type: 'Entire home',
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        price: 200,
        rating: 4.5,
      },
      // Add more listings
    ];
    setListings(mockListings);
  }, []);

  return (
    <div className="listings">
      {listings.map((listing, index) => (
        <div key={index} className="listing-card">
          <img src={listing.image} alt={listing.title} />
          <h3>{listing.title}</h3>
          <p>{listing.type}</p>
          <p>{listing.guests} guests • {listing.bedrooms} bedrooms • {listing.bathrooms} bathrooms</p>
          <p>${listing.price} / night</p>
          <p>Rating: {listing.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Listings;
