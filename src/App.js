import "./App.css";
import { Nav, HomeView, ProfileView } from "./components";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/" component={HomeView} />
      <Route path="/profile" component={ProfileView} />
    </div>
  );
}

export default App;
