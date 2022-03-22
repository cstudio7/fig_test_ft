import React from 'react';
import { StyledMovieItem } from "../styles/CardItem.styled";

const EventCard = ({event}) => {

  return (
    <>
        <StyledMovieItem>
            <h2>{event.title || "Healthcare Track"}</h2>
            <div>
                <span>{"Category"}</span>
                <span>{event.category || "release_date"}</span>
            </div>
            <div>
                <span>{"Date"}</span>
                <span>{event.date || "release_date"}</span>
            </div>
            <div>
                <span>{"isVirtual"}</span>
                <span>{ event.isVirtual ? "true" : "false" }</span>
            </div>
            <div>
                <span>{"address"}</span>
                <span>{event.address || "release_date"}</span>
            </div>

                 <h2>Description</h2>
                <h4>{event.description || "This session seeks to get people thinking about the ultimate objective of health\n" +
                "AI"}</h4>

        </StyledMovieItem>
    </>
  )
}

export default EventCard
