"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, Menu, MenuItem } from "@mui/material";
import { menu } from "@/data/images";

import styles from "./tabs.module.scss";
import TabItem from "./TabItem";
import { TAB_DATA } from "@/data";

function MobileTabs() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.mobileTabs}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ padding: 0, minWidth: 32 }}
        onClick={handleClick}
      >
        <Image src={menu} alt="tabs menu" width={32} height={32} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#f8f8f8",
          },
        }}
      >
        {TAB_DATA.map((tab) => (
          <MenuItem onClick={handleClose} key={tab?.path}>
            <TabItem tab={tab} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MobileTabs;
