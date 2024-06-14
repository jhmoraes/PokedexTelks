import Styled from "styled-components";

export const ContainerHeader = Styled.div`
  background-color: #ffffff;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  a {
    position: relative;
    //left: 20%;
  }

  img {
    width: 15%;
    position: relative;
    //left: 10%;
  }

  Button{
    position: relative;
    //right: 1px;
  }
`;

/* export const ContainerHeader = Styled.div`
  background-color: #ffffff;
  height: 15vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;
  justify-items: center;
  align-items:center;

  a {
    grid-column: 1 / 4;
  }
  
  img {
    height: 20vh;
    grid-column: 5 / 8;
  }

  Button {
    grid-column: 9 / 13;
  }
`;
 */
