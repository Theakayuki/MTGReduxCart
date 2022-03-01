import Card from '../UI/Card';
import { addItem } from '../../store/cart-slice';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
    const { title, price, description } = props;
    const dispatch = useDispatch();
    // setup dispatch to addItem action
    const addItemToCart = (product) => {
        dispatch(addItem(product));
    };

    const imgs = props.img ? require(`../../img/${props.img}.png`).default : null;

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                {props.img && <img src={imgs} alt={title} className={classes.imgs} />}
                <div className={classes.actions}>
                    <button onClick={() => addItemToCart({ title, price, quantity: 1 })}>
                        Add to Cart
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
