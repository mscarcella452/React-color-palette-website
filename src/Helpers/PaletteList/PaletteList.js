import { useRef, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useDropdown, useInfiniteScroll } from "../../Hooks/CustomHooks";
import PaletteGrid from "./Components/PaletteGrid";
import { StartAdornment, EndAdornment } from "./Components/TextFieldAdornments";
import "./PaletteList.css";
import useQueryReducer from "./data/useQueryReducer";
import QueryTagContainer from "./Components/QueryTagContainer";
import useFilterPaletttes from "./data/useFilterPalettes";
import CircularProgress from "@mui/material/CircularProgress";
import FailedSearchResult from "./Components/FailedSearchResult";

function PaletteList({ palettes, footerRef }) {
  const [query, queryDispatch] = useQueryReducer();
  const [showTags, setShowTags, searchBarRef] = useDropdown(false);
  const [filteredPalettes, filteredTags] = useFilterPaletttes(palettes, query);
  const [visible, resetVisible, slicedPalettes, lastPaletteRef] =
    useInfiniteScroll(filteredPalettes, 12, filteredPalettes.length);
  const textFieldRef = useRef(null);

  // useEffect(() => {
  //   // optional chaining
  //   pageRef?.current?.style &&
  //     (pageRef.current.style.overflow = showTags ? "hidden" : "scroll");
  // }, [showTags, pageRef]);

  useEffect(() => {
    const showFooter = slicedPalettes.length < visible || visible > 12;

    // optional chaining
    footerRef?.current?.style &&
      (footerRef.current.style.display = showFooter ? "flex" : "none");
  }, [slicedPalettes, visible, footerRef]);

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

  return (
    <>
      <Box
        className={"query_overlay"}
        sx={{ display: showTags ? "block" : "none" }}
      />
      <Box
        className='flexColumn'
        ref={searchBarRef}
        sx={{
          padding: 1,
          zIndex: 2,
          height: 80,
          width: 1,
          position: "sticky",
          top: 70,
          left: 0,
          right: 0,
          borderBottom: 1,
          borderColor: "background.secondary",
          backgroundColor: "background.primary",
          justifyContent: "space-around",
        }}
      >
        <TextField
          inputRef={textFieldRef}
          onInput={handleInputChange}
          onClick={handleShowTags}
          variant='outlined'
          placeholder='Search Palettes'
          autoComplete='off'
          sx={{
            width: 1,
            maxWidth: "lg",
            zIndex: 2,
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "background.secondary", // Change the outline color when focused here
              },
          }}
          InputProps={{
            sx: {
              overflow: "hidden",
              height: "50px",
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
      </Box>
      <PaletteGrid palettes={slicedPalettes}>
        <div ref={lastPaletteRef} />
        {!filteredPalettes.length && (
          <FailedSearchResult onClick={handleClearSearch} />
        )}
      </PaletteGrid>
      <Box className={loadingClass}>
        <CircularProgress sx={{ color: "#fff" }} />
      </Box>
    </>
  );
}

export default PaletteList;
