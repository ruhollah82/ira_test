import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const awards = [
  {
    hosted: "Awwwards",
    title: "SOTY 2023 - 1st Winner",
    date: "May 2023",
  },
  {
    hosted: "css awards",
    title: "Top 5 Best of eCommerce Websites 2022",
    date: "Dec 2022",
  },
  {
    hosted: "Awwwards",
    title: "Honor SOTD November, 2022",
    date: "Nov 2022",
  },
  {
    hosted: "Behance Portfolio",
    title: "Winner - US Behance Portfolio Review 2021",
    date: "Aug 2021",
  },
  {
    hosted: "ui/ux global award",
    title: "Top 10 Best of Mobile App Design 2021",
    date: "Mar 2021",
  },
  {
    hosted: "fwa us award",
    title: "Winner - Best of Architecture Website 2020",
    date: "Sep 2020",
  },
];

const AwardsSection = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Box sx={{ mb: 12.5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
              <Typography
                variant="subtitle2"
                component="h6"
                color="text.secondary"
              >
                Awards & Recognition
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4">
                Efforts to receive worthy rewards, awards & recognition
                <Box
                  component="span"
                  sx={{ color: "text.secondary", display: "inline" }}
                >
                  {" "}
                  help us affirm our brand.
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                Hosted
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">
                Award title
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography variant="body2" color="text.secondary">
                Date
              </Typography>
            </Grid>
          </Grid>

          {awards.map((award, index) => (
            <Grid
              key={index}
              container
              sx={{
                py: 3,
                borderBottom: 1,
                borderColor: "divider",
                "&:last-child": { borderBottom: 0 },
              }}
            >
              <Grid item xs={12} md={4}>
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {award.hosted}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" fontWeight={500}>
                  {award.title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography variant="body1" color="text.secondary">
                  {award.date}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "28px",
              px: 4,
              py: 1.5,
              borderWidth: "2px",
              "&:hover": { borderWidth: "2px" },
            }}
            href="../inner_pages/about.html"
          >
            Show More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AwardsSection;
