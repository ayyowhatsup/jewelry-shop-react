
import { useState } from 'react'
import {} from './Register.css'

function Register() {


    console.log("Đăng kí");


    return (

        <div className="new-register">
            <form className='register-form'>
                <h1 className="new-register-head">Đăng ký</h1>
                
                <input type="text" placeholder="Tên" id="first-name" />
                <input type="text" placeholder="Họ" id="last-name" />
                <div style={{display:'inline-block'}}>
                    <div>
                        <input type="radio" id='gender-male'/>
                        <label htmlFor='gender-male'>Nam</label>
                    </div>
                    <div >
                        <input  type="radio" id='gender-female'/>
                        <label style={{float:'left'}} htmlFor='gender-female'>Nữ</label> 
                    </div>
                    
                </div>
                
                <input type="text" placeholder='Sinh nhật: ngày/tháng/năm'/>
                <input type="text" placeholder="Email" id="first-name" />
                <input type="text" placeholder="Số điện thoại" id="first-name" />
                <input type="password" placeholder="Mật khẩu" id="first-name" />

                <button>ĐĂNG KÝ</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>Đăng nhập Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>Đăng nhập Facebook</div>
                </div>
            </form>
        </div>

    )

}

export default Register