import { addItem, removeItem } from '../../store/cart-slice';

import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const dispatch = useDispatch();

    const { title, quantity, total, price } = props.item;
    const addItemToCart = (product) => {
        dispatch(addItem(product));
    };

    const removeItemFromCart = (product) => {
        dispatch(removeItem(product));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={() => {
                            removeItemFromCart({ title, price, quantity: 1 });
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            addItemToCart({ title, price, quantity: 1 })
                        }
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
