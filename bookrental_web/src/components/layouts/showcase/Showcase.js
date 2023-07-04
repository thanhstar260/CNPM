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
                <h1>Quality Books Are Available</h1>
                <p>Rent various<span className="text-primary">book </span> at cheap price</p>
                <SearchInputForm darkTheme={true}/>
            </div>

            
        </section>
    )
}

export default Showcase;