import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const cartTotal = useSelector((state) => state.cart.cartTotal);
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <Card className={classes.modal}>
            <div className={classes.card}>
                <h2>Your Shopping Cart</h2>
                <ul>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => <CartItem key={item.title} item={item} />)
                    ) : (
                        <h3>Your cart is empty</h3>
                    )}
                </ul>
                <div className={classes.total}>
                    SubTotal: ${cartItems.length > 0 ? cartTotal.toFixed(2) : 0}
                </div>
            </div>
        </Card>
    );
};

export default Cart;
