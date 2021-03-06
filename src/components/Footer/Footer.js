import { } from "./Footer.css"

function Footer() {
    return (
        <footer className="new-footer">
            <div className="new-footer-wrapper">
                <div className="new-footer-top">
                    <div className="new-footer-top-logo-media">
                        <div className="new-footer-top-logo">
                            <img src={process.env.PUBLIC_URL + "/jieunie_logo.png"} alt="" />
                        </div>
                        <div className="new-footer-top-media">
                            <div className="new-footer-top-media-item">
                                <a href="https://facebook.com">
                                    <img style={{ height: '20px' }} src="https://img.icons8.com/ios-filled/344/facebook-new.png"></img>
                                </a>
                            </div>
                            <div className="new-footer-top-media-item">
                                <a href="https://instagram.com">
                                    <img style={{ height: '20px' }} src="https://img.icons8.com/material-outlined/344/instagram-new--v1.png"></img>
                                </a>
                            </div>
                            <div className="new-footer-top-media-item">
                                <a href="https://youtube.com">
                                    <img style={{ height: '20px' }} src="https://img.icons8.com/ios-filled/344/youtube-play.png"></img>
                                </a>
                            </div>
                            <div className="new-footer-top-media-item">
                                <a href="https://pinterest.com">
                                    <img style={{ height: '20px' }} src="https://img.icons8.com/ios/452/pinterest--v1.png"></img>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="new-footer-top-news-letter">
                        <h4>Nh???n th??ng tin m???i nh???t t??? Jieunie</h4>
                        <p>????ng k?? ngay ????? nh???n th??ng tin m???i nh???t v??? khuy???n m??i, s??? ki???n, offer... t??? Jieunie.</p>
                        <div className="new-footer-top-news-letter-input">
                            <input type="text" placeholder="Nh???p email c???a b???n" className="login-input" />
                            <div className="new-footer-top-news-letter-input-submit">
                                <img src={process.env.PUBLIC_URL + '/btn_arrow_next.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-footer-copyright">
                    <div>
                        Jieunie Jewelry, LLC. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer