import React, {useState} from "react";
import {Layout} from "../../components/template/layout";
import {Card} from "../../components/molecule/card";
import {List} from "../../components/organism/cardList";
import {StyledTitle, StyledText, StyledCardContainer} from "./styled";
import {Button} from "../../components/atom/button";

const MyPokemons = () => {
  const [localData, setLocalData] = useState(localStorage.getItem("pokemon"));

  const handleClickRelease = (e) => {
    const buttonText = e.currentTarget.innerText;
    const pokemonName = buttonText.split(" ")[1].split("~")[1];
    const pokemonNickname = buttonText.split(" ")[1].split("~")[0];

    const json = JSON.parse(localData);
    if (localData) {
      const index = JSON.parse(localData).list.findIndex(
        (it) => it.pokemon === pokemonName && it.nickname === pokemonNickname
      );
      if (json.list.length === 1) {
        setLocalData(JSON.stringify({list: []}));
        localStorage.setItem("pokemon", JSON.stringify({list: []}));
      } else {
        const beginArr = json.list.slice(0, index);
        const endArr = json.list.slice(index+1, json.list.length);
        const newPokemonList = beginArr.concat(endArr);
        setLocalData(JSON.stringify({list: newPokemonList}));
        localStorage.setItem("pokemon", JSON.stringify({list: newPokemonList}));
      }
    }
  };

  return (
    <Layout>
      <StyledTitle>My Pokemons:</StyledTitle>
      <List style={{ maxWidth: '900px' }}>
        {localData
          ? JSON.parse(localData).list.map((it) => (
              <StyledCardContainer key={it.nickname}>
                <Card name={it.pokemon} image={it.image}>
                  <StyledText>{it.nickname}</StyledText>
                </Card>
                <Button onClick={handleClickRelease}>
                  Release {it.nickname}~{it.pokemon}
                </Button>
              </StyledCardContainer>
            ))
          : null}
      </List>
    </Layout>
  );
};

export default MyPokemons