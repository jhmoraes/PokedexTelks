import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e5e5e;
  height: 85vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: center;
  height: 100vh;
  align-self: center;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  color: #ffffff;
  padding: 20px 0 20px 20px;
`;

export const DetailsCard = styled.div`
  display: grid;
  background-color: #729f92; // Implementar: Passar a cor do pokemon para ser o fundo do container.
  height: 80%;
  border-radius: 25px;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  grid-gap: 30px;
  padding: 35px;
`;

export const ImgFront = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
`;

export const ImgBack = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  grid-row: 3 / 5;
  grid-column: 1 / 2;
  border-radius: 5px;
  align-self: center;
  justify-content: center;
`;

export const BaseStats = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 5;
  grid-column: 2 / 3;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const NameCard = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const MoviesCard = styled.div`
  grid-row: 2 / 5;
  grid-column: 3 / 4;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ImageLarge = styled.div`
  grid-row: 1 / 5;
  grid-column: 4 / 5;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
