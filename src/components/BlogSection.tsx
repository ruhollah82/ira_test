import { Box, Container, Grid, Typography, Link } from "@mui/material";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  tag: string;
  date: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/src/assets/blog/1.jpg",
    title: "Hubfolio agency revolutionizes work with the power of AI-Driven",
    tag: "Design Trends",
    date: "May 15, 2024",
    url: "../inner_pages/blog-details.html",
  },
  {
    id: 2,
    image: "/src/assets/blog/2.jpg",
    title: "Common UX painpoints in Dashboard-related projects",
    tag: "Experience",
    date: "May 15, 2024",
    url: "../inner_pages/blog-details.html",
  },
];

const BlogSection = () => {
  return (
    <Box
      component="section"
      sx={{ py: 8, borderTop: 1, borderColor: "divider" }}
    >
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ mb: 12.5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
              <Typography
                variant="subtitle2"
                component="h6"
                color="text.secondary"
              >
                Latest Articles
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4">
                The place that we share everything related to
                <Box
                  component="span"
                  sx={{ color: "text.secondary", display: "inline" }}
                >
                  {" "}
                  design trends, tips and more.
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={6}>
          {blogPosts.map((post) => (
            <Grid key={post.id} item xs={12} lg={6}>
              <Box sx={{ mb: { xs: 6.25, lg: 0 } }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 380,
                    overflow: "hidden",
                    borderRadius: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt=""
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ mt: 3.75 }}>
                  <Link
                    href={post.url}
                    sx={{
                      textDecoration: "none",
                      "&:hover h6": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      {post.title}
                    </Typography>
                  </Link>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2.5 }}>
                    <Link
                      href="#0"
                      sx={{
                        textDecoration: "none",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      <Typography variant="body2">{post.tag}</Typography>
                    </Link>
                    <Typography variant="body2" sx={{ mx: 1 }}>
                      /
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.date}
                    </Typography>
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

export default BlogSection;
