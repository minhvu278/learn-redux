import './App.css';
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Navbar />
              <TodoForm />
              <Todos />
          </div>
      </Provider>

  );
}

export default App;
