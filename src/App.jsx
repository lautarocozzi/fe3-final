
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {routes} from './utils/routes'
import Home from "./Routes/Home";
import Layout from "./Components/Layout";
import Contact from './Routes/Contact'
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import PageNotFound from "./Routes/PageNotFound";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.detail} element={<Detail/>} />
            <Route path={routes.favs} element={<Favs/>} />
            <Route path={routes.pageNF} element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
