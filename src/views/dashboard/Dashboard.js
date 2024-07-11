import { Divider, Paper, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  carousel: {
    height: 500,
    // [theme.breakpoints.down('sm')]: {
    //   height: 300,
    // },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '20px 20px 35px 20px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    width: '100%',
  },
  committeeHeader: {
    textAlign: 'center', 
    marginBottom: '10px',
    marginTop: '30px',
  },
  centeredDivider: {
    width: '25%', 
    margin: 'auto', 
    marginTop: '30px',
  }
}));


const Dashboard = ({ title, caption, images }) => {
  const classes = useStyles();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [committee, setCommittee] = useState([]);

  //For Cover Slider
  const fetch = async (data) => {
    try {
      const res = await getCards();
      setCards(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const fetchCommittee = async (data) => {
    try {
      const res = await getCommittee();
      setCommittee(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetch();
    fetchCommittee();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <Carousel showThumbs={false} selectedItem={selectedImageIndex} onChange={handleImageChange}>
          {/* {cards?.map((card, index) => (
            <div key={index}>
              <img
                src={card.photo}
                alt={card.caption}
                style={{ height: '450px', objectFit: 'cover' }}
              />
            </div>
          ))} */}

          {cards?.map((item, index) => (
            <Paper key={index}>
              {/* <div style={{ textAlign: 'left', marginBottom: 12, marginLeft: 8 }}>
                <Typography variant="h6">{item.title}</Typography>
              </div> */}
              <Divider />
              <img
                src={item.photo}
                alt={item.title}
                className={classes.image}
                style={{ height: '450px', objectFit: 'cover' }}
              />
              <div className={classes.caption}>
                <Typography variant="subtitle1">{item.caption}</Typography>
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
      <h3>Welcome to CSEDU</h3>
      <Divider
        sx={{
          height: 4,
          backgroundColor: '#00000', // change color as needed
          margin: '16px 0', // adjust margin as needed
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
        <Grid container>
          <Grid item xs={12} className={classes.committeeHeader}>
            <Typography variant="h3">Current Committee</Typography>
            <Divider sx={{
            height: 4,
            backgroundColor: '#000', // change color as needed
            margin: '16px 0', // adjust margin as needed
          }}
          className={classes.centeredDivider} />
          </Grid>
        </Grid>
        <CommitteeSlider committee={committee} />
      </div>
      
      

    </div>
  );
};

export default Dashboard;
