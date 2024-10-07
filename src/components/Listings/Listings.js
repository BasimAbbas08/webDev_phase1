import React, { useEffect, useState } from 'react';
import './Listings.css';
import houseImage from '../../assets/house.jpg';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const mockListings = [
      {
        image: houseImage,
        title: 'Luxury House',
        type: 'Entire home',
        guests: 4,
        bedrooms: 5,
        bathrooms: 7,
        price: 1500,
        rating: 5.0,
      },
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
