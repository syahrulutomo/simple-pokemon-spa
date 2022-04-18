import { gql } from "@apollo/client";
export const QUERY_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
          url
        }
      }
    }
  }
`;
