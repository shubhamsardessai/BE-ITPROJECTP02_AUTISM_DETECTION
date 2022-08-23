import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import Logo from "../imgs/Logo.png";

const navLinks = [
  {
    linkText: 'Home',
    linkAddress: '/'
  },
  {
    linkText: 'About',
    linkAddress: '/about'
  }
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar
        component="nav"
        style={{
          backgroundColor: "rgb(219, 182, 133)",
          height: "90px",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Avatar alt="" src={Logo} sx={{ width: "75px", height: "75px" }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button 
                href={item.linkAddress} 
                key={item.linkText}
                sx={{ color: "#424141",
                      fontWeight: "600",
                      padding: "0 1rem",
                      fontSize: "1rem",
                      '&:hover': {
                        color: "#04AA6D"
                      }
                    }}>
                {item.linkText}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;