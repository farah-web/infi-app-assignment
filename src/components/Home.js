import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainScreen from '../components/MainScreen';

const Home = () => {
  return (
    <div className='home'>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-md-12 p-0 m-0">
            <Header />
          </div>

          <div className="col-md-2 p-0 m-0">
            <Sidebar />
          </div>

          <div className="col-md-10 p-0 m-0 main">
            <MainScreen />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
