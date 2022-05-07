import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA React is back","Top news - 9099 readers")}
      {newsArticle("Coronavirus : UK updates","Top News - 886")}
      {newsArticle("Tesle hits new highs","Cars and Auto - 300")}
      {newsArticle("Bitcoin Breaks $22k","Crypto - 8000 readers")}
      {newsArticle("Is Redux too good?" ,"Code - 123 readers")}
      {newsArticle("PAPA react launches course?!","Top news - 6503 readers")}
    </div>
  )
}

export default Widgets
