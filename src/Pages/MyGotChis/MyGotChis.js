import React, { useState } from "react";
import "./MyGotChis.css";
function MyGotChis(props) {
  const [sortBy, setShortBy] = useState("BRS");
  return (
    <div id="MyGotChis">
      <div className="content_header d-flex justify-content-between align-items-center">
        <div className="box d-flex align-items-center">
          <span
            className="d-inline-block"
            data-mdb-toggle="tooltip"
            title="Aavegotchis"
          >
            <img
              src={require("../../Static/img/icon_img/aavegotchialpha.png")}
              style={{ height: "50px" }}
              alt="img"
            />
          </span>
          <span className="balance text-black mx-3">0</span>

          <div className="dropdown content_dropdown">
            <button
              className="dropdown-toggle p-2 px-1 px-sm-3"
              data-mdb-toggle="dropdown"
            >
              Sort By: {sortBy}
            </button>
            <div className="dropdown-menu">
              <ul className="list-unstyled mb-0">
                <li className="w-100 py-1" onClick={() => setShortBy("BRS")}>
                  BRS
                </li>
                <li
                  className="w-100 py-1"
                  onClick={() => setShortBy("KINSHIP")}
                >
                  KINSHIP
                </li>
                <li className="w-100 py-1" onClick={() => setShortBy("XP")}>
                  XP
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box">
          <button className="btn_purple_with_border p-2 px-3 px-sm-5">Pet All</button>
        </div>
      </div>

      <div className="content_body mt-3 p-3 p-md-5">
        <img
          style={{ height: "100px" }}
          src={require("../../Static/img/icon_img/baazaar.png")}
          alt="img"
        />

        <p className="py-3">Don't have a Gotchi? Visit the Baazaar to get one!</p>

        <a href="#" className="btn btn_visit">Visit Baazaar</a>
      </div>
    </div>
  );
}

export default MyGotChis;
