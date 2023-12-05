import { useState, useEffect, useCallback } from "react";
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
export function useCopy(text, setAlert) {
  const [copyStatus, setCopyStatus] = useState("inactive");

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("copied");
      const alert = {
        severity: "success",
        message: `copied: ${text}`,
      };
      setAlert(alert);
    } catch (error) {
      setCopyStatus("failed");
      console.log(error);
    }
  }, [text, setAlert]);

  useEffect(() => {
    if (copyStatus === "inactive") {
      return;
    }

    const timeoutId = setTimeout(() => setCopyStatus("inactive"), 2500);

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copyStatus, copyToClipboard];
}
