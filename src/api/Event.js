import Axios from 'axios';

export const loadEventsFromAPI = async (page=1, limit=10) => {
  return await Axios.get(`https://fig-finance.herokuapp.com/events?page=${page}&limit=${limit}`);
}
