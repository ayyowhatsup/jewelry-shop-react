import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { } from "./Header.css";
function Header() {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/jewelryCategory')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
      })
  }, [])

  const [collections, setCollections] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/collection')
      .then(res => res.json())
      .then(collections => {
        setCollections(collections)
      })
  }, [])

  return (
    <header className="header-wrap">
      <div className="header">
        <div className="header-inner">
          <div className="header-top">
            <div className="hd-top-wrap-left">
              <h1 className="logo">
                <a href="/">
                  <img src={process.env.PUBLIC_URL + "/jieunie_logo.png"} alt="" />
                </a>
              </h1>
              <div className="hd-top-search">
                <form className="header-search-form">
                  <input className="header-search-input" type="text" />
                  <button className="header-search-button" type="submit"></button>
                </form>
              </div>
            </div>
            <div className="hd-wrap-right">
              <ul>
                <li>
                  <Link className="collection-link" to="/login" title="Đăng nhập">
                    ĐĂNG NHẬP
                  </Link>
                </li>
                <li>
                  <Link className="collection-link" to="/login" title="Đăng nhập">
                    CÁ NHÂN
                  </Link>
                </li>
                <li>
                  <Link className="collection-link" to="/login" title="Đăng nhập">
                    TRUNG TÂM TRỢ GIÚP
                  </Link>
                </li>
                <li className="wishlist">
                  <Link className="collection-link" to="/myfavorite">
                    <i className="wishlist-icon"></i>
                    <span>0</span>
                  </Link>
                </li>
                <li>
                  <Link className="collection-link" to="/cart">
                    <i className="cart-icon"></i>
                    <span>0</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bot">
            <ul className="header-list-type">
              <li className="type">
                TRANG SỨC
                <ul className="dropdown-menu">
                  {categories.map(category => (
                    <div key={category.id} className="dropdown-menu-item-wrap">
                      <li className="dropdown-menu-item">
                        <Link className="collection-link" to={`jewelry-category/${category.id}`}>
                          {category.name}
                        </Link>
                        <div className="example-product-header">
                          {category.items.slice(0, 3).map((item, index) => (
                            <img key={index} className="top-sold-item" src={item.image[0]}
                              alt={item.name} />
                          ))}
                        </div>
                      </li>
                    </div>
                  ))}

                </ul>
              </li>
              <li className="type">
                BỘ SƯU TẬP
                <ul className="dropdown-menu">
                  <div className="dropdown-menu-item-wrap">
                    {collections.map((collection) => (
                      <li key={collection.id}>
                        <Link to={`/collection/${collection.id}`} className="collection-link">{collection.name}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
              <li className="type">
                KHUYẾN MÃI
                <ul className="dropdown-menu">
                  <div className="dropdown-menu-item-wrap">
                    <li className="collection-link">SALE OFF 40%</li>
                    <li className="collection-link">HAPPY WOMEN'S DAY</li>
                  </div>
                </ul>
              </li>
            </ul>
            <ul className="header-bot-right">
              <li>
                <Link className="collection-link" to={"#"}>
                  HỆ THỐNG CỬA HÀNG
                </Link>
              </li>
              <li>
                <Link className="collection-link" to={"#"}>
                  SỰ KIỆN
                </Link>
              </li>
              <li>
                <Link className="collection-link" to={"#"}>
                  TRIỂN LÃM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
