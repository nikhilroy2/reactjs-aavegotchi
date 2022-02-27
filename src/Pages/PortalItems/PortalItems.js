import React from "react";
import { PortalAside } from "../PortalClosed/PortalClosed";
import "../PortalClosed/PortalClosed.css";
import "./PortalItems.css";
function PortalItems(props) {
  return (
    <div id="PortalItems">
      <div id="PortalClosed">
        <div className="row g-0 mt-5">
          <PortalAside></PortalAside>
          <div className="w-75 content_right_side col_size_wrapper">
            <div className="content_wrapper">
              <div className="col_header">
                <div className="d-flex flex-wrap py-3 align-items-center justify-content-between">
                  <button
                    onClick={() => window.history.back()}
                    className="back_btn"
                  >{`<< Back`}</button>
                  <h3 className="mb-0">UNOPENED PORTAL 21110</h3>

                  <span>
                    <img
                      className="me-2"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                      src={require("../../Static/img/icon_img/ghsttoken.png")}
                      alt=""
                    />
                    672
                  </span>
                </div>
              </div>
              <div className="col_body">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="left_side_img_box">
                      <img
                        src={
                          require("../../Static/img/icon_img/h2_closed_img.svg")
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <button disabled={true} class="nes-btn">
                      Connect Wallet to Purchase
                    </button>
                  </div>

                  <div className="col user_details_col p-3 p-md-4 px-md-5">
                    <ul className="list-unstyled">
                      <li>
                        <h2>
                          Owner:{" "}
                          <span className="text_purple">0xC6...273b</span>{" "}
                        </h2>
                      </li>
                      <li>
                        TOKEN ID: <span className="text_purple">5293</span>{" "}
                      </li>
                      <li>HAUNT: 1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalItems;
