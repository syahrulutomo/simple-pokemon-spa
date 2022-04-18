import React, {useState, useEffect} from "react";
import {Layout} from "../../components/template/layout";
import {Card} from "../../components/molecule/card";
import {List} from "../../components/organism/cardList";
import {StyledTitle, StyledText, StyledCardContainer} from "./styled";
import {Button} from "../../components/atom/button";

export const MyPokemons = () => {
  const [localData, setLocalData] = useState(localStorage.getItem("pokemon"));
  const [listOwned, setListOwned] = useState(0);

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
        setListOwned(0);
      } else {
        const newPokemonList = JSON.parse(localData).list.splice(index, 1);
        setLocalData(JSON.stringify({list: newPokemonList}));
        localStorage.setItem("pokemon", JSON.stringify({list: newPokemonList}));
        setListOwned(newPokemonList.length)
      }
    }
  };

  useEffect(() => {
    if (localData) {
      setListOwned(JSON.parse(localStorage.getItem("pokemon")).list);
    }
  }, [localData]);

  return (
    <Layout>
      <StyledTitle>My Pokemons:</StyledTitle>
      <List>
        {listOwned
          ? listOwned.map((it) => (
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
