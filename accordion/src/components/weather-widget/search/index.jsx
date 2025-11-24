import { useState } from "react";

export default function Search({ search, setSearch, handleSearch }) {
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-engine">
            <input
                type="text"
                className="city-search"
                placeholder="Enter City Name"
                name="search"
                onKeyDown={handleKeyPress}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button
                className="search-btn"
                onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}