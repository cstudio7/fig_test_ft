import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {ThemeProvider} from "styled-components";
import {store} from '../../app/store';
import EventCard from './Card';


test('renders event card correctly', () => {

    const theme = {
        colorPrimary: "#39445a",
        colorGray: "#d1d1d1",
        colorGrayDark: "#8f8d8d",

        breakPoints: {
            largeDesktop: "1100px",
            mediumDesktop: "800px",
            tablet: "650px",
            mobile: "450px",
        },
    };

    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <EventCard event={{}}/>
            </ThemeProvider>
        </Provider>
    );
});

test('can render an event item', () => {

    const theme = {
        colorPrimary: "#39445a",
        colorGray: "#d1d1d1",
        colorGrayDark: "#8f8d8d",

        breakPoints: {
            largeDesktop: "1100px",
            mediumDesktop: "800px",
            tablet: "650px",
            mobile: "450px",
        },
    };

    const event = {
        title: "Healthcare Track",
        description: "This session seeks to get people thinking about the ultimate objective of health AI",
        category: "React",
        date: "2021-07-17T10:00:00.000Z",
        isVirtual: true,
        address: "Leceister, United Kingdom"
    }

    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <EventCard event={event}/>
            </ThemeProvider>
        </Provider>
    );

    const title = screen.getByText(event.title);
    const category = screen.getByText(event.category);
    const description = screen.getByText(event.description);
    const venue = screen.getByText(event.address);
    const date = screen.getByText(new RegExp(event.date));

    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(venue).toBeInTheDocument();
    expect(date).toBeInTheDocument();
})
