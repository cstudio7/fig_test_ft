import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../app/store';
import {ThemeProvider} from "styled-components";
import Search from './Search';

test('renders search correctly', () => {
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
                <Search/>
            </ThemeProvider>
        </Provider>
    );
});


test('it has form with input and button', () => {
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
                <Search/>
            </ThemeProvider>
        </Provider>
    );

    const form = screen.getByTestId("form");
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(form).toBeInTheDocument();
})
