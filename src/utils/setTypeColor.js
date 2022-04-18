import { colors, types } from "../constants";

export const setTypeColor = (type) => {
  switch (type) {
    case types.grass:
      return colors.grass;
    case types.fire:
      return colors.fire;
    case types.water:
      return colors.water;
    case types.bug:
      return colors.bug;
    case types.normal:
      return colors.normal;
    case types.poison:
      return colors.poison;
    case types.electric:
      return colors.electric;
    case types.ground:
      return colors.ground;
    case types.fairy:
      return colors.fairy;
    case types.fighting:
      return colors.fighting;
    case types.psychic:
      return colors.psychic;
    case types.rock:
      return colors.rock;
    case types.ghost:
      return colors.ghost;
    case types.ice:
      return colors.ice;
    case types.dragon:
      return colors.dragon;
    default:
      return colors.black;
  }
};
