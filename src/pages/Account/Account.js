import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../UserContext";
import {} from "./Account.css";

function Account() {
  const [orders, setOrders] = useState([]);
  const auth = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/api/orders?userid=${auth.user.id}&_sort=createdAt&_order=desc`)
      .then((res) => res.json())
      .then((orders) => setOrders(orders));
  }, []);

  return (
    <div className="new-account">
      <div className="new-account-wrapper">
        <div className="h1">
           <h1>TÀI KHOẢN CỦA BẠN</h1> 
        </div>
        <div className="new-account-inner">
          <div className="new-account-nav">
            <h3>TÀI KHOẢN</h3>
            <ul>
              <li className="collection-link">Thông tin tài khoản</li>
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
            <h3>THÔNG TIN TÀI KHOẢN</h3>
            <div className="new-account-info">
              <div>
                {auth.user.name.firstname + " " + auth.user.name.lastname}
              </div>
              <div>{auth.user.phonenumber}</div>
              <div>{auth.user.email}</div>
            </div>
            <h4>DANH SÁCH ĐƠN HÀNG MỚI NHẤT</h4>
            <div className="new-account-order-list">
              <div className="new-account-order">
                <div className="new-account-order-id new-account-title">
                  Mã đơn hàng
                </div>
                <div className="new-account-order-date new-account-title">
                  Ngày đặt
                </div>
                <div className="new-account-order-price new-account-title">
                  Thành tiền
                </div>
                <div className="new-account-order-status new-account-title">
                  Trạng thái
                </div>
              </div>
              {orders.length>0?orders.map((order) => (
                <Link to={`/account/bill/${order.id}`} key={order.id} className="new-account-order collection-link">
                  <div className="new-account-order-id">#{order.id}</div>
                  <div className="new-account-order-date">{new Date(order.createdAt).toLocaleDateString()}</div>
                  <div className="new-account-order-price">
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "VND",
                    }).format(order.price)}
                  </div>
                  <div className="new-account-order-status">{order.status}</div>
                </Link>
              )):<div style={{textAlign: 'center'}}>Bạn chưa đặt đơn hàng nào! </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
