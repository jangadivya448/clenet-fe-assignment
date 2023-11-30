import { lexed } from "../font";
import COLORS from "./colors";

const lightShades = {
  primary: {
    main: COLORS.light_primary,
  },
  secondary: {
    main: COLORS.light_secondary,
  },
  info: {
    main: COLORS.light_info,
  },
};

const darkShades = {
  primary: {
    main: COLORS.dark_primary,
  },
  secondary: {
    main: COLORS.dark_secondary,
  },
  info: {
    main: COLORS.dark_info,
  },
};

const getTheme = (mode) => {
  return {
    palette: {
      mode: mode || "light",
      ...(mode === "dark"
        ? {
            primary: darkShades.primary,
            secondary: darkShades.secondary,
            info: darkShades.info,
          }
        : {
            primary: lightShades.primary,
            secondary: lightShades.secondary,
            info: lightShades.info,
          }),
    },
    typography: {
      fontFamily: lexed.style.fontFamily,
      button: {
        textTransform: "none",
        fontWeight: 700,
      },
    },
  };
};

export default getTheme;
