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

const Details = () => {
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

  const TWO_SECONDS = 2000;
  const FIVE_SECONDS = 4000;
  const gqlVariables = {
    name,
  };

  const {data, loading, error} = useQuery(QUERY_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  const handleClickCatch = () => {
    /**
     * Generate random value
     * then show the loader
     */
    setCatchValue(Math.random());
    setIsLoading(true);

    /**
     * in 2 seconds
     * close the loader
     * if generated value more than 0.5
     * then show modal
     * if not, show the error alert
     */
    setTimeout(() => {
      setIsLoading(false);
      if (catchValue > 0.5) {
        setIsModalShow(true);
      } else {
        setCustomError({message: `Fret not! you fail to catch ${name}`});
      }
    }, TWO_SECONDS);
  };

  const handleClickGiveNickname = () => {
    // validate if nickname is note empty string
    if (nickname) {
      // the object to be stored in localstorage
      const dataObject = {
        nickname: nickname,
        pokemon: name,
        image: data.pokemon.sprites.front_default,
      };
      /**
       * check if data is stored in localstorage yet
       * if true, check if the given nickname === any of owned pokemon's nickname. if true, show error alert. if no, save the object in localstorage
       * show the success alert
       * refresh the page
       */
      if (localStorage.getItem("pokemon")) {
        let myPokemons = JSON.parse(localStorage.getItem("pokemon"));

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
            }, FIVE_SECONDS);
          }
        }
      // if data is not stored in localstorage yet, simply create new object and save it
      else {
        const pokemon = {
          list: [dataObject],
        };

        localStorage.setItem("pokemon", JSON.stringify(pokemon));
        setIsModalShow(false);
      }
    }
  };

  const handleChangeNickname = (e) => {
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

  // clear toast. hide toast after showed
  useEffect(() => {
    if (customError) {
      setTimeout(() => {
        setCustomError(null);
      }, FIVE_SECONDS);
    }
    if (customSuccess) {
      setTimeout(() => {
        setCustomSuccess(null);
      }, FIVE_SECONDS);
    }
  }, [customError, customSuccess]);

  /**
   * if data from gql is ready, prepare it to populate table
   * set the header too
   */
  useEffect(() => {
    if (data) {
      setTableData(data.pokemon.moves.slice(0, 12).map((it, index) => { return { no: index+1, move:  it.move.name}}));
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
          <StyledImage
            src={data.pokemon.sprites.front_default}
            alt={capitalize(data.pokemon.name)}
            width="150"
            height="150"
          />
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

export default Details