import { useState, useEffect, useCallback, useRef } from "react";
import { adjustBrightness, fontLuminosity } from "../Helpers/functionHelpers";

// -------------------------------------
// -------------------------------------
// useToggle
// -------------------------------------
// -------------------------------------
export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}
// -------------------------------------
// -------------------------------------
// useColor
// -------------------------------------
// -------------------------------------
export function useColor(value, colorShade, colorModel) {
  const color = value[colorShade][colorModel];
  const fontColor = fontLuminosity(color);
  const colorCode = adjustBrightness(color);

  return [color, fontColor, colorCode];
}
// -------------------------------------
// -------------------------------------
// useCopy
// -------------------------------------
// -------------------------------------
export function useCopy(text) {
  const defaultState = { severity: "", active: false, message: "" };
  // const [copyStatus, setCopyStatus] = useState("inactive");
  const [state, setState] = useState(defaultState);

  const copyToClipboard = useCallback(async () => {
    let copyAlert;
    try {
      await navigator.clipboard.writeText(text);
      copyAlert = {
        severity: "success",
        message: `copied: ${text}`,
        active: true,
      };
    } catch (error) {
      copyAlert = {
        severity: "error",
        message: `Error. Failed to copy color.`,
        active: true,
      };
    }
    setState(copyAlert);
  }, [text]);

  useEffect(() => {
    if (state.active === false) {
      return;
    }

    const timeoutId = setTimeout(() => setState(defaultState), 2500);

    return () => clearTimeout(timeoutId);
  }, [state.active]);

  return [state, copyToClipboard];
}
// export function useCopy(text, setAlert) {
//   const [copyStatus, setCopyStatus] = useState("inactive");

//   const copyToClipboard = useCallback(async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopyStatus("copied");
//       const alert = {
//         severity: "success",
//         message: `copied: ${text}`,
//       };
//       setAlert(alert);
//     } catch (error) {
//       setCopyStatus("failed");
//     }
//   }, [text, setAlert]);

//   useEffect(() => {
//     if (copyStatus === "inactive") {
//       return;
//     }

//     const timeoutId = setTimeout(() => setCopyStatus("inactive"), 2500);

//     return () => clearTimeout(timeoutId);
//   }, [copyStatus]);

//   return [copyStatus, copyToClipboard];
// }

// -------------------------------------
// -------------------------------------
// useDropdown
// -------------------------------------
// -------------------------------------
export const useDropdown = (initialValue, forwardedRef) => {
  const [state, setState] = useState(initialValue);
  const ref = useRef();

  useEffect(() => {
    const handleClose = e => {
      if (ref.current && !ref.current.contains(e.target)) setState(false);
    };

    if (state) {
      document.addEventListener("mousedown", handleClose);
    } else document.removeEventListener("mousedown", handleClose);

    return () => document.removeEventListener("mousedown", handleClose);
  }, [state]);

  return [state, setState, ref];
};

// -------------------------------------
// -------------------------------------
// useInfiniteScroll
// -------------------------------------
// -------------------------------------

export const useInfiniteScroll = (content, defaultVisible, scrollVisible) => {
  const [visibleContent, setVisibleContent] = useState(defaultVisible);

  const lastContentRef = useRef(null);

  const resetVisibleContent = () => {
    if (visibleContent > defaultVisible) {
      setVisibleContent(0);

      setTimeout(() => {
        setVisibleContent(defaultVisible);
      }, 750);
    }
  };

  const options = {
    root: null,
    rootMargin: "100px", // Adjust root margin to start loading earlier
    threshold: 0, // Adjust threshold to start loading earlier
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && visibleContent < content.length) {
      setVisibleContent(scrollVisible); // Load more books
      // setVisibleContent(prevVisibleContent => prevVisibleContent + 3); // Load more books
    }
  }, options);

  useEffect(() => {
    if (lastContentRef.current) {
      observer.observe(lastContentRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect(); // Disconnect the observer when unmounting
      }
    };
  }, [visibleContent, content]);

  const slicedContent = content.slice(0, visibleContent);

  return [visibleContent, resetVisibleContent, slicedContent, lastContentRef];
};
