import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const services = [
  {
    id: "panel1",
    number: "( 01 )",
    title: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"
        />
      </svg>
    ),
    content: {
      text: "As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.",
      listItems: [
        ["Branding identity", "Strategy and planning", "Rebrand", "Pitchdesk"],
        ["UI/UX Design", "Wireframe & prototype", "Motion design"],
      ],
    },
  },
  {
    id: "panel2",
    number: "( 02 )",
    title: "Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
        />
      </svg>
    ),
    content: {
      text: "We build robust, scalable solutions using cutting-edge technologies to power your digital transformation.",
      listItems: [
        ["Web Development", "Mobile Apps", "E-commerce"],
        ["API Integration", "Cloud Solutions", "DevOps"],
      ],
    },
  },
  {
    id: "panel3",
    number: "( 03 )",
    title: "Marketing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
        />
      </svg>
    ),
    content: {
      text: "Drive growth through data-driven marketing strategies that connect with your audience and deliver results.",
      listItems: [
        ["Digital Strategy", "SEO/SEM", "Content Marketing"],
        ["Social Media", "Email Marketing", "Analytics"],
      ],
    },
  },
  {
    id: "panel4",
    number: "( 04 )",
    title: "Growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
        />
      </svg>
    ),
    content: {
      text: "Accelerate your business growth with sustainable strategies and performance optimization.",
      listItems: [
        ["Growth Hacking", "Conversion Optimization", "Market Expansion"],
        ["User Acquisition", "Retention Strategies", "Revenue Modeling"],
      ],
    },
  },
];
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
  margin: theme.spacing(4, 0),
}));

const ServicesAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box component="section" sx={{ py: 8, bgcolor: "rgb(18,18,18)" }}>
      <Box sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 10,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3">OUR SERVICES</Typography>
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
            href="../inner_pages/services.html"
          >
            See Our Approach
          </Button>
        </Box>

        {services.map((service) => (
          <StyledAccordion
            key={service.id}
            expanded={expanded === service.id}
            onChange={handleChange(service.id)}
            sx={{
              padding: 0,
              backgroundColor: "transparent",
              backgroundImage: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: 0,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Grid container alignItems="center">
                <Grid item xs={4} lg={4}>
                  <Typography variant="body2"> {service.number} </Typography>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Typography variant="h2">{service.title}</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box sx={{ width: 24, height: 24 }}>{service.icon}</Box>
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails sx={{ pt: 4 }}>
              <Grid container alignItems="flex-end">
                <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      textDecoration: "none",
                      "&:hover": { cursor: "pointer" },
                      gap: "1rem",
                    }}
                  >
                    <Box
                      component="img"
                      src="/src/assets/featuredProjects/arrow-rb.png"
                      sx={{ width: 70, height: 70 }}
                    />
                    <Typography variant="body2">VIEW DETAILS</Typography>
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Grid container>
                    <Grid item xs={12} lg={7}>
                      <Typography variant="body1" paragraph>
                        {service.content.text}
                      </Typography>
                      <Grid container spacing={4}>
                        {service.content.listItems.map((column, index) => (
                          <Grid item xs={6} key={index}>
                            {column.map((item, i) => (
                              <Typography
                                key={i}
                                variant="body2"
                                display="block"
                                gutterBottom
                              >
                                {item}
                              </Typography>
                            ))}
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesAccordion;
