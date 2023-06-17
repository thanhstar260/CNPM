import React from "react";
import './footer.style.css'

const Footer = () => {
    return (
        <section className="footer-container" >
            <div class="footer-content">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <p>Địa chỉ: P. Linh Trung, Thủ Đức, TP.HCM</p>
                <p>Mở cửa: 7h30 a.m</p>
                <p>Đóng cửa: 9h p.m</p>
                <p>Hotline: 0328518596</p>
                <p>Email: info@bookrental.com</p>
            </div>
            <div class="footer-content">
                <h3>FOLLOW US</h3>
                <a href="" target="_blank">
                <i class="fab fa-facebook"></i>
                </a>
                <a href="" target="_blank">
                <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div class="footer-content">
                <h3>HƯỚNG DẪN</h3>
                <div class="hd"><a href="">Điều khoản</a></div>
                <div class="hd"><a href="">Hướng dẫn thuê sách</a></div>
                <div class="hd"><a href="">Chính sách đổi trả</a></div>
                <div class="hd"><a href="">Bảo mật thông tin</a></div>
            </div>
        </section>
    )
}

export default Footer;