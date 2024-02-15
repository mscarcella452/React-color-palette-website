import { useMemo } from "react";

function useFilterPaletttes(palettes, query) {
  const { queryTags, querySearch } = query;

  const filteredPalettes = useMemo(() => {
    return palettes.filter(
      palette =>
        queryTags.every(tag => palette.tags.includes(tag)) &&
        palette.paletteName.toLowerCase().includes(querySearch.toLowerCase())
    );
  }, [queryTags, querySearch]);

  const filteredTags = [
    ...new Set(palettes.flatMap(palette => palette.tags)),
  ].filter(tag => !queryTags.includes(tag));

  return [filteredPalettes, filteredTags];
}

export default useFilterPaletttes;
