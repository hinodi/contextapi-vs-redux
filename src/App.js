import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Articles from "./containers/Articles";
import AddArticle from "./components/AddArticle/AddArticle";

function App() {
  return (
    <Provider store={store}>
      <AddArticle />
      <Articles />
    </Provider>
  );
}
export default App;
