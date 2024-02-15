import { useEffect, useState } from "react";
import { bookTitles } from "./BookData";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const booksPerPage = 9;

  useEffect(() => {
    setLoading(true);
    setBooks([]);
    setHasMore(false); // Reset hasMore when query changes
  }, [query]);

  useEffect(() => {
    setLoading(true);
    const startIndex = (pageNumber - 1) * booksPerPage;
    const endIndex = pageNumber * booksPerPage;
    const slicedBooks = books.slice(startIndex, endIndex);
    setBooks(prev => [...prev, ...slicedBooks]);
    setHasMore(books.length > bookTitles.length);
    setLoading(false);
  }, [pageNumber, books, booksPerPage]);

  return { loading, books, hasMore };
}
