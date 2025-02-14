import { Box, Grid, Typography, Link } from "@mui/material";

const projects = [
  {
    id: 1,
    image: "/src/assets/featuredProjects/1.jpg",
    title: "Archin Website Design",
    year: "2023",
  },
  {
    id: 2,
    image: "/src/assets/featuredProjects/2.jpg",
    title: "Archin Website Design",
    year: "2023",
  },
  {
    id: 3,
    image: "/src/assets/featuredProjects/3.jpg",
    title: "Archin Website Design",
    year: "2023",
  },
  {
    id: 4,
    image: "/src/assets/featuredProjects/4.jpg",
    title: "Archin Website Design",
    year: "2023",
  },
  {
    id: 5,
    image: "/src/assets/featuredProjects/5.jpg",
    title: "Archin Website Design",
    year: "2023",
  },
];

const FeaturedProjects = () => {
  return (
    <Box component="section" sx={{ py: 8, pt: 0, bgcolor: "rgb(21,21,21)" }}>
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ mb: "20px" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6} lg={6} textAlign="center">
              <Typography variant="body1" paragraph>
                Business challenges are tough, but we have a proven record of
                elevating our partners to their next and best selves.
              </Typography>
              <Typography variant="h3" sx={{ mt: 2 }}>
                Featured Projects
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              lg={index === 0 ? 12 : 6}
              key={project.id}
              sx={{ mt: index > 0 ? 7.5 : 0 }}
            >
              <Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt=""
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "1rem",
                    }}
                  />
                  <Link
                    href="../inner_pages/portfolio-standard.html"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: "auto",
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    {project.year}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
