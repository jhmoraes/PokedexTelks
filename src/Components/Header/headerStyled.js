import Styled from "styled-components";

export const ContainerHeader = Styled.div`
  background-color: #ffffff;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  Link {
    position: relative;
  }

  img {
    width: 15%;
    position: relative;
    //left: 10%;
  }

  Button{
    position: relative;
    right: 1px;
    padding: 15px 70px 15px 70px;
  }
`;

/* export const ContainerHeader = Styled.div`
  background-color: #ffffff;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: 1;
  justify-items: center;
  align-items:center;

  Link {
    grid-column: 1 / 2;
  }
  
  img {
    height: 150px;
    grid-column: 2 / 3;
  }

  Button {
    grid-column: 3 / 4;
  }
`; */
