"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { loginHero } from "@/data/images";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import styles from "./login.module.scss";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className={styles.loginContainer}>
      <section className={styles.leftsideHeroSection}>
        <Image src={loginHero} alt="login hero" fill objectFit="cover" />
      </section>
      <section className={styles.rightsideFormSection}>
        <h4>Welcome to Materialize! 👋</h4>
        <p className={styles.subHeading}>
          Please sign-in to your account and start the adventure
        </p>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          color="secondary"
        />
        <br />
        <FormControl variant="outlined" color="secondary">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            color="secondary"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={styles.remindSection}>
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Remember Me"
          />
          <Link href="#" underline="none" color="secondary">
            Forgot Password?
          </Link>
        </div>
        <Button color="secondary" variant="contained">
          LOGIN
        </Button>
        <p className={styles.newAccount}>
          New on our platform?{" "}
          <Link href="#" underline="none" color="secondary">
            Create an account
          </Link>
        </p>
        <Divider sx={{ fontSize: "0.8rem" }}>Or</Divider>
        <div className={styles.socialLinks}>
          <FacebookIcon style={{ color: "#316FF6" }} />
          <TwitterIcon style={{ color: "#1DA1F2" }} />
          <GitHubIcon style={{ color: "#333" }} />
          <GoogleIcon style={{ color: "#DB4437" }} />
        </div>
      </section>
    </main>
  );
}

export default Login;
