import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  StyledType,
  StyledTypeContainer,
  StyledImage,
  StyledDetailContainer,
  StyledTitle,
  StyledText,
  StyledSpan,
} from "./styled";
import { capitalize } from "../../utils/capitalize";
import { setTypeColor } from "../../utils/setTypeColor";
import { Layout } from "../../components/template/layout";
import { Modal } from "../../components/molecule/modal";
import { Table } from "../../components/atom/table";
import { Input } from "../../components/atom/input";
import { Button } from "../../components/atom/button";
import { QUERY_POKEMON_DETAIL } from "../../query/pokemonDetail";

export const Details = () => {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [customError, setCustomError] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);
  const [tableHeader, setTableHeader] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [catchValue, setCatchValue] = useState(0);

  const gqlVariables = {
    name,
  };

  const { data, loading, error } = useQuery(QUERY_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  const handleClickCatch = () => {
    setCatchValue(Math.random());
    setIsLoading(true);
    console.log(catchValue);
    setTimeout(() => {
      setIsLoading(false);
      if (catchValue > 0.5) {
        setIsModalShow(true);
      } else {
        setCustomError("Fret not, you fail to catch pokemon");
      }
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    setCustomError(error);
  }, [error]);

  useEffect(() => {
    if (data) {
      setTableData(data.pokemon.moves.slice(0, 12));
    }
    setTableHeader([
      {
        key: "no",
        label: "No.",
      },
      {
        key: "move",
        label: "Move",
      },
    ]);
  }, [data]);

  return (
    <Layout error={customError} loading={isLoading}>
      {data ? (
        <StyledDetailContainer>
          <StyledImage src={data.pokemon.sprites.front_default} />
          <StyledTitle>{capitalize(data.pokemon.name)}</StyledTitle>
          <StyledTypeContainer>
            {data.pokemon.types.map((it, index) => (
              <StyledType
                key={index + it.type.name}
                color={setTypeColor(it.type.name)}
              >
                {capitalize(it.type.name)}
              </StyledType>
            ))}
          </StyledTypeContainer>

          <Table data={tableData} header={tableHeader} />
          <Button onClick={handleClickCatch}>Catch</Button>
        </StyledDetailContainer>
      ) : null}
      {isModalShow ? (
        <Modal>
          <StyledTitle>Gotcha !</StyledTitle>
          <StyledText>
            You catch a <StyledSpan>{capitalize(data.pokemon.name)}</StyledSpan>
            . Please give it a nickname:
          </StyledText>
          <Input />
          <Button onClick={handleClickCatch}>Catch</Button>
        </Modal>
      ) : null}
    </Layout>
  );
};
