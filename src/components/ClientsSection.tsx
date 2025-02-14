import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const clients = [
  { id: 1, image: "/src/assets/client/1.svg" },
  { id: 2, image: "/src/assets/client/2.svg" },
  { id: 3, image: "/src/assets/client/3.svg" },
  { id: 4, image: "/src/assets/client/4.svg" },
  { id: 5, image: "/src/assets/client/5.svg" },
  {
    id: 6,
    stats: true,
    icon: "/src/assets/client/global.svg",
    text: "125+ clients worldwide",
  },
];

const ClientsSection = () => {
  const theme = useTheme();

  const renderClientItem = (client: (typeof clients)[0]) => (
    <Grid
      key={client.id}
      item
      xs={6}
      md={4}
      lg={2}
      sx={{
        mb: { md: client.id <= 3 ? 3.75 : 0, xs: 3.75 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: 190,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: "rgb(42,42,42)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        />

        {client.stats ? (
          <Box sx={{ textAlign: "center", color: "text.secondary", zIndex: 2 }}>
            <Box
              sx={{
                filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                mb: 2,
                "& img": { width: 48, height: 48 },
              }}
            >
              <img src={client.icon} alt="Global clients" />
            </Box>
            <Typography variant="body2">
              125+ clients <br /> worldwide
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              maxWidth: 120,
              zIndex: 2,
              "& img": { width: "100%", height: "auto" },
            }}
          >
            <img src={client.image} alt={`Client ${client.id}`} />
          </Box>
        )}
      </Box>
    </Grid>
  );

  return (
    <Box component="section" sx={{ py: 8, pb: 0 }}>
      <Container>
        <Box sx={{ mb: 12.5 }}>
          <Typography variant="subtitle2" component="h6" color="text.secondary">
            Our Clients & Partners
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {clients.map(renderClientItem)}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsSection;
