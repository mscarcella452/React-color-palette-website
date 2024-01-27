import React from "react";
import { useState, useEffect, useRef, createRef } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { paletteFeaturesData } from "../data/PaletteFeaturesData";

const debounce = (timeoutRef, delayedFunction, delay) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    delayedFunction();
  }, delay);
};

function PaletteFeaturesGrid({ forwardedRef, largeScreen }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const resizeTimeoutRef = useRef(null);
  const featureContainerTimeoutRef = useRef(null);
  const gridItemTimeoutRef = useRef(null);
  const gridContainerRef = useRef(null);
  const gridItemRefs = useRef(paletteFeaturesData.map(() => createRef()));
  const titleRefs = useRef(paletteFeaturesData.map(() => createRef()));
  const descriptionRefs = useRef(paletteFeaturesData.map(() => createRef()));

  const handleClick = index => setCurrentIndex(index);

  const handleResize = () => {
    if (gridContainerRef.current) {
      const gridContainerWidth = gridContainerRef.current.clientWidth;

      const gridContainerHeight = gridContainerRef.current.clientHeight;

      descriptionRefs.current.forEach(ref => {
        if (ref.current) {
          ref.current.style.width = `${gridContainerWidth * 0.65}px`;
        }
      });

      titleRefs.current.forEach((ref, index) => {
        if (ref.current) {
          if (currentIndex !== null) {
            // ref.current.style.width = `${gridContainerHeight}px`;
            ref.current.style.width = `${gridContainerHeight}px`;
            ref.current.style.height = `${gridContainerWidth * 0.17}px`;
          } else {
            ref.current.style.width = `${gridContainerWidth * 0.3}px`;
            ref.current.style.height = "100%";
          }
        }
      });
      // titleRefs.current.forEach((ref, index) => {
      //   if (ref.current) {
      //     if (currentIndex !== null) {
      //       ref.current.style.width = `${gridContainerHeight}px`;
      //       ref.current.style.height = `${gridContainerWidth * 0.35}px`;
      //     } else {
      //       ref.current.style.width = `${gridContainerWidth * 0.3}px`;
      //       ref.current.style.height = "100%";
      //     }
      //   }
      // });
    }
  };

  //   const gridContainer = gridContainerRef.current;

  //   if (gridContainer) {
  //     const gridContainerWidth = gridContainer.clientWidth;
  //     const gridContainerHeight = gridContainer.clientHeight;

  //     titleRefs.current.forEach((ref, index) => {
  //       if (ref.current) {
  //         if (currentIndex !== null) {
  //           ref.current.style.width = `${gridContainerHeight}px`;
  //           ref.current.style.height = `${gridContainerWidth * 0.25}px`;
  //         } else {
  //           ref.current.style.width = `${gridContainerWidth * 0.25}px`;
  //           ref.current.style.height = "100%";
  //         }
  //       }
  //     });

  //     descriptionRefs.current.forEach(ref => {
  //       if (ref.current) {
  //         ref.current.style.width = `${gridContainerWidth * 0.7}px`;
  //       }
  //     });
  //   }
  // };

  useEffect(() => {
    largeScreen && handleResize();
    const resizeListener = () => debounce(resizeTimeoutRef, handleResize, 500);

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [currentIndex, largeScreen]);

  useEffect(() => {
    const featureContainer = forwardedRef.current;

    if (featureContainer) {
      featureContainer.addEventListener("mouseenter", () =>
        debounce(featureContainerTimeoutRef, () => setCurrentIndex(0), 300)
      );
      featureContainer.addEventListener("mouseleave", () => {
        debounce(featureContainerTimeoutRef, () => setCurrentIndex(null), 500);
        // gridItemRefs.current.forEach((ref, index) => {
        //   if (ref.current) {
        //     ref.current.style.overflow = "visible";
        //   }
        // });
      });
    }

    return () => {
      if (featureContainer) {
        featureContainer.removeEventListener("mouseenter", () =>
          debounce(featureContainerTimeoutRef, () => setCurrentIndex(0), 300)
        );
        featureContainer.removeEventListener("mouseleave", () =>
          debounce(featureContainerTimeoutRef, () => setCurrentIndex(null), 500)
        );
      }

      if (featureContainerTimeoutRef.current) {
        clearTimeout(featureContainerTimeoutRef.current);
      }
    };
  }, [forwardedRef]);

  useEffect(() => {
    if (gridItemRefs.current) {
      gridItemRefs.current.forEach((gridItemRef, index) => {
        if (gridItemRef.current) {
          // Check if the element is not null
          if (index !== currentIndex) {
            gridItemRef.current.addEventListener("mouseenter", () =>
              debounce(
                gridItemTimeoutRef,
                () => {
                  setPrevIndex(currentIndex);
                  setCurrentIndex(index);
                },
                300
              )
            );
          } else {
            gridItemRef.current.removeEventListener("mouseenter", () =>
              debounce(
                gridItemTimeoutRef,
                () => {
                  setPrevIndex(currentIndex);
                  setCurrentIndex(index);
                },
                300
              )
            );
          }
        }
      });
    }

    return () => {
      if (gridItemRefs.current) {
        gridItemRefs.current.forEach((gridItemRef, index) => {
          if (gridItemRef.current) {
            // Check if the element is not null before removing
            gridItemRef.current.removeEventListener(
              "mouseenter",
              debounce(gridItemTimeoutRef, () => setCurrentIndex(index), 300)
            );
          }
        });
      }
      if (gridItemTimeoutRef.current) {
        clearTimeout(gridItemTimeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <Grid
      container
      ref={gridContainerRef}
      columns={10}
      sx={{ width: 1, border: 0 }}
    >
      {paletteFeaturesData.map((feature, index) => (
        <Grid
          ref={gridItemRefs.current[index]}
          className='flexColumn gridItem'
          item
          // xxs={currentIndex === index ? 6.5 : 1.75}
          xxs={
            currentIndex === null ? 10 / 3 : currentIndex === index ? 6.5 : 1.75
          }
          sx={{
            transition: "all 1s ease",
            position: "relative",
            // overflow: (currentIndex !== null || prevIndex !== null) && "hidden",

            // border: 1,
            overflow: "hidden",
            // backgroundColor:
            //   currentIndex !== null &&
            //   currentIndex !== index &&
            //   feature.backgroundColor,
            cursor: currentIndex !== index && "pointer",
            // border: 1,
            // borderRadius: "5px",

            // boxShadow: currentIndex !== null && currentIndex !== index && 1,
          }}
          onClick={() => handleClick(index)}
        >
          <FeaturesTitle
            forwardedRef={titleRefs.current[index]}
            props={{ currentIndex, prevIndex, index, feature }}
          />
          <FeaturesContent
            forwardedRef={descriptionRefs.current[index]}
            props={{ currentIndex, index, feature }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PaletteFeaturesGrid;

function FeaturesContent({ props, forwardedRef }) {
  const { feature, currentIndex, index } = props;
  const showContent = currentIndex === index;
  const isToLeft = index < currentIndex || currentIndex === null;

  return (
    <Box
      className='flexColumn'
      ref={forwardedRef}
      sx={{
        height: 1,
        // border: 1,
        // borderColor: index === 0 ? "red" : "blue",
        // background: "lightgrey",
        gap: "1rem",
        padding: "3rem 2rem",
        transform: `translateX(${
          !showContent ? (isToLeft ? "100%" : "-100%") : "0"
        })`,
        // transform: !showContent
        //   ? index === 0
        //     ? "translateX(200%)"
        //     : "translateX(-200%)"
        //   : "translateX(0)",
        // transform: !showContent ? "translateX(-100%)" : "translateX(0)",
        opacity: showContent ? 1 : 0,
        position: "relative",
        transition: "inherit",
        // zIndex: showContent ? 10 : 9,
        // backgroundColor: "background.primary",
        "&:before": {
          // content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${feature.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: "#fff",
          zIndex: -1,
          opacity: 0.05,
        },
      }}
    >
      <Typography
        variant='subHeading2'
        sx={{ lineHeight: 1.5, fontWeight: 500, color: "info.main" }}
      >
        {feature.title}
      </Typography>

      <Typography variant='subHeading2' sx={{ fontWeight: 300 }}>
        {feature.description}
      </Typography>
    </Box>
  );
}

function FeaturesTitle({ props, forwardedRef }) {
  const { feature, currentIndex, prevIndex, index } = props;
  const hideTitle = currentIndex === index;
  const isToLeft = index > prevIndex || currentIndex === null;
  // const isToLeft = index < currentIndex || currentIndex === null;

  return (
    <Box
      className='flexColumn'
      // ref={forwardedRef}
      sx={{
        // transform: `translateX(${
        //   hideTitle ? (isToLeft ? "50%%" : "-50%") : "0"
        // })`,
        // background: "grey",
        // transform: hideTitle
        //   ? index === 0
        //     ? "translateX(100%)"
        //     : index === 1
        //     ? isToLeft
        //       ? "translateX(-100%)"
        //       : "translateX(100%)"
        //     : "translateX(-100%)"
        //   : "translateX(0)",
        transform: hideTitle
          ? index === 0
            ? "translateX(-100%)"
            : "translateX(100%)"
          : "translateX(0)",
        // transform: hideTitle
        //   ? `translateX(${index + 1 * 100}%)`
        //   : "translateX(0)",
        // transform: currentIndex !== null ? "translateX(100%)" : "translateX(0)",
        opacity: hideTitle ? 0 : 1,
        transition: "inherit",
        // zIndex: hideTitle ? 0 : 2,
        // zIndex: hideTitle ? 10 : 9,
        zIndex: index,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px",
      }}
    >
      <Box
        ref={forwardedRef}
        className='flexColumn'
        sx={{
          width: 1,
          height: 1,
          padding: "1rem",
          gap: "10px",
          transform: currentIndex !== null && "rotate(-90deg)",
          transition: "inherit",
          backgroundColor: "#fff",
          borderRadius: "5px",
          border: "1.5px solid #F0F0F0",
          // borderColor: index === 0 ? "red" : index === 1 ? "teal" : "blue",
        }}
      >
        <Box
          className='flexRow'
          sx={{
            borderRadius: "10px",
            height: 1,
            width: 1,
            backgroundImage: `url(${feature.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <Typography
          // ref={forwardedRef}
          className='flexColumn'
          variant={"subHeading2"}
          // lineHeight={1.5}s
          sx={{
            fontSize: currentIndex === null ? "18px" : "18px",
            textAlign: "center",
            fontWeight: 400,
            color: "#36454F",
            textTransform: "uppercase",
          }}
        >
          {feature.title}
        </Typography>
      </Box>
    </Box>
  );
}
