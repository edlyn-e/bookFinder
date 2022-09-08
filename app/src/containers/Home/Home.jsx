// styling
import styles from "./Home.module.scss";

import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
    return (
        <div className={styles.Home}>
            <h1 className={styles.Home__Header}>Your next read awaits</h1>
            <p>Powered by the Google Books API</p>
            <SearchBar />
        </div>
    );
};

export default Home;
