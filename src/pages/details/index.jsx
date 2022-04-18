import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {
  StyledType,
  StyledTypeContainer,
  StyledImage,
  StyledDetailContainer,
  StyledTitle,
  StyledText,
  StyledSpan,
} from "./styled";
import {capitalize} from "../../utils/capitalize";
import {setTypeColor} from "../../utils/setTypeColor";
import {Layout} from "../../components/template/layout";
import {Modal} from "../../components/molecule/modal";
import {Table} from "../../components/atom/table";
import {Input} from "../../components/atom/input";
import {Button} from "../../components/atom/button";
import {QUERY_POKEMON_DETAIL} from "../../query/pokemonDetail";

export const Details = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [customError, setCustomError] = useState(null);
  const [customSuccess, setCustomSuccess] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);
  const [tableHeader, setTableHeader] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [catchValue, setCatchValue] = useState(0);
  const [nickname, setNickname] = useState(null);

  const gqlVariables = {
    name,
  };

  const {data, loading, error} = useQuery(QUERY_POKEMON_DETAIL, {
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
        setCustomError({message: `Fret not! you fail to catch ${name}`});
      }
    }, 2000);
  };

  const handleClickGiveNickname = () => {
    if (nickname) {
      const dataObject = {
        nickname: nickname,
        pokemon: name,
        image: data.pokemon.sprites.front_default,
      };
      if (localStorage.getItem("pokemon")) {
        let myPokemons = JSON.parse(localStorage.getItem("pokemon"));

        console.log(myPokemons, nickname);
        if (
          myPokemons.list.some(
            (it) =>
              String(it.nickname).toLowerCase() ===
              String(nickname).toLowerCase()
          )
        ) {
          setCustomError({message: "Nickname is already exist!"});
        } else {
          myPokemons.list = [...myPokemons.list, dataObject];
          localStorage.setItem("pokemon", JSON.stringify(myPokemons));
          setCustomSuccess({message: `${name} has been caught!`});
          setIsModalShow(false);
          setTimeout(() => {
            navigate(0);
          }, 5000);
        }
      } else {
        const pokemon = {
          list: [dataObject],
        };

        localStorage.setItem("pokemon", JSON.stringify(pokemon));
        setIsModalShow(false);
      }
    }
  };

  const handleChangeNickname = (e) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };

  const handleClickRelease = () => {
    setIsModalShow(false);
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    setCustomError(error);
  }, [error]);

  useEffect(() => {
    if (customError) {
      setTimeout(() => {
        setCustomError(null);
      }, 4000);
    }
    if (customSuccess) {
      setTimeout(() => {
        setCustomSuccess(null);
      }, 4000);
    }
  }, [customError, customSuccess]);

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
    <Layout error={customError} success={customSuccess} loading={isLoading}>
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
          <Input value={nickname} onChange={handleChangeNickname} />
          <Button onClick={handleClickGiveNickname}>Keep</Button>
          <Button onClick={handleClickRelease} style={{marginLeft: "16px"}}>
            Release
          </Button>
        </Modal>
      ) : null}
    </Layout>
  );
};
