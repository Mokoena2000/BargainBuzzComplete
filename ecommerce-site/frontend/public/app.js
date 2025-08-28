const wishlistApiUrl = '/api/wishlist';

document.addEventListener('DOMContentLoaded', () => {
    const wishlistButton = document.getElementById('wishlist-button');
    const wishlistContainer = document.getElementById('wishlist-container');

    wishlistButton.addEventListener('click', () => {
        const itemId = wishlistButton.dataset.itemId;
        addItemToWishlist(itemId);
    });

    loadWishlist();
});

function addItemToWishlist(itemId) {
    fetch(`${wishlistApiUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Item added to wishlist!');
            loadWishlist();
        } else {
            alert('Failed to add item to wishlist.');
        }
    })
    .catch(error => console.error('Error:', error));
}

function loadWishlist() {
    fetch(wishlistApiUrl)
    .then(response => response.json())
    .then(data => {
        wishlistContainer.innerHTML = '';
        data.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'wishlist-item';
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <button onclick="removeItemFromWishlist('${item.id}')">Remove</button>
            `;
            wishlistContainer.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Error:', error));
}

function removeItemFromWishlist(itemId) {
    fetch(`${wishlistApiUrl}/remove`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Item removed from wishlist!');
            loadWishlist();
        } else {
            alert('Failed to remove item from wishlist.');
        }
    })
    .catch(error => console.error('Error:', error));
}