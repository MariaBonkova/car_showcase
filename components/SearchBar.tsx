"use client"
import React from "react";

const SearchBar = () => {
    const handleSearch =()=>{}
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManifactory/>

            </div>

        </form>
    )
};

export default SearchBar;