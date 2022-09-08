// styling
import styles from "./App.module.scss";

// library imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local pages
import Home from "./containers/Home/Home";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";
import BookGrid from "./containers/BookGrid";
import SearchProvider from "./context/SearchContext";

function App() {
    return (
        <div className={styles.App}>
            <SearchProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/results" element={<BookGrid />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </SearchProvider>
        </div>
    );
}

export default App;
