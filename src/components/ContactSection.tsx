import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function ContactForm() {
  return (
    <Box py={8} bgcolor="transparent" color="white">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h3" fontWeight="bold" color="white">
                Let's make your <br /> brand{" "}
                <span style={{ fontWeight: 200 }}>brilliant!</span>
              </Typography>
              <Typography mt={2} mb={2} color="white" fontSize="1.2rem">
                If you would like to work with us or just want to get in touch,
                we’d love to hear from you!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box mt={3}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="white"
                      fontSize="1.2rem"
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" color="white" fontSize="1.1rem">
                      Besòs 1, 08174 Sant Cugat del Vallès, Barcelona
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box mt={3}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="white"
                      fontSize="1.2rem"
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" color="white" fontSize="1.1rem">
                      Support@uithemez.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={3}>
                <Typography variant="h6" fontWeight={600} fontSize="2rem">
                  <Link
                    href="tel:+18408412569"
                    underline="hover"
                    color="#D0FF71"
                  >
                    +1 840 841 25 69
                  </Link>
                </Typography>
              </Box>
              <Box mt={6} display="flex" gap={3}>
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                  (platform) => (
                    <Link
                      key={platform}
                      href="#"
                      underline="hover"
                      color="white"
                      fontSize="1.2rem"
                    >
                      {platform}
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                fontWeight={400}
                gutterBottom
                color="white"
                fontSize="1.5rem"
              >
                Send a <span style={{ fontWeight: 200 }}>message</span>
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="standard"
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        input: { color: "white", fontSize: "1.2rem" },
                        fieldset: { borderColor: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="standard"
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        input: { color: "white", fontSize: "1.2rem" },
                        fieldset: { borderColor: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="standard"
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        input: { color: "white", fontSize: "1.2rem" },
                        fieldset: { borderColor: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      variant="standard"
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        input: { color: "white", fontSize: "1.2rem" },
                        fieldset: { borderColor: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "white",
                        borderColor: "white",
                        padding: "10px 20px",
                      }}
                    >
                      Let's Talk
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
