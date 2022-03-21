import React from 'react';
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
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

  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Home />
          </ThemeProvider>
      </Provider>
  );
}

export default App;
