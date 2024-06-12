import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e5e5e;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
  }
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  color: #ffffff;
  padding: 50px 0 0 20px;
`;
