import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { } from './Register.css'
function Register() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [passWord, setPassWord] = useState("")
    const [gender, setGender] = useState(0)

    const [dateOfBirth, setDateOfBirth] = useState('2001-01-01')

    const handleRegister = (e) => {
        e.preventDefault();
        let data = {
            name: {
                firstname: firstName,
                lastname: lastName,
            },
            gender: gender === 0 ? "male" : "female",
            dob: dateOfBirth,
            email: email,
            phonenumber: phoneNumber,
            password: passWord,
        }
        if (firstName && lastName && email && phoneNumber && passWord) {
            fetch("http://localhost:3000/user/users", {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if(response.ok) return response
                return Promise.reject(response)
            })
                .then(data => {
                    toast.success("Đăng ký tài khoản thành công!")
                    navigate("/login")
                }
                ).catch(e => {
                    toast.error("Email hoặc số điện thoại đã tồn tại!")
                })
        } else {
            toast.warn("Vui lòng điền đầy đủ các trường!")
        }

    }

    return (

        <div className="new-register">
            <div className="new-login-header">
                <div className="new-login-header-destination">
                    <Link
                        style={{ textDecoration: "none", marginRight: "10px" }}
                        to={"/"}
                    >
                        Trang chủ
                    </Link>
                    <span style={{ marginRight: "10px" }}>{">"}</span>
                    <span>Đăng ký</span>
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
                        <h1 style={{ display: 'inline', textAlign: 'center', flex: 1 }}>ĐĂNG KÝ</h1>
                    </div>
                    <form onSubmit={handleRegister} className="login-form">
                        <input className='login-input' onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Tên"></input>
                        <input className='login-input' onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Họ"></input>
                        <div className='gender-input'>
                            <input type='radio' checked={gender === 0} id='male' onChange={() => setGender(0)}></input>
                            <label htmlFor='male'>Nam</label>
                            <input type='radio' checked={gender === 1} id='female' onChange={() => setGender(1)}></input>
                            <label htmlFor='male'>Nữ</label>
                        </div>
                        <div className='login-input register-dob'>
                            <label htmlFor='register-dob-input'>Ngày sinh:</label>
                            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} id='register-dob-input'></input>
                        </div>
                        <input className='login-input' type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                        <input className='login-input' type="text" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Số điện thoại"></input>
                        <input className='login-input' type="password" onChange={(e) => setPassWord(e.target.value)} placeholder="Mật khẩu"></input>

                        <input type="submit" className="login-input new-login-register-btn" value="Đăng ký"></input>

                    </form>
                </div>
            </div>
        </div>

    )

}

export default Register