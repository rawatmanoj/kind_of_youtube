import axios from 'axios';

const API_KEY = 'AIzaSyAOmSqJ4g50eSw6IZCbJ8HD0-r2MSf2gmQ';


export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  };
  
  export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });


