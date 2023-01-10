import { createContext } from "react";

export type AppState = {
  getPost: any
};

// eslint-disable-next-line no-shadow
export enum AppActionType {
  setGetPost= "setGetPost",
}

export type AppActions =
  | { type: AppActionType.setGetPost; payload: any };

const initialState = {
  getPost: [] as any,
} as AppState;

export const AppContext = createContext(initialState);

const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionType.setGetPost:
      console.log("action Payload", action.payload)
      let getPosts = [...state.getPost];
      getPosts.push(action.payload)
      console.log(getPosts)
      return {
        ...state,
        getPost: getPosts,
      };
    default:
      return state;
  }
};

export default appReducer;
