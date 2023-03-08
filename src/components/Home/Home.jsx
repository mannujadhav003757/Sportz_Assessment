import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SportsManDisplay from "../SportsManDisplay";

export default function Home() {
  const [data, setData] = useState([]);
  const [sportsman, setSportsman] = useState([]);
  const [dataEmpty, setDataEmpty] = useState(false);

  useEffect(() => {
    const response = async () => {
      return axios.get("https://api.npoint.io/20c1afef1661881ddc9c");
    };

    response().then((res) => {
      setData(res.data);
      console.log(res.data);
      setSportsman(res.data.playerList);
    });
  }, []);

  const handleSearch = (e) => {
    const item = e.target.value;
    const search_res = data.playerList.filter((itm) => {
      return (
        itm.PFName?.toLowerCase().includes(item.toLowerCase()) ||
        itm.TName?.toLowerCase().includes(item.toLowerCase())
      );
    });
    if (search_res.length === 0) {
      setDataEmpty(true);
    } else {
      setDataEmpty(false);
    }
    setSportsman(search_res);
  };

  return (
    <>
      <div className="playerSearch-wrapper">
        <div className="playerSearch">
          <input
            type="text"
            placeholder="Search by Player Name"
            className="playerInput"
            onChange={(e) => handleSearch(e)}
          />
          <i className="fa fa-search" style={{ fontSize: "24px" }}></i>
        </div>
      </div>

      {dataEmpty ? (
        <h1>Player not found...!!!</h1>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {sportsman.map((sportsman) => (
              <div className="col-lg-4">
                <SportsManDisplay
                  player={sportsman}
                  className=" col-sm-3 playerItem"
                  key={sportsman.Id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
