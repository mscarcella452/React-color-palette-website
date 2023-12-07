import { useState } from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <Container disableGutters sx={{ padding: { xxs: 0, lg: "0 1rem" } }}>
      <form
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 40px",
        }}
      >
        <TextField
          id='search-bar'
          className='text'
          // onInput={e => {
          //   setSearchQuery(e.target.value);
          // }}
          // label='Search palettes'
          placeholder='Search palettes'
          variant='outlined'
          size='small'
        />
        <IconButton type='submit' aria-label='search'>
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </Container>
  );
}

export default SearchBar;
