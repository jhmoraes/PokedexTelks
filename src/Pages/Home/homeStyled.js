import styled from "styled-components";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
  }
`;
