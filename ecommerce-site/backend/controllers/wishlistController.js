class WishlistController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async addItem(req, res) {
        const { userId, item } = req.body;
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.wishlist.push(item);
            await user.save();
            res.status(200).json({ message: 'Item added to wishlist', wishlist: user.wishlist });
        } catch (error) {
            res.status(500).json({ message: 'Error adding item to wishlist', error });
        }
    }

    async removeItem(req, res) {
        const { userId, itemId } = req.body;
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.wishlist = user.wishlist.filter(item => item._id.toString() !== itemId);
            await user.save();
            res.status(200).json({ message: 'Item removed from wishlist', wishlist: user.wishlist });
        } catch (error) {
            res.status(500).json({ message: 'Error removing item from wishlist', error });
        }
    }

    async getWishlist(req, res) {
        const { userId } = req.params;
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ wishlist: user.wishlist });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving wishlist', error });
        }
    }
}

module.exports = WishlistController;