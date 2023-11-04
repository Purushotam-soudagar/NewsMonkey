import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize=5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pagesize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pagesize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pagesize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general"element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pagesize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health"element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pagesize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pagesize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports"element={<News setProgress={setProgress} apiKey={apiKey}  key="sport" pagesize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology"element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pagesize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
}
export default App;