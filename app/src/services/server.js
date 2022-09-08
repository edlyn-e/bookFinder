// FETCHING BOOKS
export const fetchBooks = async (query) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`,
        );
        const data = await response.json();
        const results = data.items ?? [];

        // logging 'results' to make sure the function is working as intended
        // console.log("these are the results from the API call", results);

        if (results.length === 0) {
            return [];
        }

        const searchResults = results.map((item) => {
            // console.log("logging item", item);

            const book = {
                id: item.id,

                title: item.volumeInfo.title ?? "no title found",
                author: item.volumeInfo.authors ?? "no authors found",
                description:
                    item.volumeInfo.description ?? "no description found",
                publisher: item.volumeInfo.publisher ?? "no publisher found",
                isbn10:
                    item.volumeInfo.industryIdentifiers[0].identifier ??
                    "ISBN could not be found",

                link: item.volumeInfo.canonicalVolumeLink ?? "no link found",

                thumbnail:
                    item.volumeInfo.imageLinks.thumbnail ??
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
            };

            return book;
        });

        return searchResults;
    } catch (error) {
        throw new Error("error fetching books");
    }
};
