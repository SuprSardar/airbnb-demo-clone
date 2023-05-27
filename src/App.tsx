import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Pages from "@/pages/Router";
import ScrollToTop from "@/components/ScrollToTop";

import { AppStateStore } from "./context/AppContext";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppStateStore>
        <div className="App">
          <Pages />
        </div>
      </AppStateStore>
    </BrowserRouter>
  );
};

export default App;
