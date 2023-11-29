import { Button, FormControlLabel } from "@mui/material";
import styles from "./navbar.module.scss";
import ThemesSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftContainer}>
        <FormControlLabel
          value="end"
          control={<ThemesSwitch color="info" />}
          label="High Contrast"
          labelPlacement="end"
        />
      </div>
      <div className={styles.navbarRightContainer}>
        <Button color="info">Login</Button>
        <Button variant="contained">Start free or get a demo</Button>
      </div>
    </nav>
  );
}

export default Navbar;
