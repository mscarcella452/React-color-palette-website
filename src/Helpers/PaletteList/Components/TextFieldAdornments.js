import { Box } from "@mui/material";
import QueryTag from "./QueryTag";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export function StartAdornment({ props }) {
  const { queryTags, handleUpdateTags } = props;

  return (
    <Box
      className='flexRow'
      sx={{
        display: queryTags.length ? "flex" : "none",
        gap: "5px",
        marginRight: "1rem",
        maxHeight: 1,
        height: "35px",
      }}
    >
      {queryTags.map(color => (
        <QueryTag
          tag={{ color: color, selected: true }}
          handleClick={() => handleUpdateTags(color)}
          tagJam={queryTags.length > 4}
        />
      ))}
    </Box>
  );
}
export function EndAdornment({ condition, handleClearSearch }) {
  return (
    <>
      {condition ? (
        <ClearIcon
          onClick={handleClearSearch}
          sx={{
            fontSize: "1rem",
            cursor: "pointer",
            color: "fontColor.secondary",
          }}
        />
      ) : (
        <SearchIcon sx={{ fontSize: "1rem", color: "fontColor.secondary" }} />
      )}
    </>
  );
}
