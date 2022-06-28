import { createContext,useEffect,useState } from "react";
import {API_URL} from './const'
const CartContext = createContext();
const initCartLocal = localStorage.getItem("j_cart")!==null?JSON.parse(localStorage.getItem("j_cart")):[]
export function CartProvider({children}){
    const [cartLocal, setCartLocal] = useState(initCartLocal)
    const [cart,setCart] = useState([])
    function addToCart(productId, size, quantity){
        let cartItems = cartLocal
        let index =  cartItems.findIndex((cartItem) => cartItem.productId === productId && cartItem.size === size)
        if(index !== -1 ){
            cartItems[index].quantity =  cartItems[index].quantity + quantity
            if(cartItems[index].quantity <= 0){
                cartItems.splice(index,1)
            }
        }else{
            cartItems.push({productId: productId, size: size, quantity: 1})
        }
        const temp = []
        cartItems.map(item => temp.push(item))
        setCartLocal(temp)
        localStorage.setItem("j_cart", JSON.stringify(temp))
    }
    
    useEffect(() =>{
        if (cartLocal !== null) {
            
          Promise.all(
            cartLocal.map((cartItem) =>
              fetch(API_URL+`/jewelry/${cartItem.productId}`)
                .then((res) => res.json())
                .then((item) => ({
                  product: item,
                  size: cartItem.size,
                  quantity: cartItem.quantity,
                }))
            )
          ).then((sth) => {
            setCart(sth)});
        }
      },[JSON.stringify(cartLocal)])
    return(
        <CartContext.Provider value={{cart, addToCart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext