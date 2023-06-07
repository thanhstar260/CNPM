import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchinputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar />
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Hè về giảm giá sốc</h1>
                <p>Đọc <span className="text-primary">Sách </span> giá rẻ nhiều thể loại</p>
                <SearchInputForm />
            </div>

            
        </section>
    )
}

export default Showcase;