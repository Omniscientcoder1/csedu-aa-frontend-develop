import endpoints from 'src/constants/endpoints';
import { axios, privateAxios } from '../request/axiosConfig';
import ProfileImage from 'src/assets/images/profile/user-1.jpg'

export const getCommittee = async (data) => {
  try {
    //const response = await axios.get(`${endpoints.CARDS}`, { params: data });
    //return response.data;
    
    const data = [
        {
          name: `Alex Johnson`,
          img: ProfileImage,
          post: `President`
        },
        {
          name: `Samantha Brown`,
          img: ProfileImage,
          post: `Vice President`
        },
        {
          name: `Michael Green`,
          img: ProfileImage,
          post: `Secretary`
        },
        {
          name: `Emma Wilson`,
          img: ProfileImage,
          post: `Treasurer`
        },
        {
          name: `Daniel Smith`,
          img: ProfileImage,
          post: `Event Coordinator`
        },
      ];

    return data;      
    
  } catch (error) {
    throw error;
  }
};

