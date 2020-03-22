import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetchAnimes";
import * as types from "../actionsTypes/actionsTypes";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMoke.reset();
  });

  it("creates FETCH_ANIMES when fetching animes has been done", () => {
    fetchMock.getOnce("/", {
      body: {
        animes: [
          {
            title: "anime title",
            image_url: "image.jpg",
            male_id: "123fgh",
            url: "https://www.animes.com",
            score: 4.5
          }
        ]
      },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      {
        type: types.FETCH_ANIMES,
        body: {
          animes: [
            {
              title: "anime title",
              image_url: "image.jpg",
              male_id: "123fgh",
              url: "https://www.animes.com",
              score: 4.5
            }
          ]
        }
      }
    ];
    const store = mockStore({ animes: [] });

    return store.dispatch(actions.fetchTopAnimes()).then(() => {
      // return of async actions
      expect(store.getActions()).toBe(expectedActions);
    });
  });
});
