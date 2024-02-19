import axios from "axios";
import { Route, Routes } from "react-router-dom";
import {useEffect} from "react";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './views/Main';
import Intro from './views/company/Intro';

function App() {
  const callApi = async () => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data.test)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/intro" element={<Intro/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
