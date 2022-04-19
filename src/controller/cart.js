const Cart = require("../models/cartSchema");
exports.addItemToCart = async (req, res) => {
  try {
    const cartItemFound = await Cart.findOne({ user: req.id });
    if (cartItemFound) {
      // if cart already already exists then update the cart by quantity
      const product = req.body.cartItems.product;
      const isItemAdded = cartItemFound.cartItems.find(
        (item) => item.product === product
      );
      if (isItemAdded) {
        const cartUpdate = await Cart.findOneAndUpdate(
          { user: req.id, "cartItems.product": product },
          {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: isItemAdded.quantity + req.body.cartItems.quantity,
              },
            },
          }
        );
        if (cartUpdate) {
          res.status(200).json({ message: "Cart item updated by quantity" });
        }
      } else {
        const cartUpdate = await Cart.findOneAndUpdate(
          { user: req.id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        );
        if (cartUpdate) {
          res.status(200).json({ message: "Cart item updated by cart again" });
        }
      }

      //   return res.status(200).json({ message: cartItemFound });
    } else {
      // if cart not exist then create the cart
      const cart = new Cart({
        user: req.id,
        cartItems: [req.body.cartItems],
      });
      const result = await cart.save();
      if (result) {
        return res.status(200).json({ cart });
      }
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
