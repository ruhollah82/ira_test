import { Box, Typography, Link, IconButton } from "@mui/material";
import {
  GitHub,
  Instagram,
  Twitter,
  SportsBasketball,
  Brush,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingY: "5rem",
        px: 3,
        color: "white",
      }}
    >
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "40vw", display: "flex" }}>
            <Link href="#" underline="none">
              <img
                src="https://uithemez.com/i/hubfolio_HTML/digital_agency/assets/imgs/Logo-light.svg"
                alt="Logo"
                style={{ height: 25 }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "60vw",
            }}
          >
            <Typography variant="h4" sx={{ mt: 2 }}>
              We hope to empower users and simplify <br />
            </Typography>
            <Typography variant="h6" color="#8e8e8e">
              their everyday lives.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 6,
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  flex: "1 1 50%",
                }}
              >
                <Typography variant="body1" color="primary">
                  Location
                </Typography>
                <Typography>
                  152 Thatcher Road St, Mahattan, NY 10463, US
                </Typography>
              </Box>
              <Box sx={{ textAlign: "left", flex: "1 1 50%" }}>
                <Typography variant="body1" color="primary">
                  Inquiry
                </Typography>
                <Typography>hello@hubfolio.agency</Typography>
                <Typography>+0685689696</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              {[
                { icon: <Twitter />, link: "#" },
                { icon: <Instagram />, link: "#" },
                { icon: <SportsBasketball />, link: "#" },
                { icon: <Brush />, link: "#" },
                { icon: <GitHub />, link: "#" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  sx={{ color: "white", mx: 1 }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          mt: 6,
          pt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: "14px", flex: "1 1 50%" }}>
          © 2024{" "}
          <Link href="#" color="inherit">
            Hubfolio Agency
          </Link>
          . All Rights Reserved.
        </Typography>
        <Box sx={{ textAlign: "right", flex: "1 1 50%" }}>
          <Link href="#" color="inherit" sx={{ mx: 2 }} underline="hover">
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }} underline="hover">
            Works
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }} underline="hover">
            Studio
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }} underline="hover">
            News
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
