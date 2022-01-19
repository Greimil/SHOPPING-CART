import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import Shop from "./shop";
import Gracias from "./gracias_shopping";
import { DataProvider } from "./context/DataContext";


const RouteSwitch = () => {

  
  return (
    <DataProvider  >
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
      </HashRouter>
    </DataProvider>
  );
};

export default RouteSwitch;
