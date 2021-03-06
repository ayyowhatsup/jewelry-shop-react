import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../CartContext";
import { } from "./Header.css";
import { API_URL } from './../../const'
import UserContext from "../../UserContext";
function Header() {

  const auth = useContext(UserContext)
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(API_URL + '/collection?type=jewelryCategory')
      .then(res => res.json())
      .then(categories => {
          Promise.all(categories.map((category)=>{
            return Promise.all(category.items.map(itemId => {
              return fetch(API_URL + `/jewelry/${itemId}`)
              .then(res=>res.json())
              .then(item => {
                return item
              })
            }))
            .then(sth => {   
              category.items = sth           
              return category
            })
            
          })
          )
          .then(sth => setCategories(sth))
        }
      )
  }, [])

  const [collections, setCollections] = useState([])
  useEffect(() => {
    fetch(API_URL + '/collection?type=collection')
      .then(res => res.json())
      .then(categories => {
          Promise.all(categories.map((category)=>{
            return Promise.all(category.items.map(itemId => {
              return fetch(API_URL + `/jewelry/${itemId}`)
              .then(res=>res.json())
              .then(item => {
                return item
              })
            }))
            .then(sth => {   
              category.items = sth           
              return category
            })
            
          })
          )
          .then(sth => setCollections(sth))
        }
      )
  }, [])
  const { cart } = useContext(CartContext)
  return (
    <header className="header-wrap">
      <div className="header">
        <div className="header-inner">
          <div className="header-top">
            <div className="hd-top-wrap-left">
              <h1 className="logo">
                <Link to="/">
                  <img src={process.env.PUBLIC_URL + "/jieunie_logo.png"} alt="" />
                </Link>
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
                {auth.user === null ?
                  <li>
                    <Link className="collection-link" to="/login" title="????ng nh???p">
                      ????NG NH???P
                    </Link>
                  </li>
                  : <></>
                }

                <li>
                  <Link className="collection-link" to="/account" title="C?? nh??n">
                    C?? NH??N
                  </Link>
                </li>
                <li>
                  <Link className="collection-link" to="/" title="Trung t??m tr??? gi??p">
                    TRUNG T??M TR??? GI??P
                  </Link>
                </li>
                {auth.user !== null ?
                  <li>
                    <Link className="collection-link" to="/">
                      Xin ch??o, {auth.user.name.firstname}
                    </Link>
                  </li>
                  : <></>
                }
                {auth.user !== null ?
                  <li>
                    <div className="collection-link" onClick={(e) => {
                      auth.signOut(() => {
                        navigate("/")
                      })
                    }}>
                      ????ng xu???t
                    </div>
                  </li>
                  : <></>
                }

                <li className="wishlist">
                  <Link className="collection-link" to="/myfavorite">
                    <i className="wishlist-icon"></i>
                    <span>0</span>
                  </Link>
                </li>
                <li>
                  <Link className="collection-link" to="/cart">
                    <i className="cart-icon"></i>
                    <span>{cart.reduce((prev, curr) => prev + curr.quantity, 0)}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bot">
            <ul className="header-list-type">
              <li className="type">
                TRANG S???C
                <ul className="dropdown-menu">
                  {categories.map(category => (
                    <div key={category.id} className="dropdown-menu-item-wrap">
                      <li className="dropdown-menu-item">
                        <Link className="collection-link" to={`collection/${category.id}`}>
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
                B??? S??U T???P
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
                KHUY???N M??I
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
                  H??? TH???NG C???A H??NG
                </Link>
              </li>
              <li>
                <Link className="collection-link" to={"#"}>
                  S??? KI???N
                </Link>
              </li>
              <li>
                <Link className="collection-link" to={"#"}>
                  TRI???N L??M
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
