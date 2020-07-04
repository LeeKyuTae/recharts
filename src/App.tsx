import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineViewChart from "./charts/LineViewChart";
import {testDatas} from "./config/chartUtils";
import { Line } from 'recharts';

function App() {
  return (
    <div className="App">
      <LineViewChart data={testDatas} XAisDataKey={"name"} legendDataList={["uv", "pv", "amt"]} />
    </div>
  );
}

export default App;
