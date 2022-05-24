import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addEvents, selectEvents} from '../../features/event/EventSlice';
import EventCard from "../../components/Card/Card";
import {StyledEventSection} from "../../components/styles/EventsSection.styled";
import {StyledMoviesList} from "../../components/styles/EventsList.styled"
import {StyledPageButton} from "../../components/styles/PaginationButton.styled"
import HomeLayout from "../../components/HomeLayout";
import Search from '../../components/Search/Search'
import {loadEventsFromAPI} from '../../api/Event';

const Home = () => {
    const events = useSelector(selectEvents);
    const dispatch = useDispatch();
    const [query, setQuery] = useState({page: 1, limit: 10})

    const loadEvents = async () => {
        const response = await loadEventsFromAPI(query.page, query.limit)
        dispatch(addEvents({
            data: [...events.data, ...response.data.event],
            meta: response.data.meta
        }));
    }

    const checkIfCanLoadMore = () => {
        return events.data.totalItem > (query.page * query.limit)
    }

    const handleLoadMore = (e) => {
        e.preventDefault()
        setQuery({
            ...query,
            page: query.page + 1
        })
        loadEvents()
    }

    useEffect(() => {
        loadEvents();
    }, [query.page])


    return (
        <HomeLayout>

            <StyledEventSection id="movies">
                <Search/>
                <StyledMoviesList>
                    {events.data.map((event) => (
                        <EventCard event={event} key={event._id}/>
                    ))}
                </StyledMoviesList>
                {checkIfCanLoadMore() &&
                    <StyledPageButton>
                        <button onClick={handleLoadMore}>
                            Load more
                        </button>
                    </StyledPageButton>
                }
            </StyledEventSection>
        </HomeLayout>
    );
};

export default Home;
