"use client";
import { useContext } from "react";
import { Switch } from "@mui/material";

import ThemeContext from "@/context";

function ThemesSwitch() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Switch
      checked={isDarkMode}
      onChange={(e) => {
        setDarkMode(e.target.checked);
      }}
      color="info"
    />
  );
}

export default ThemesSwitch;
