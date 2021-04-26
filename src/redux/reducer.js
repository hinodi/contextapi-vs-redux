const initialState = [
  { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.article.title,
          body: action.article.body,
        },
      ];
    default:
      return state;
  }
};

export default reducer;
