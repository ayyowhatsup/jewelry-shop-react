import { Link, useNavigate } from 'react-router-dom'
import { } from "./NotFound.css"

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="new-page-not-found">
      <div className="new-page-not-found-wrapper">
        <div className="new-page-not-found-inner">
          <h1>Oops, Không tìm thấy trang</h1>
          <h3>Chúng tôi xin lỗi vì sự bất tiện này!</h3>
          <p>Không tìm thấy trang được yêu cầu do địa chỉ trang web bạn đang cố gắng truy cập đã bị lỗi hoặc đã được di chuyển sang nơi khác. Vui lòng kiểm tra bạn đã nhập chính xác địa chỉ trang web hay chưa.</p>
          <p>Cảm ơn</p>
          <div className='new-page-not-found-navigate'>
            <div onClick={() => navigate(-1)} className='new-page-not-found-navigate-back'>
              Quay lại trang trước
            </div>
            <Link className="new-cart-empty-btn-home" to={"/"}>Trở về trang chủ</Link>

          </div>

        </div>
      </div>

    </div>
  );
}
export default NotFound;
