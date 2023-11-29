import roboto from "./font";

const lightShades = {
  primary: {
    main: "#ff5c35",
  },
  secondary: {
    main: "#6666ff",
  },
};

const darkShades = {
  primary: {
    main: "#180bb1",
  },
  secondary: {
    main: "#000059",
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
          }
        : {
            primary: lightShades.primary,
            secondary: lightShades.secondary,
          }),
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  };
};

export default getTheme;
