import { useContext } from "react";


import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import classes from './HeaderCartButton.module.css';
 
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curItem, item) => {
        return (curItem+item.amount)
    }, 0)
    console.log(numberOfCartItems);
 
        return (
            <button className={classes.button} onClick={props.onClick} >
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        )
}


export default HeaderCartButton;