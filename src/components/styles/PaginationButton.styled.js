import styled from "styled-components";

export const StyledPageButton = styled.div`
  height: 4rem;
  color: #ffffff;
  width: 10rem;

  /* CSS */
& button {
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

  & button:hover,
  & button:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  & button:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
  }

  & button:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }

`;
