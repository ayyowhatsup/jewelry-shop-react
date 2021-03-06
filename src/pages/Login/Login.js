import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { } from "./Login.css";
import UserContext from "./../../UserContext"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || "/"
  const auth = useContext(UserContext)


  const handleLogin = (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if(email&&password){
      auth.signIn(email, password, () => {
        navigate(from, { replace: true });
      })
    }else{
      toast.warn("Vui lòng điền đầy đủ các trường")
    }

    
  }

  return (
    <div className="new-login">
      <div className="new-login-header">
        <div className="new-login-header-destination">
          <Link
            style={{ textDecoration: "none", marginRight: "10px" }}
            to={"/"}
          >
            Trang chủ
          </Link>
          <span style={{ marginRight: "10px" }}>{">"}</span>
          <span>Đăng nhập</span>
        </div>
      </div>
      <div className="new-login-content">
        <div className="new-login-content-warp">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
            <div
              style={{
                background:
                  "url(https://www.jestina.co.kr/content/img_join/backBtn.png)",
                display: "inline-block",
                width: "36px",
                height: "36px",

              }}
              onClick={() => navigate(-1)}
            ></div>
            <h1 style={{ display: 'inline', textAlign: 'center', flex: 1 }}>ĐĂNG NHẬP</h1>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <input className='login-input' type="text" placeholder="Vui lòng nhập email" id="email"></input>
            <input className='login-input' type="password" placeholder="Vui lòng nhập mật khẩu" id="password"></input>
            <div>
              <div style={{ float: 'right', marginBottom: '15px' }}>Quên mật khẩu</div>
            </div>
            <input type="submit" className="login-input new-login-login-btn" value="Đăng nhập"></input>

            <Link to={"/register"} className="login-input new-login-register-btn">
              Đăng kí
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
