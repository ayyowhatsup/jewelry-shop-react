import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {} from "./Jewelry.css";

function Jewelry() {
  const { jewelryId } = useParams();
  const [item, setItem] = useState({ description: [], image: [], size: [] });

  const [imageIndex, setImageIndex] = useState(1);

  const [sizeIndex, setSizeIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/jewelry/${jewelryId}`)
      .then((res) => res.json())
      .then((item) => {
        setItem(item);
      });
  }, []);

  return (
    <div className="new-jewelry">
      <div className="new-collection-content-top-bar">
        Miễn phí vận chuyển cho toàn bộ đơn hàng
      </div>
      <div className="new-jewelry-content-wrapper">
        <div className="new-jewelry-content-destination">
          <Link
            style={{ textDecoration: "none", marginRight: "10px" }}
            to={"/"}
          >
            Trang chủ
          </Link>
          <span style={{ marginRight: "10px" }}>{">"}</span>
          <span style={{ marginRight: "10px" }}> Sản phẩm </span>
          <span style={{ marginRight: "10px" }}>{">"}</span>
          <span>{item.name}</span>
        </div>
        <div className="new-jewelry-content">
          <div className="new-jewelry-content-slide-image-wrapper">
            <div className="new-jewelry-content-slide-image">
              <div className="new-jewelry-content-slide-image-nav">
                {item.image.map((img, index) => (
                  <img
                    key={index}
                    className="new-jewelry-content-slide-image-nav-preview"
                    onClick={() => setImageIndex(index)}
                    src={img}
                    style={
                      imageIndex === index
                        ? { border: "1px solid black", boxSizing: "border-box" }
                        : {}
                    }
                    alt=""
                  ></img>
                ))}
              </div>
              <div className="new-jewelry-content-image">
                <img
                  className="new-jewelry-content-image-content"
                  src={item.image[imageIndex]}
                ></img>
              </div>
            </div>
            <div className="new-jewelry-content-warranty">
              <li>Miễn phí vận chuyển</li>
              <li>|</li>
              <li>Vệ sinh, làm sạch sản phẩm miễn phí trọn đời</li>
              <li>|</li>
              <li>Đổi hàng trong 7 ngày</li>
            </div>
          </div>
          <div className="new-jewelry-content-payment">
            <div className="new-jewelry-content-payment-header">
              <h2 className="new-jewelry-content-payment-header-name">
                {item.name}
              </h2>
              <div className="new-jewelry-content-payment-header-price-wrapper">
                <h3 className="new-jewelry-content-payment-header-price">
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </h3>
              </div>
            </div>
            <div className="new-jewelry-content-payment-header">
              <div className="new-jewelry-content-payment-item-size">
                <h4>Kích thước</h4>
                <div className="new-jewelry-content-payment-item-size-list">
                  {item.size.map((s, index) => (
                    <li
                      onClick={() => setSizeIndex(index)}
                      style={
                        index === sizeIndex
                          ? {
                              backgroundColor: "#FFB2B8",
                              padding: "10px",
                              height: "fit-content",
                              cursor: 'pointer'
                            }
                          : {
                              padding: "10px",
                              border: "1px solid #e2e2e2",
                              height: "fit-content",
                              cursor: 'pointer'
                            }
                      }
                      key={index}
                    >
                      {s}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="new-jewelry-content-payment-footer">
              <div className="new-jewelry-content-payment-add-wishlist">
                <i className="wishlist-icon"></i>
                <span>Thêm vào yêu thích</span>
              </div>
              <div className="new-jewelry-content-payment-add-cart">
                <i className="cart-icon"></i>
                <span>Thêm vào giỏ hàng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="new-jewelry-item-detail">
          <h2>Thông tin sản phẩm</h2>
          <p>{item.description.detail}</p>
          <span>Kim Loại: </span>
          <span>{item.description.material}</span>
          <br></br>
          <span>Màu sắc: </span>
          <span>{item.description.color}</span>
        </div>
        <div className="new-jewelry-content-footer">
          <div className="new-jewelry-content-footer-column">
            <h3 className="new-jewelry-content-footer-column-title">Chính sách đổi hàng</h3>
            <p className="new-jewelry-content-footer-column-detail">
              Chỉ cần thông báo cho Jieunie về nhu cầu đổi hàng của bạn trong
              vòng 7 ngày kể từ ngày nhận được hàng, nhân viên CSKH của Jieunie
              sẽ hỗ trợ bạn đổi sản phẩm khác
            </p>
          </div>
          <div className="new-jewelry-content-footer-column">
            <h3 className="new-jewelry-content-footer-column-title">Tặng quà</h3>
            <p className="new-jewelry-content-footer-column-detail">
              Bạn muốn gửi tặng trang sức Jieunie đến người đặc biệt? Chỉ cần
              chọn sản phẩm bạn muốn tặng, nhân viên CSKH của chúng tôi sẽ tự
              tay gói quà và viết thông điệp bạn muốn gửi đến người nhận quà.
              Chỉ cần ghi chú lên đơn hàng khi đặt hàng bạn nhé! Jieunie sẽ liên
              hệ bạn ngay!
            </p>
          </div>
          <div className="new-jewelry-content-footer-column">
            <h3 className="new-jewelry-content-footer-column-title">Miễn phí vận chuyển</h3>
            <p className="new-jewelry-content-footer-column-detail">
              Mừng ra mắt website thương mại điện tử chính thức của Jieunie Việt
              Nam, miễn phí vận chuyển cho toàn bộ đơn hàng từ ngày 1/1 -
              31/6/2022.
            </p>
          </div>
          <div className="new-jewelry-content-footer-column">
            <h3 className="new-jewelry-content-footer-column-title">Chính sách bảo hành</h3>
            <p className="new-jewelry-content-footer-column-detail">
              Các sản phẩm trang sức Jieunie được bảo hành trong vòng 30 ngày kể
              từ ngày mua hàng, áp dụng cho các lỗi về sản xuất, sản phẩm nguyên
              giá, không áp dụng chương trình khuyến mãi hoặc quà tặng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jewelry;
