import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchinputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Best <span className="text-primary">Books </span>  Are Available</h1>
                <p>Rent various book at cheap price</p>
                <SearchInputForm darkTheme={true}/>
            </div>

            
        </section>
    )
}

export default Showcase;