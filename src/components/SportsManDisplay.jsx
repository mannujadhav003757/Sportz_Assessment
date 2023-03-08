import React from "react";
import { Link } from "react-router-dom";
import "./Home/Home.css";

export default function SportsManDisplay({ player }) {
  return (
    <>
      <div className="card">
        <Link to={`/${player.Id}`}>
          <div className="poster">
            <img
              style={{ height: "400px", width: "330px" }}
              src={`images/${player.Id}.jpg`}
              alt="err"
            />
            <div className="details">
              <h3 className="" style={{color : "white"}}>{player.PFName}</h3>
              <h5 className="playerSkill">Skill: {player.SkillDesc}</h5>
              <h5 className="playerValue">Value: ${player.Value}</h5>
              <h5 className="playerValue">Upcomming matches</h5>
              {player.UpComingMatchesList.map((match) => (
                <p className="nextMatch" key={match.VsCCode}>
                  {match.CCode} vs {match.VsCCode} <br />
                  {match.MDate}
                </p>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
