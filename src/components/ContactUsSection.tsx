import { ArrowForward } from "@mui/icons-material";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

const ContactSection = () => {
  return (
    <Box component="section" sx={{ py: 8, pt: 0 }}>
      <Box sx={{ px: "2rem" }}>
        <Box
          sx={{
            px: "4rem",
            borderRadius: 1,
            bgcolor: "rgb(5,5,5)",
            py: "8rem",
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} lg={4}>
              <Box>
                <Typography variant="h4" component="h4" gutterBottom>
                  Success is a team play, right?{" "}
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    Let’s work together!
                  </Box>
                </Typography>

                <Box sx={{ mt: 6.25, mb: { xs: 10, md: 0 } }}>
                  <Typography variant="h6">+068 5681 96 96</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1.25 }}
                  >
                    Call us for urgent
                  </Typography>

                  <Button
                    variant="outlined"
                    href="../inner_pages/contact.html"
                    sx={{
                      mt: 6.25,
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Get Direction
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={7} sx={{ ml: { lg: "auto" } }}>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      id="form_name"
                      label="Full Name"
                      variant="standard"
                      placeholder="Your full name"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      id="form_email"
                      label="Email Address"
                      variant="standard"
                      placeholder="Your email address"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      id="form_subject"
                      label="Subject"
                      variant="standard"
                      placeholder="Subject"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="form_budget"
                      label={
                        <>
                          Your Budget{" "}
                          <Typography component="span" color="text.secondary">
                            (Optional)
                          </Typography>
                        </>
                      }
                      variant="standard"
                      placeholder="A range of budget for project"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      id="form_message"
                      label="Message"
                      variant="standard"
                      placeholder="Write your message here..."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        mt: 7.5,
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Send Your Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
