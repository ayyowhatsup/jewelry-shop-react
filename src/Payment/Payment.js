import { useContext } from "react";
import CartContext from "./../CartContext";
import UserContext from "./../UserContext"
import { Link, useNavigate } from "react-router-dom";

import { } from "./Payment.css";
import { API_URL } from "../const";
function Payment() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate()
  const auth = useContext(UserContext)

  const cartLocal = JSON.parse(localStorage.getItem("j_cart"))
  console.log(cartLocal);
  const handleSubmit = (e) => {
    const total = cart.reduce(
      (prev, curr) => prev + curr.product.price * curr.quantity,
      0
    )
    e.preventDefault()
    const address = document.getElementById('order-address').value
    if (address === "") {
      alert("Vui lòng điền địa chỉ nhận hàng!")
    } else {
      fetch(API_URL + '/orders', {
        method: 'POST',
        body: JSON.stringify(
          {
            userid: auth.user.id,
            products: cartLocal,
            price: total,
            status: "Đặt hàng thành công",
            address: address
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res=> {
        if(res.ok){
          return res.json();
        }
      })
      .then(order => {
        setCart([])
        localStorage.removeItem("j_cart")
        navigate("/account")
      })
    }
  }
  return (
    <div className="new-payment">
      <div className="new-payment-wrapper">
        <div className="new-payment-user-info">
          <h1 className="logo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/jieunie_logo.png"} alt="" />
            </Link>
          </h1>
          <div>
            <Link className="collection-link" to={"/cart"}>
              Giỏ hàng
            </Link>{" "}
            {">"} Thanh toán
          </div>
          <h2>Thông tin giao hàng</h2>
          <div className="new-payment-user">
            <div className="new-payment-user-img">
              <img src="https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png" alt="" />
            </div>
            <div className="new-payment-user-detail">
              <div>{auth.user.name.firstname + " " + auth.user.name.lastname} ({auth.user.email})</div>
              <div className="collection-link" onClick={() => {
                auth.signOut(() => {
                  navigate("/")
                })
              }}>Đăng xuất</div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="new-payment-input">
              <div className="new-payment-input-title">Họ và tên</div>
              <input type="text" name="username" id="" readOnly value={auth.user.name.firstname + " " + auth.user.name.lastname} />
            </div>
            <div className="new-payment-input">
              <div className="new-payment-input-title">Số điện thoại</div>
              <input type="text" name="phone" id="" readOnly value={auth.user.phonenumber} />
            </div>
            <div className="new-payment-input">
              <div className="new-payment-input-title">Địa chỉ</div>
              <input type="text" name="address" id="order-address" />
            </div>

            <div className="new-payment-btn">
              <Link className="collection-link" to={"/cart"}>
                Giỏ hàng
              </Link>
              <input
                className="new-cart-empty-btn-home new-payment-process-btn"
                type="submit"
                value="Tiến hành đặt hàng"
              />
            </div>
          </form>
        </div>
        <div className="new-payment-item-info">
          <div className="new-payment-item-list">
            {cart.map((cartItem) => (
              <div className="new-payment-item">
                <div className="new-payment-item-img">
                  <div className="new-payment-item-quantity">
                    {cartItem.quantity}
                  </div>
                  <img
                    src={cartItem.product.image[1]}
                    alt={cartItem.product.name}
                  />
                </div>
                <div className="new-payment-item-detail">
                  <div>{cartItem.product.name}</div>
                  <div className="new-payment-item-detail-size">
                    {cartItem.size}
                  </div>
                </div>
                <div className="new-payment-item-price">
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "VND",
                  }).format(cartItem.product.price * cartItem.quantity)}
                </div>
              </div>
            ))}
          </div>
          <div className="new-payment-cost new-payment-box">
            <div className="new-payment-cost-partly">
              <h4>Tạm tính</h4>
              <h4>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "VND",
                }).format(
                  cart.reduce(
                    (prev, curr) => prev + curr.product.price * curr.quantity,
                    0
                  )
                )}
              </h4>
            </div>
            <div className="new-payment-cost-partly">
              <h4>Phí vận chuyển</h4>
              <h4>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "VND",
                }).format(0)}
              </h4>
            </div>
          </div>
          <div className="new-payment-cost-partly new-payment-box">
            <h3>THÀNH TIỀN</h3>
            <h3>
              {new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "VND",
              }).format(
                cart.reduce(
                  (prev, curr) => prev + curr.product.price * curr.quantity,
                  0
                )
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
