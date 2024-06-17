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
  background-color: ${(props) => props.color};
  height: 80%;
  border-radius: 25px;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  grid-gap: 30px;
  padding: 20px;
`;

export const ImgFront = styled.img`
  background-color: #ffffff;
  width: 80%;
  height: 80%;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
`;

export const ImgBack = styled.img`
  background-color: #ffffff;
  width: 80%;
  height: 80%;
  grid-row: 3 / 5;
  grid-column: 1 / 2;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
`;

export const BaseStats = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 5;
  grid-column: 2 / 3;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px 0 0 10px;
`;

export const NameCard = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
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

export const ImageLarge = styled.img`
  grid-row: 1 / 5;
  grid-column: 4 / 5;
  width: 193px;
  height: 193px;
  position: absolute;
  top: 150px;
  right: 0;
  z-index: 2;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
