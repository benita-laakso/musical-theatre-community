import React from "react";
import "../App/App.css";
import "./Show.css";

function Show(props) {
  const data = props.data;
  return (
    <div>
      <main>
        <h2 className="h2_custom first_show">{data.showHeading}</h2>
        <div className="show-item">
          <div className="show-description">
            {data.showDescription.map((el, index) =>{
                if(el.type === "paragraph"){
                    if(index === 0){
                        return <p className="start-p" key={index}>{el.text}</p>
                    }else{
                        return <p key={index}>{el.text}</p>
                    }
                }else if(el.type === "blockquote"){
                    return <blockquote key={index}>{el.text}</blockquote>
                }else if(el.type === "source"){
                    return <div className="qoute-sorce" key={index}>{el.text}</div>
                }else if(el.type === "h4"){
                    return <h4 key={index}>{el.text}</h4>
                }
                return null;
            })}
          </div>
          <div className="show-img">
            <img className="picature" src={data.image} alt="yoga pose"></img>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Show;
