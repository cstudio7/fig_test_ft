import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import EventCard from "../../components/Card/Card";
import { StyledEventSection } from "../../components/styles/EventsSection.styled";
import { StyledEventNav } from "../../components/styles/CategorySearch.styled"
import { StyledMoviesList } from "../../components/styles/MoviesList.styled"
import HomeLayout from "../../components/HomeLayout";


const Home = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // searchEvents();
        console.log("did")
    }

    const handleInputChange = (e) => {
        const {value} = e.target;
        setSearch(value)
    }


  return (
      <HomeLayout>

      <StyledEventSection id="movies">
          <StyledEventNav>
              <input
                  type="text"
                  name="search"
                  placeholder="Enter event to search"
                  onChange={handleInputChange}
                  value={search}
                  data-testid="search"
              />
              <button
                  className="text-white rounded ml-4"
                  type="submit">{!loading ? "Search" : "Loading"}
              </button>
          </StyledEventNav>
          <StyledMoviesList>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
          </StyledMoviesList>

      </StyledEventSection>
      </HomeLayout>
  );
};

export default Home;
