import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import UserContext from "../../UserContext";
import {} from "./Bill.css";
import { API_URL } from "../../const";

function Bill() {
  const [orderDetail, setOrderDetail] = useState([]);
  const [order, setOrder] = useState([]);
  const { billId } = useParams();
  const auth = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(API_URL + `/orders/${billId}`)
      .then((res) => res.json())
      .then((order) => {
        setOrder(order);
        Promise.all(
          order.products.map((cartItem) =>
            fetch(API_URL + `/jewelry/${cartItem.productId}`)
              .then((res) => res.json())
              .then((item) => ({
                product: item,
                size: cartItem.size,
                quantity: cartItem.quantity,
              }))
          )
        ).then((sth) => {
          setOrderDetail(sth);
        });
      });
  }, []);

  return (
    <div className="new-account">
      <div className="new-account-wrapper">
        <div className="h1">
          <h1>CHI TIẾT ĐƠN HÀNG</h1>
        </div>
        <div className="new-account-inner">
          <div className="new-account-nav">
            <h3>TÀI KHOẢN</h3>
            <ul>
              <li>
                <Link className="collection-link" to={"/account"}>
                  Thông tin tài khoản
                </Link>
              </li>
              <li
                onClick={() => {
                  auth.signOut(() => {
                    navigate("/");
                  });
                }}
                className="collection-link"
              >
                Đăng xuất
              </li>
            </ul>
          </div>
          <div className="new-account-content">
            <h3>THÔNG TIN ĐƠN HÀNG</h3>
            <div className="new-account-info">
              <div>
                Đơn hàng #{order.id} -{" "}
                {new Date(order.createdAt).toLocaleString()}
              </div>
            </div>
            <h4>DANH SÁCH VẬT PHẨM</h4>
            <div className="new-account-order-list">
              <div className="new-account-order">
                <div className="new-bill-detail-product-name new-account-title">
                  Tên sản phẩm
                </div>
                <div className="new-bill-detail-product-price new-account-title">
                  Giá tiền
                </div>
                <div className="new-bill-detail-quantity new-account-title">
                  Số lượng
                </div>
                <div className="new-bill-detail-temp-price new-account-title">
                  Thành tiền
                </div>
              </div>
              {orderDetail.map((orderDetailItem) => (
                <Link
                  to={`/jewelry/${orderDetailItem.product.id}`}
                  key={orderDetailItem.product.id}
                  className="new-account-order collection-link"
                >
                  <div className="new-bill-detail-product-name">
                    {orderDetailItem.product.name}
                  </div>
                  <div className="new-bill-detail-product-price">
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "VND",
                    }).format(orderDetailItem.product.price)}
                  </div>
                  <div className="new-bill-detail-quantity">
                    {orderDetailItem.quantity}
                  </div>
                  <div className="new-bill-detail-temp-price">
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      orderDetailItem.product.price * orderDetailItem.quantity
                    )}
                  </div>
                </Link>
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
                    orderDetail.reduce(
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
              <h2>THÀNH TIỀN</h2>
              <h2>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "VND",
                }).format(
                  orderDetail.reduce(
                    (prev, curr) => prev + curr.product.price * curr.quantity,
                    0
                  )
                )}
              </h2>
            </div>
            <div className="new-bill-detail-address-box">
                <div>
                    <h3>THÔNG TIN NHẬN HÀNG</h3>
                    <div>{auth.user.name.firstname + " " + auth.user.name.lastname}</div>
                    <div>{auth.user.phonenumber}</div>
                    <div>{order.address}</div>
                </div>
                <div>
                    <h3>TRẠNG THÁI ĐƠN HÀNG</h3>
                    <div>{order.status}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bill;
