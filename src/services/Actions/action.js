import { GET_POST } from "../constants";

export const getPosts = (data) => {
  return {
    type: GET_POST,
    data: data,
  };
};
