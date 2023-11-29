"use client";
import { useContext } from "react";
import { Button } from "@mui/material";
import ThemeContext from "./context";

function DummyBtn() {
  const { switchMode } = useContext(ThemeContext);
  return (
    <Button variant="contained" color="secondary" onClick={switchMode}>
      Switch THEME
    </Button>
  );
}

export default DummyBtn;
