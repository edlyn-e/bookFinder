import React from "react";
import styles from "./BookGrid.module.scss";

import { fetchBooks } from "../../services/server";
import BookCard from "../../components/BookCard/BookCard";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const BookGrid = () => {
    const { search } = useContext(SearchContext);
    const [book, setBook] = useState([]);

    const getBooks = async () => {
        const results = await fetchBooks(search);
        console.log("loggin book grid results", results);

        if (results === []) {
            return <p> No results found. </p>;
        }
        setBook(results);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className={styles.BookGrid}>
            <BookCard book={book} />
        </div>
    );
};

export default BookGrid;
