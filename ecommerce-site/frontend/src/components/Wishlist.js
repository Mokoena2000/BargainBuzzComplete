import React, { useEffect, useState } from 'react';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetch('/api/wishlist')
            .then(response => response.json())
            .then(data => setWishlistItems(data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, []);

    const removeItem = (itemId) => {
        fetch(`/api/wishlist/${itemId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
            })
            .catch(error => console.error('Error removing item:', error));
    };

    return (
        <div>
            <h2>Your Wishlist</h2>
            <ul>
                {wishlistItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;