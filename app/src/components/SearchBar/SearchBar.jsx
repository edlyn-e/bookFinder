import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { useState } from "react";
import { useContext } from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const { setSearch } = useContext(SearchContext);

    let navigate = useNavigate();

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
        setInput("");
        console.log("form has been submitted");

        navigate("/results");
    };

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                className={styles.SearchBar__Input}
            />
            <input type="submit" value="Go" />
        </form>
    );
};

export default SearchBar;
