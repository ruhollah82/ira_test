import { Container, Grid, Typography, Box, Button } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Box>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
              <Typography variant="h6" color="white">
                Our Services
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4" color="white">
                As a tight-knit team of experts, we create memorable and
                emotional websites,
                <span className="sub-color inline">
                  {" "}
                  digital experiences, and native apps.
                </span>
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 4 }}
                href="../inner_pages/services.html"
                className="butn butn-md butn-bord butn-rounded"
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span>Learn More</span>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Box
          className="numbers"
          sx={{ marginTop: "4rem", borderBottom: " 1px solid gray" }}
        >
          <Grid container spacing={4}>
            {[
              { number: "10+", text: "Years of Experience" },
              { number: "98%", text: "Happy Customers" },
              { number: "124+", text: "Projects Completed" },
              { number: "17", text: "Awards & Recognition" },
            ].map((item, index, array) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                textAlign="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: "100%",
                    position: "relative",

                    borderRight:
                      index < array.length - 1
                        ? "1px solid transparent"
                        : "none",
                    borderImage:
                      index < array.length - 1
                        ? "linear-gradient(to top, gray, transparent) 1"
                        : "none",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    <Typography variant="h2" color="#f6f6f6">
                      {item.number}
                    </Typography>
                    <Typography color="#464646">{item.text}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ px: 0, borderBottom: "1px solid gray" }}>
        <Grid container spacing={3}>
          {[
            {
              title: "Content Creation",
              subtitle: "2D & 3D Animation",
              img: "/src/assets/1.svg",
              description:
                "We provide digital solutions as Website Design, Mobile App Design, Illustration, Animation",
            },
            {
              title: "Branding",
              subtitle: "Art Direction",
              img: "/src/assets/2.svg",
              description:
                "Brand Identity, Strategy & Consult, Position, Rebrand",
            },
            {
              title: "Digital Platform",
              subtitle: "Product Development",
              img: "/src/assets/3.svg",
              description:
                "We provide digital solutions as Website Design, Mobile App Design, Illustration, Animation",
            },
          ].map((service, index, array) => (
            <Grid item xs={12} md={4} key={index} padding={0}>
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRight:
                    index < array.length - 1 ? "1px solid gray" : "none",
                  position: "relative",
                  backgroundImage: `url(${service.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "50%",
                  minHeight: "400px",
                  color: "white",
                  borderRadius: 0,
                  padding: 0,
                }}
              >
                <Box />
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    backgroundColor: "transparent",
                    boxSizing: "border-box",
                    gap: "15rem",
                  }}
                >
                  <Box>
                    <Typography variant="h5">{service.title}</Typography>
                    <Typography color="primary">{service.subtitle}</Typography>
                  </Box>

                  {/* Bottom Content (Description and Button) */}
                  <Box>
                    <Typography sx={{ mt: 2 }}>
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: "#f6f6f6",
                        color: "black",
                        "&:hover": {
                          bgcolor: "#e1e1e1",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <span>View Details</span>
                        <img
                          src="/src/assets/arrow-top-right.svg"
                          alt="Arrow"
                          style={{ marginLeft: "10px" }}
                        />
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
