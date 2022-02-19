import { Provider } from "react-redux";
import store from "./app/store";
import { ViewCount } from "./component/viewCount";

function App() {
  return (
    <Provider store={store}>
      <div className="container p-5 col-lg-6">
        <ViewCount />
      </div>
    </Provider>
  );
}

export default App;
