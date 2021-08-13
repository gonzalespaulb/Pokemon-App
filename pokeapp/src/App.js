import "./styling/main.scss";
import React from "react";
import { Brain } from "./Brain";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Brain />
    </Provider>
  );
};

export default App;
