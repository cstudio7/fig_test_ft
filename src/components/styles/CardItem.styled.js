import styled from "styled-components";

export const StyledMovieItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
  padding: 0.8rem;
  background-color: #2a2c36;
  border-radius: 1rem;
  padding-bottom: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    border-radius: 0.7rem;
  }
  

  & > h2 {
    align-self: center;
    color: ${({ theme }) => theme.colorGray};
    text-transform: capitalize;
    margin: 1rem 0;
    font-weight: 400;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 1.3rem;
    }
  }

  & > h4 {
    align-self: center;
    color: ${({ theme }) => theme.colorGray};
    text-transform: capitalize;
    margin: 1rem 0;
    font-weight: 400;
    font-size: 1.3rem;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 1.3rem;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colorGrayDark};
    //font-size: .4rem;
    text-transform: uppercase;
  }

  & > div > h3 {
    width: auto;
  }

    & span {
      color: ${({ theme }) => theme.colorGray};
      font-weight: 500;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
  }

  &:hover {
    background-color: white;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      background-color: #2a2c36;
    }

    & > h2 {
      color: black;
    }

    & > div {
      color: black;
    }
  }
`;
