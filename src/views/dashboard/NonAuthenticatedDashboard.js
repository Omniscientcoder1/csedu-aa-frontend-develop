import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button, TextField, Divider, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import { getCards } from 'src/services/query/cards';
import CommitteeSlider from 'src/components/shared/CommitteeSlider';
import { getCommittee } from 'src/services/query/committee';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: `url('C:/Users/tahmidur/Desktop/DUCSEAA website/csedu-aa-frontend-develop/src/assets/images/heroImage/hero-image.jpg')`, // Replace with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
    color: '#fff',
  },
  heroText: {
    flex: 1,
    padding: '20px',
  },
  inputField: {
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-justify',
  },
  button: {
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  googleButton: {
    marginBottom: '10px',
    backgroundColor: '#db4437',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#c23321',
    },
  },
  rotatingText: {
    display: 'inline-block',
    position: 'relative',
    animation: `$changeText 4s linear infinite`,
    color: '#000',
  },
  '@keyframes changeText': {
    '0%': { top: '0%' },
    '25%': { top: '-100%' },
    '50%': { top: '-200%' },
    '75%': { top: '-300%' },
    '100%': { top: '0%' },
  },
  committeeHeader: {
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '30px',
  },
  centeredDivider: {
    width: '25%',
    margin: '0 auto',
    backgroundColor: '#000',
    height: 4,
  },
  carousel: {
    borderRadius: '8px',
    overflow: 'hidden',
    width: '50%',
    margin: '0 20px', // Add margin for better spacing
  },
  carouselImage: {
    width: '100%',
    height: '200px', // Reduced height for smaller carousel
    objectFit: 'cover',
  },
}));

const NonAuthenticatedDashboard = ({ title, caption, images }) => {
  const classes = useStyles();
  const [cards, setCards] = useState([]);
  const [committee, setCommittee] = useState([]);

  const fetch = async () => {
    try {
      const res = await getCards();
      setCards(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommittee = async () => {
    try {
      const res = await getCommittee();
      setCommittee(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
    fetchCommittee();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.heroSection}>
        <div className={classes.heroText}>
          <Typography variant="h3" style={{ color: '#000' }}>
            Reconnect with your peers
          </Typography>
          <div className={classes.buttonContainer}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.inputField}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              className={classes.inputField}
            />
            <Button variant="contained" color="primary" className={classes.button}>
              Log In as Member
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Reset Password
            </Button>
            <Button variant="contained" className={classes.googleButton}>
              Sign in with Google
            </Button>
            <Button variant="contained" className={classes.googleButton}>
              Register with Google
            </Button>
          </div>
        </div>
        <Carousel
          className={classes.carousel}
          indicators={false}
          interval={3000}
          navButtonsAlwaysVisible
        >
          {['/path-to-image1.jpg', '/path-to-image2.jpg', '/path-to-image3.jpg', '/path-to-image4.jpg', '/path-to-image5.jpg', '/path-to-image6.jpg'].map((src, index) => (
            <img key={index} src={src} alt={`carousel-img-${index}`} className={classes.carouselImage} />
          ))}
        </Carousel>
      </div>

      <h3>Welcome to CSEDU</h3>
      <Divider
        sx={{
          height: 4,
          backgroundColor: '#000000',
          margin: '16px 0',
        }}
      />
      <p style={{ textAlign: 'justify' }}>
        The Department of Computer Science and Engineering (CSE) at University of Dhaka (also known
        as Dhaka University or DU) is a place where brightest of minds from all over the country
        assemble for a greater future. The department, popularly known as CSEDU, has been inspiring
        the best and brightest for more than twenty three years in fostering the frontiers of
        Computer Science and Engineering. We consider all members of the community as catalysts of
        evolution and inspire them to break away from traditional learn and apply mentality to
        create new knowledge and instigate others to do the same. Our credibility and efficacy of
        the methods of education is reflected by our alumni who have been performing with excellence
        in their respective fields; in the top ranking universities as teachers and researchers and
        in the top companies all around the world as software engineers and IT specialists. Our
        students are well equipped to take the challenge to stand out as the leaders of tomorrow. We
        welcome all in our community who are willing to take the challenge. Welcome to progress.
        Welcome to CSEDU.
      </p>

      <div className={classes.root}>
        <h3>About CSEDUAA</h3>
        <Divider
          sx={{
            height: 4,
            backgroundColor: '#000',
            margin: '16px 0',
          }}
        />
        <p style={{ textAlign: 'justify' }}>
          CSEDU Alumni Association is a vibrant community of past graduates who have walked the halls of the University of Dhaka's prestigious CSE department. This association is not just an alumni network; it is a family of professionals, pioneers, and trailblazers who have gone on to make significant contributions in the field of technology and beyond.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Through CSEDUAA, alumni have the opportunity to give back to their alma mater in various ways, including guest lectures, scholarship programs, and collaborative research projects. The association is dedicated to upholding the legacy of excellence associated with the CSE department of the University of Dhaka and strives to contribute positively to the tech community both locally and globally.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Joining CSEDUAA is more than just staying connected; it's about being a part of a continuing journey of innovation and excellence. We welcome all CSEDU alumni to be a part of this ever-growing family.
        </p>
      </div>

      <div className={classes.root}>
        <Typography variant="h3" className={classes.committeeHeader}>
          Current Committee
        </Typography>
        <CommitteeSlider committee={committee} />
      </div>
    </div>
  );
};

export default NonAuthenticatedDashboard;
