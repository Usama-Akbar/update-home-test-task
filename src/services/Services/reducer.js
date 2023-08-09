import { GET_POST } from "../constants";

const initialState = {
  posts: [],
};

export default function Getposts(state = [], action) {
  switch (action.type) {
    case GET_POST:
      return [{ posts: action.data }];
      break;
    default:
      return state;
  }
}
