import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box, Container } from "@mui/material";
import useBookSearch from "./useBookSearch";
import { bookTitles } from "./BookData";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function App() {
  const [query, setQuery] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);
  // const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(6); // Number of initially visible books
  const lastBookRef = useRef(null);

  const filteredBooks = bookTitles.filter(book =>
    book.toLowerCase().includes(query.toLowerCase())
  );

  const slicedBooks = filteredBooks.slice(0, visibleBooks);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visibleBooks < filteredBooks.length) {
        setVisibleBooks(prevVisibleBooks => prevVisibleBooks * 2); // Load more books
      }
    });

    if (lastBookRef.current) {
      observer.observe(lastBookRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect(); // Disconnect the observer when unmounting
      }
    };
  }, [visibleBooks, filteredBooks]);

  const handleSearch = e => {
    setVisibleBooks(6);
    setQuery(e.target.value);
  };

  return (
    <Box
      className='flexColumn'
      justifyContent={"flex-start"}
      sx={{ border: 1, width: 1, height: 1 }}
    >
      <input type='text' value={query} onChange={handleSearch}></input>
      <Box
        className='flexColumn'
        sx={{
          overflowY: "scroll",
          justifyContent: "flex-start",

          width: 1,
          height: 1,
          position: "relative",
          // border: 1,
          border: "3px solid pink",
        }}
      >
        <Grid
          container
          maxWidth={"lg"}
          columns={{ xxs: 1, mobile: 2, md: 3 }}
          sx={{ width: 1, padding: 1 }}
        >
          {slicedBooks.map((book, index) => (
            <Grid className='flexRow' xxs={1} sx={{ padding: 1, border: 1 }}>
              <BookContainer book={book} index={index} />
              {index === visibleBooks - 1 && <div ref={lastBookRef} />}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book}</div>;
        }
      })} */}
      {/* <div>{loading && "Loading..."}</div> */}
    </Box>
  );
}

function BookContainer({ book, index, forwardedRef }) {
  return (
    <Container
      disableGutters
      ref={forwardedRef}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        // gridTemplateRows: "40px auto",
        gridTemplateRows: "auto 40px",
        // gridTemplateColumns: "70px auto",

        width: 1,
        aspectRatio: 1,
        // minHeight: 300,
        maxHeight: { xxs: "none", md: 350 },
        border: "1.5px solid #F0F0F0",
        borderRadius: "5px",
        gap: { xxs: 2, mobile: 1, md: 2 },
        padding: { xxs: 2, mobile: 1, md: 2 },
        backgroundColor: "#fff",
        // transform: "rotate(-90deg)",
      }}
    >
      <Box sx={{ border: 1, height: 1 }}>{book}</Box>
      <Box sx={{ border: 1, height: 1 }}>{index}</Box>
    </Container>
  );
}
