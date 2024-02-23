import { useRef } from "react";
import { Box, Container, TextField, Typography, Paper } from "@mui/material";
import { useDropdown, useInfiniteScroll } from "../../Hooks/CustomHooks";
import PaletteGrid from "./Components/PaletteGrid";
import { StartAdornment, EndAdornment } from "./Components/TextFieldAdornments";
import "./PaletteList.css";
import useQueryReducer from "./data/useQueryReducer";
import QueryTagContainer from "./Components/QueryTagContainer";
import useFilterPaletttes from "./data/useFilterPalettes";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../Components/Navbar/Navbar";
import FailedSearchResult from "./Components/FailedSearchResult";

function PaletteList({ palettes }) {
  const [query, queryDispatch] = useQueryReducer();
  const [showTags, setShowTags, searchBarRef] = useDropdown(false);
  const [filteredPalettes, filteredTags] = useFilterPaletttes(palettes, query);
  const [visible, resetVisible, slicedPalettes, lastPaletteRef] =
    useInfiniteScroll(filteredPalettes, 12, filteredPalettes.length);
  const textFieldRef = useRef(null);

  const handleUpdateTags = color =>
    queryDispatch({ type: "update_tags", color: color });

  const handleClearSearch = () => {
    if (textFieldRef.current) {
      textFieldRef.current.value = ""; // Clearing the value directly
    }
    queryDispatch({ type: "clear_query" });
    resetVisible();
  };

  const handleInputChange = e => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      queryDispatch({ type: "update_search", searchValue: e.target.value });
    }, 500);
  };

  const handleShowTags = () => {
    if (!showTags) {
      resetVisible();
      setShowTags(true);
    }
  };

  const loadingClass =
    visible === 0
      ? "flexRow loading reset"
      : slicedPalettes.length > 11 && visible === 12
      ? "flexRow loading"
      : "hide";

  const showFooter =
    !palettes.length || slicedPalettes.length < visible || visible > 12;

  return (
    <Paper
      sx={{
        backgroundColor: "background.secondary",
        overflowY: showTags ? "hidden" : "scroll",
        position: "relative",
        height: 1,
        width: 1,
        zIndex: 2,
        "&::after": {
          content: "''",
          position: "absolute",
          display: showTags ? "block" : "none",
          backgroundColor: "black",
          opacity: 0.25,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          zIndex: 1,
        },
      }}
    >
      <Navbar />
      <Container
        className='flexColumn'
        ref={searchBarRef}
        disableGutters={true}
        onClick={handleShowTags}
        sx={{
          padding: 1,
          zIndex: 2,
          height: 80,
          position: "sticky",
          top: 70,
          left: 0,
          right: 0,
          justifyContent: "space-around",

          "&::after": {
            content: "''",
            position: "absolute",
            width: "100vw",
            top: 0,
            bottom: 0,
            backgroundColor: "background.primary",
            borderBottom: 1,
            borderColor: "background.secondary",
          },
        }}
      >
        <TextField
          inputRef={textFieldRef}
          onInput={handleInputChange}
          variant='outlined'
          placeholder='Search palettes'
          autoComplete='off'
          sx={{
            width: 1,
            zIndex: 1,
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "background.secondary", // Change the outline color when focused here
              },
          }}
          InputProps={{
            sx: {
              overflow: "hidden",
              height: "50px",
              borderColor: "background.secondary",
              backgroundColor: "#fff",
            },
            startAdornment: (
              <StartAdornment
                props={{ queryTags: query.queryTags, handleUpdateTags }}
              />
            ),
            endAdornment: (
              <EndAdornment
                condition={query.querySearch.length || query.queryTags.length}
                handleClearSearch={handleClearSearch}
              />
            ),
          }}
        />
        {showTags && (
          <QueryTagContainer
            filteredTags={filteredTags}
            queryTags={query.queryTags}
            handleUpdateTags={handleUpdateTags}
          />
        )}
      </Container>
      {/* {!palettes.length && (
        <FailedSearchResult
          variant='emptyPalettes'
          onClick={console.log("create Palette")}
        />
      )}
      {!filteredPalettes.length && (
        <FailedSearchResult onClick={handleClearSearch} />
      )} */}

      <PaletteGrid palettes={slicedPalettes}>
        <div ref={lastPaletteRef} />
        {!filteredPalettes.length && (
          <FailedSearchResult onClick={handleClearSearch} />
        )}
        <Box className={loadingClass}>
          <CircularProgress sx={{ color: "#fff" }} />
        </Box>
      </PaletteGrid>

      {showFooter && (
        <Box
          sx={{
            width: 1,
            height: "300px",
            background: "green",
            border: 1,
          }}
        >
          footer
        </Box>
      )}
    </Paper>
  );
}

export default PaletteList;
