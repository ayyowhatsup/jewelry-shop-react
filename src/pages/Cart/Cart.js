import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import {} from "./Cart.css";
function Cart() {
  const {cart, addToCart} = useContext(CartContext)

  return (
    <div className="new-cart-wrapper">
      <div className="new-cart">
        <h2 className="new-cart-title">Giỏ hàng của bạn</h2>
        <div className="new-cart-content">
          <div className="new-cart-list-cart-item">
            {cart.length !== 0 ? (
              cart.map((cartItem) => (
                <div className="new-cart-item">
                  <div className="new-cart-item-image">
                    <img src={cartItem.product.image[1]} alt="" />
                  </div>
                  <div className="new-cart-item-detail">
                    <div>{cartItem.product.name}</div>
                    <div className="new-cart-item-detail-price">
                      Giá :{" "}
                      {new Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: "VND",
                      }).format(cartItem.product.price)}
                    </div>
                    <div className="new-cart-item-detail-size">
                      Kích cỡ: {cartItem.size}
                    </div>
                  </div>
                  <div className="new-cart-item-quantity">
                    <div onClick={() => addToCart(cartItem.product.id, cartItem.size, -1)} className="new-cart-item-quantity-btn new-cart-item-quantity-remove">-</div>
                    <div>{cartItem.quantity}</div>
                    <div onClick={() => addToCart(cartItem.product.id, cartItem.size, 1)} className="new-cart-item-quantity-btn new-cart-item-quantity-add">+</div>
                  </div>
                  <div className="new-cart-item-cost">
                    {" "}
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "VND",
                    }).format(cartItem.product.price * cartItem.quantity)}
                  </div>
                  <div className="new-cart-item-quantity-btn new-cart-item-quantity-remove" onClick={() => addToCart(cartItem.product.id, cartItem.size, -cartItem.quantity)}>Xóa</div>
                </div>
              ))
            ) : (
              <div className="new-cart-empty">
                <h3>Giỏ hàng của bạn đang trống</h3>
                <Link to={"/"} className="new-cart-empty-btn-home">
                  <i className="cart-icon"></i>
                  Tiếp tục mua sắm
                </Link>
              </div>
            )}
          </div>
          {cart.length !== 0 ? (
            <div className="new-cart-price-to-pay">
              <div className="new-cart-total-price">
                <div>Tổng tiền</div>
                <div>
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "VND",
                  }).format(cart.reduce((prev, curr) => prev + curr.product.price*curr.quantity, 0))}
                </div>
              </div>
              <div>Khi bấm nút "Thanh toán" đồng nghĩa Khách hàng đã hiểu và đồng ý các Điều khoản dịch vụ của Jieunie.</div>
              <Link to={"/payment"} className="new-cart-empty-btn-home">Thanh toán</Link>
              <Link to={"/"} className="new-page-not-found-navigate-back">Tiếp tục mua sắm</Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
