import React from 'react';
// import { useDispatch } from "react-redux";
import { StyledMovieItem } from "../styles/MovieItem.styled";

const EventCard = () => {
  return (
    <>
        <StyledMovieItem
            favorited={"favorited"}
        >
            <h2>{"Healthcare Track"}</h2>
            <div>
                <span>{"Category"}</span>
                <span>{"release_date"}</span>
            </div>
            <div>
                <span>{"Date"}</span>
                <span>{"release_date"}</span>
            </div>
            <div>
                <span>{"isVirtual"}</span>
                <span>{"release_date"}</span>
            </div>
            <div>
                <span>{"address"}</span>
                <span>{"release_date"}</span>
            </div>
            <h2>
                {"Description"}
                <h4>{"This session seeks to get people thinking about the ultimate objective of health\n" +
                "AI"}</h4>
            </h2>
        </StyledMovieItem>
    </>
  )
}

export default EventCard
