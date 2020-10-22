import React from "react";
import "../App/App.css";
import "./Show.css";
import cottage from "../images/thomas-claeys-SrbXjbo-XbQ-unsplash.jpg";
function Show3() {
  return (
    <div>
      <main>
        <h2 className="h2_custom">Cottage county</h2>

        <div className="show-item">
          <div className="show-description">
            <p className="start-p">
              Cottage County tells the story of the community spirit in Mystic
              grove. In 1845 the town experiences grate tragedy as the
              catastrophe 24 occurred and over half of the village was killed.
              Children where left with out parents and couples lost their
              spouses. Great sorrow came over the village. Martha Harris an
              elderly woman with no family, coordinated accommodation and food
              for those who had become homeless over night.
            </p>

            <h4>“Our country is starving, we need to feed
            them" </h4>
            <p>
              Legend has it that Martha Harris walked into the house of
              parliament and said “ Our country is starving, we need to feed
              them, find me the biggest kitchen you can and I will make the
              people dinners Mondays -Saturdays, on Sunday I will rest.” She
              then coordinated food supplying from farmers from around the
              country. She lifted the spirits of the citizens as she supplied
              them with the food and shelter that they needed in thees trying
              times. Now her grate great great grand daughter has made this
              historic event into a Play to honer the women know today as
              “Mother of the Town” as she was there for hundreds of people in
              need. This is our yearly Musical for 2021. As always the it is a
              world premier.
            </p>
          </div>

          <div className="show-img">
            <img
              className="picature"
              src={cottage}
              alt="cottages sorounded by mountains"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Show3;
