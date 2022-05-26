import { Link, useNavigate } from "react-router-dom";
import {} from "./Login.css";

function Login() {
  const navigate = useNavigate();
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
          <div style={{display:'flex',alignItems:'center',marginBottom:'80px'}}>
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
            <h1 style={{display:'inline', textAlign:'center',flex:1}}>ĐĂNG NHẬP</h1>
          </div>
          <form className="login-form">
            <input className='login-input' type="text" placeholder="Vui lòng nhập email"></input>
            <input className='login-input' type="password" placeholder="Vui lòng nhập mật khẩu"></input>
            <div>
              <div style={{float:'right',marginBottom:'15px'}}>Quên mật khẩu</div>
            </div>
            <input type="submit" className="login-input new-login-login-btn" value="Đăng nhập"></input>
            
            <input type="button" value='Đăng kí' className="login-input new-login-register-btn"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
