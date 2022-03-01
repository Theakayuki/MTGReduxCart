import ProductItem from './ProductItem';
import { addItem } from '../../store/cart-slice';
// import booster from '../../img/CrimsonBooster.png';
import classes from './Products.module.css';
import { useDispatch } from 'react-redux';

const Products = (props) => {
    const dispatch = useDispatch();
    // setup dispatch to addItem action
    const addItemToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    title='MTG: Crimson Vow Booster'
                    price={13.95}
                    description='Crimson Vow will continue the new Innistrad storyline begun in Innistrad: Midnight Hunt, Single Booster'
                    addItem={addItemToCart}
                    img={'CrimsonBooster'}
                />
                <ProductItem
                    title='MTG: Crimson Vow Bundle'
                    price={34.43}
                    description='Crimson Vow will continue the new Innistrad storyline begun in Innistrad: Midnight Hunt, Bundle set'
                    addItem={addItemToCart}
                    img={'CrimsonBundle'}
                />
                <ProductItem
                    title='MTG: Crimson Vow Gift Box'
                    price={42.48}
                    description='Crimson Vow will continue the new Innistrad storyline begun in Innistrad: Midnight Hunt, Gift Box set'
                    addItem={addItemToCart}
                    img={'CrimsonGiftSet'}
                />
            </ul>
        </section>
    );
};

export default Products;
