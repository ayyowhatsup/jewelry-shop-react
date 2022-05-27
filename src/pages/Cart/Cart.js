import { useState } from "react"
import {Link} from "react-router-dom"
import {} from "./Cart.css"
function Cart(){

    const [cart, setCart] = useState({product:[]})
    return(
        <div className="new-cart-wrapper">
            <div className="new-cart">
                <h2 className="new-cart-title">Giỏ hàng của bạn</h2>
                <div className="new-cart-content">
                    <div className="new-cart-list-order-item">
                        {cart.product.length!==0?cart.product.map(()=>(
                            <div></div>
                        )):
                        <div className="new-cart-empty">
                            <h3>Giỏ hàng của bạn đang trống</h3>
                            <Link to={"/"} className="new-cart-empty-btn-home">
                                <i className="cart-icon"></i>
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                        }
                    </div>
                    <div className="new-cart-payment">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart