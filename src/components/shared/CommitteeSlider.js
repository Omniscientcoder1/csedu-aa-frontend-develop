import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const CommitteeSlider = ({ committee }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {committee.map((member) => (
          <CardContainer key={member.name}>
            <StyledCommitteeCard>
              <ProfileImage src={member.img} alt={member.name} />
              <div className="committee-info">
                <h4 className="committee-name">{member.name}</h4>
                <p className="post">{member.post}</p>
              </div>
            </StyledCommitteeCard>
          </CardContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  padding: 20px; 
`;

const CardContainer = styled.div`
  padding: 10px; 
`;

const StyledCommitteeCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  border: 0px solid #ccc;
  padding: 15px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  width: 100%; 

  .committee-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .committee-name {
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }

  .post {
    font-size: 15px;
    color: #666;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default CommitteeSlider;
