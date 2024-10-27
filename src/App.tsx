import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Todos from "./components/todos/Todos";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
