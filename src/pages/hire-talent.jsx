import React from 'react';
import '../Styles/pages/Hire-talent.scss';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HireTalent = () => {
  return (
    <Box>
      {/* Hero Section */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hire Software Developers</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Hire Vetted Software Developers
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Hire vetted software developers within 48 hours to transform your vision into scalable, secure, and efficient solutions.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Chip label="12+ Years of Experience" color="primary" />
          <Chip label="1050+ Agile Developers" color="primary" sx={{ marginLeft: 1 }} />
        </Box>
      </Box>

      {/* Service Highlights Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Modernize Your Software With Our Tech Proficiency
        </Typography>
        <Grid container spacing={2}>
          {['Front-End', 'Back-End', 'AI & ML', 'DevOps', 'Project Management'].map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{service}</Typography>
                  <Typography variant="body2">
                    Description of {service} services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Custom Solutions Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Build It Your Way: Hire Software Developers for Custom Solutions
        </Typography>
        {['Custom Software Development', 'Enterprise Software Development', 'Support and Maintenance'].map((category) => (
          <Accordion key={category}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Detailed information about {category} services.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Process Workflow Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Hire a Software Developer From Bacancy in Easy Steps
        </Typography>
        <Stepper activeStep={-1} orientation="vertical">
          {['Tell Us The Skills You Need', 'Select Top-Notch Talent', 'Interview and Onboarding', 'Begin your Project'].map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Pricing Options
        </Typography>
        <Table>
          <TableBody>
            {[
              { plan: 'Hourly (USD)', price: '$2/hour' },
              { plan: 'Monthly (USD)', price: '$2,000/month' },
              { plan: 'Build a SCRUM Team of 5 Developers', price: '$10,000/month' },
            ].map((option) => (
              <TableRow key={option.plan}>
                <TableCell>{option.plan}</TableCell>
                <TableCell>{option.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Technical Stack Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Technical Stack We Use
        </Typography>
        <Grid container spacing={2}>
          {['React', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
            <Grid item xs={6} sm={4} md={3} key={tech}>
              <Chip label={tech} color="secondary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Client Testimonials Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Client Success Stories
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3].map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial}>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    "Working with Bacancy developers has transformed our business..."
                  </Typography>
                  <Typography variant="caption">- Client Name</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Industries Served Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Industries Served
        </Typography>
        <Grid container spacing={2}>
          {['Energy', 'Retail', 'Healthcare', 'Finance', 'Education'].map((industry) => (
            <Grid item xs={6} sm={4} md={3} key={industry}>
              <Chip label={industry} variant="outlined" color="primary" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {[
          'How much does it cost to hire software developers?',
          'What is your technical expertise?',
          'Do you provide support and maintenance services after deployment?',
        ].map((faq) => (
          <Accordion key={faq}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Detailed answer for "{faq}".
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider sx={{ marginY: 4 }} />

 
    </Box>
  );
};

export default HireTalent;
