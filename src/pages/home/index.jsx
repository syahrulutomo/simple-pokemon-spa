import React, { useEffect, useState } from "react";
import { Card } from "../../components/molecule/card";
import { List } from "../../components/organism/cardList";
import { useQuery } from "@apollo/client";
import { Layout } from "../../components/template/layout";
import { QUERY_POKEMON_LIST } from "../../query/pokemonList";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  const gqlVariables = {
    limit: 20,
    offset: 0,
  };

  const { loading, error, data } = useQuery(QUERY_POKEMON_LIST, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (!loading) {
      setPokemons(data.pokemons.results);
    }
  }, [loading, data]);

  return (
    <Layout error={error} loading={loading}>
      <List>
        {!loading
          ? pokemons.map((it) => (
              <Card
                key={String(it.name).concat(it.image)}
                name={it.name}
                image={it.image}
              />
            ))
          : null}
      </List>
    </Layout>
  );
}
