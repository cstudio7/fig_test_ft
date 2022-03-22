import Axios from 'axios';
import React, { useState } from 'react'
import { StyledEventNav } from "../styles/CategorySearch.styled"
import { useDispatch } from 'react-redux';
import { loadEventsFromAPI } from '../../api/Event';
import { addEvents } from '../../features/event/EventSlice';

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEvents();
  }

  const searchEvents = async () => {
    let response = null;
    let data= [];
    try {
      setLoading(true);
      if(search.length > 0) {
        response = await Axios.get(`https://fig-finance.herokuapp.com/event/category?category=${search}`);
        data=response.data.event;
      } else {
        // load events with default params
        response = await loadEventsFromAPI();
        data=response.data.event
      }
      dispatch(addEvents({
        data
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const {value} = e.target;
    setSearch(value)
  }
  const options = [
    'AI', 'React', 'ML','Mobile'
  ];

  return (
    <>
      <StyledEventNav>
        <form onSubmit={handleSubmit} data-testid="form">
          <select onChange={handleInputChange}>
            {options.map((n, i) => (
                <option value={n} key={i} >{n} </option>
            ))}
          </select>
          <button
              type="submit">{!loading ? "Search" : "Loading"}
          </button>
        </form>
      </StyledEventNav>
    </>
  )
}

export default Search
