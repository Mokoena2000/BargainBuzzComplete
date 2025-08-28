const express = require('express');
const WishlistController = require('../controllers/wishlistController');

const router = express.Router();
const wishlistController = new WishlistController();

router.post('/wishlist', wishlistController.addItem);
router.delete('/wishlist/:itemId', wishlistController.removeItem);
router.get('/wishlist', wishlistController.getWishlist);

module.exports = router;