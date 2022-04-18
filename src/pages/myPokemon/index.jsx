import React, {useState, useEffect} from "react";
import {Layout} from "../../components/template/layout";
import {Card} from "../../components/molecule/card";
import {List} from "../../components/organism/cardList";
import {StyledTitle, StyledText} from './styled'

export const MyPokemons = () => {
  const [localData] = useState(localStorage.getItem("pokemon"));
  const [listOwned, setListOwned] = useState(0);

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
              <Card key={it.nickname} name={it.pokemon} image={it.image}>
                <StyledText>{it.nickname}</StyledText>
              </Card>
            ))
          : null}
      </List>
    </Layout>
  );
};
