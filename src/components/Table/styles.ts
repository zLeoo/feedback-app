import styled from "styled-components";

export const TableContainer = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 200px;
  background: red;

  // This applies from 600px onwards (600+)
  @media (min-width: 600px) {
    background: green;
  }
`;
