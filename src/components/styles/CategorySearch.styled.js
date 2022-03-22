import styled from "styled-components";

export const StyledEventNav = styled.div`
  width: 100%;
  height: 1rem;
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;

  & form {
    min-height: 4rem;
    width: 80%;
  }

  & form select {
    min-height: 4rem;
    width: 80%;
  }

  & select[type=text] {
    padding-left: 4rem;
  }
  

  & button {
    min-height: 4rem;
    width: 20%;
  }
  

  @media (max-width: ${({ theme }) => theme.breakPoints.largeDesktop}) {
    
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDesktop}) {
   
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    & input[type=text] {
      padding-left: 1rem;
    }
  }
`;
