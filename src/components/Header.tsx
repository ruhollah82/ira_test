import { Box, Container, Typography, Grid } from "@mui/material";
import { FC } from "react";
import "./styles/headerBG.css";

const Header: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0c",
        opacity: 1,
        backgroundImage: `linear-gradient(#0e0e0e 2.2px, transparent 2.2px),
                          linear-gradient(to right, #0e0e0e 2.2px, #0a0a0c 2.2px)`,
        backgroundSize: "44px 44px",
        width: "100%",
        minHeight: "100vh",
        marginTop: "5.5rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "50%",
          height: "100%",
          backgroundImage: "url('src/assets/shape.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={4}>
              <Typography variant="body1" color="white">
                Our user-centered design encourages productivity & boosts
                revenue.
              </Typography>
            </Grid>
            <Grid item md={7}>
              <Typography variant="h1" color="white">
                Simple
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" mt={2}>
            <Grid item md={9}>
              <Typography
                variant="h1"
                color="white"
                fontStyle="italic"
                fontFamily="StyleScript"
              >
                Powerful
              </Typography>
            </Grid>
            <Grid item md={3}>
              <ul style={{ color: "white", listStyle: "none", padding: 0 }}>
                <li>Ui/Ux Design</li>
                <li>Developments</li>
                <li>Motion Graphic</li>
              </ul>
            </Grid>
          </Grid>

          <Grid container alignItems="center" mt={2}>
            <Grid item md={3} textAlign="center">
              <img
                src="/src/assets/arrow-rb.png"
                alt="arrow"
                style={{ width: 100 }}
              />
            </Grid>
            <Grid item md={9}>
              <Typography variant="h1" color="white">
                Solutions
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
