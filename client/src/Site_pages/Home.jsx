import React from "react";
import "../page_styles/Home.css";
import Slider from '../components/home/Slider'
import About from "../components/home/About"
import Card from "../components/home/Card"
import Work from "../components/home/Work"

export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Slider />
        <About />
        <Card />
        <Work />
      </div>
    );
  }
}
