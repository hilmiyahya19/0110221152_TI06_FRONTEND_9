// Import Halaman Home
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <Layout>
    <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="/movie/create" element ={<CreateMovie />}></Route>
      <Route path="/movie/popular" element ={<PopularMovie />}></Route>
      <Route path="/movie/now" element ={<NowPlaying />}></Route>
      <Route path="/movie/top" element ={<TopRated />}></Route>
    </Routes>
    </Layout>
    </>
  );
}

export default App;
