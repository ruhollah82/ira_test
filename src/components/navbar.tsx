import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>
      <Box>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Link to="/home">
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px gray solid",
                  borderRadius: "3rem",
                  padding: "1px",
                  paddingX: "2rem",
                }}
              >
                <img
                  src="https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/Logo-light.svg"
                  alt="logo"
                  width={170}
                  height={40}
                />
              </Box>
            </Link>
            <Box
              component="nav"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  border: "1px gray solid",
                  borderRadius: "3rem",
                  padding: "1px",
                },
                gap: 3,
              }}
            >
              <Button color="inherit" href="#" size="small">
                Home
              </Button>
              <Button color="inherit" href="#">
                Studio
              </Button>
              <Button color="inherit" href="#">
                Works
              </Button>
              <Button color="inherit" href="#">
                News
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link to="/contact">
              <Button
                variant="contained"
                href="#"
                sx={{ bgcolor: "#f6f6f6", color: "black" }}
                endIcon={<ArrowForward />}
              >
                Start Project
              </Button>
            </Link>
            <IconButton edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
