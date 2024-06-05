import Router from "./Routes/Router";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
