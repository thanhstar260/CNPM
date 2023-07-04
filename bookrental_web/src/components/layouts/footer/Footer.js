import React from "react";
import './footer.style.css'

const Footer = () => {
    return (
        <section className="footer-container" >
            <div class="footer-content">
                <h3>CONTACT US</h3>
                <p>Address: P. Linh Trung, Thu Duc, HCMC</p>
                <p>Open: 7h30 a.m</p>
                <p>Close: 9h p.m</p>
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
                <h3>SERVICES</h3>
                <div class="hd"><a href="">Terms of service</a></div>
                <div class="hd"><a href="">Return </a></div>
                <div class="hd"><a href="">Private Policy</a></div>
            </div>
        </section>
    )
}

export default Footer;