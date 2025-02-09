import { Container, Typography, Box } from "@mui/material";

const ContactHeader = () => {
  return (
    <Box
      sx={{
        py: 6,
        textAlign: "center",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "5rem",
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#F6F6F6",
            fontWeight: 700,
            fontSize: { xs: "6rem", md: "8rem" },
            textTransform: "uppercase",
          }}
        >
          Get in Touch
        </Typography>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "40rem",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          padding: "1rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            filter: "grayscale(100%)",
            padding: "1rem",
            zIndex: 1,
          }}
        >
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=hollywood&t=&z=11&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              borderRadius: "16px",
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHeader;
