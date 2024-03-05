import { useContext } from "react";
import { useToggle } from "../../../Hooks/CustomHooks";
import { Typography, Box } from "@mui/material";
import { UIContext, UIDispatchContext } from "../../../Context/AppContext";
import { FormContext, FormDispatchContext } from "../../../Context/FormContext";
import ToggleSwitchButton from "../../../Helpers/HelperComponents/ToggleSwitchButton";

function RememberMeToggle() {
  const { rememberMe } = useContext(FormContext);
  const FormDispatch = useContext(FormDispatchContext);

  // const [toggled, toggleToggle] = useToggle(false);

  const handleToggle = () =>
    FormDispatch({ type: "toggle_remember_me", rememberMeToggle: true });

  //   const handleChange = () => toggle remember me context
  return (
    <Box
      className='flexRow'
      sx={{
        width: 1,
        gap: "10px",
        justifyContent: "flex-start",
      }}
    >
      <ToggleSwitchButton handleToggle={handleToggle} toggled={rememberMe} />
      <Typography>{rememberMe ? "true" : "false"}</Typography>
    </Box>
  );
}

export default RememberMeToggle;
