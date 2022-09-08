import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    console.log("logging book in bookcard", book);

    return (
        <>
            {book.map((bk) => {
                return (
                    <section key={bk.id} className={styles.BookCard}>
                        <img src={bk.thumbnail} alt={bk.title} />
                        <h3>{bk.title}</h3>
                        <p>{bk.author}</p>
                    </section>
                );
            })}
        </>
    );
};

export default BookCard;
