import { Button, FormControlLabel } from "@mui/material";
import styles from "./navbar.module.scss";
import ThemesSwitch from "./ThemeSwitch";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftContainer}>
        <FormControlLabel
          value="end"
          control={<ThemesSwitch color="info" />}
          label={<h4>High Contrast</h4>}
          labelPlacement="end"
          sx={{
            fontWeight: 700,
          }}
        />
      </div>
      <div className={styles.navbarRightContainer}>
        <Link href="/login" className={styles.loginBtn}>
          Log in
        </Link>
        <Button variant="contained">Start free or get a demo</Button>
      </div>
    </nav>
  );
}

export default Navbar;
