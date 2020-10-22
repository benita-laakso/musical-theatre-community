import React from "react";
import Show from "../Show/Show.js";
import data from "../showData.js";

function ShowDescription() {


    return (
      <div>
        <Show data={data[0]}/>
        <div className="custom_hr"></div>
        <Show data={data[1]}/>
        <div className="custom_hr"></div>
        <Show data={data[2]}/>
        <div className="custom_hr"></div>
        <Show data={data[3]}/>
        <div className="custom_hr"></div>
      </div>
    );
  }

  export default ShowDescription;
