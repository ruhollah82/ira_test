import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Rating,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "A studio with passionate, professional, and full creativity. Much more than I expected. Great services, high-quality products & affordable prices. I'm extremely satisfied!",
    avatar: "assets/imgs/testim/avatar1.jpg",
    name: "Bradley Gordon",
    position: "CEO & Founder, Archin Studio",
  },
  {
    id: 2,
    rating: 5,
    text: "Thank you so much for the support of the Hubfolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments. Hubfolio will always be our first choice.",
    avatar: "assets/imgs/testim/avatar2.jpg",
    name: "Sophia Reynolds",
    position: "Marketing Director, Hubfolio",
  },
  {
    id: 3,
    rating: 5,
    text: "Hubfolio's ability to create a high-quality user interface stands out. It's something we placed a premium on. Recommended!",
    avatar: "assets/imgs/testim/avatar3.jpg",
    name: "James Carter",
    position: "Product Manager, TechWave",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <Box component="section" sx={{ py: 8 }} aria-label="Testimonials section">
      <Container>
        <Box sx={{ mb: 12.5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
              <Typography variant="subtitle2" color="text.secondary">
                Testimonials
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                We’ve helped hundreds of partners, <br /> to achieve their goals
                and
                <Box component="span" sx={{ color: "rgb(142,142,142)" }}>
                  {" "}
                  stellar feedback, <br /> is our reward!
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              sx={{
                p: 4,
                bgcolor: "rgb(33,33,33)",
                borderRadius: 1,
                my: 2,
                height: "max",
                maxWidth: "360px",
              }}
              role="group"
              aria-roledescription="slide"
            >
              <Typography variant="h5" component="div">
                {testimonial.rating}.0
                <Rating
                  value={testimonial.rating}
                  readOnly
                  sx={{
                    ml: 1,
                    color: "rgb(235,44,21)",
                    "& .MuiRating-icon": {
                      fontSize: 24,
                    },
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 3.8,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {testimonial.text}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 5,
                  pt: 3.8,
                  borderTop: 1,
                  borderColor: "divider",
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={`Portrait of ${testimonial.name}`}
                  sx={{
                    width: 56,
                    height: 56,
                    mr: 3,
                    boxShadow: 2,
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" component="div">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
