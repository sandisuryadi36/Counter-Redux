import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./component/counter";
import { ViewCount } from "./component/viewCount";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid row justify-content-center align items-center p-5">
        <ViewCount />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
