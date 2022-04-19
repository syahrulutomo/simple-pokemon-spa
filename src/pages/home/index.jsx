import React, { useEffect, useState } from "react";
import { Card } from "../../components/molecule/card";
import { List } from "../../components/organism/cardList";
import { useQuery } from "@apollo/client";
import { Layout } from "../../components/template/layout";
import { QUERY_POKEMON_LIST } from "../../query/pokemonList";
import {
  setData
} from '../../store/data/actions';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const allData = useSelector((state) => state.dataReducer.allData);
  const [limit, setLimit] = useState(32);

  const gqlVariables = {
    limit: limit,
    offset: 0,
  };

  const { loading, error, data } = useQuery(QUERY_POKEMON_LIST, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (!loading) {
      dispatch(setData(data.pokemons.results))
    }
  }, [loading, data, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit(limit + 20);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "auto",
      });
    }
  }

  window.onscroll = handleScroll;
  window.ontouchmove = handleScroll;

  return (
    <Layout error={error}>
      <List>
        {allData
          ? allData.map((it) => (
              <Card
                key={String(it.name).concat(it.image)}
                name={it.name}
                image={it.image}
              />
            ))
          : null}
      </List>
      <div id="bottom" />
    </Layout>
  );
}

export default Home