import React, { useState } from "react";
import { Drawer, Button, ButtonToolbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./Navigation.css";

function Navigation(props) {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const [thumbToggle, setThumbToggle] = useState(false);
  const drawer_link_object = {
    object1: [
      {
        id: 1,
        link: "#",
        name: "My Portals",
        icon: require("../../Static/img/icon_img/portal.gif"),
      },
      {
        id: 2,
        link: "#",
        name: "My GotChis",
        icon: require("../../Static/img/icon_img/aavegotchialpha.png"),
      },
      {
        id: 3,
        link: "#",
        name: "My REALM",
        icon: require("../../Static/img/icon_img/gotchiverse.png"),
      },
      {
        id: 4,
        link: "#",
        name: "Baazaar",
        icon: require("../../Static/img/icon_img/baazaar.png"),
      },
      {
        id: 5,
        link: "#",
        name: "My Items",
        icon: require("../../Static/img/icon_img/my-items.svg").default,
      },
      {
        id: 6,
        link: "#",
        name: "Raffle",
        icon: require("../../Static/img/icon_img/rafflejar.png"),
      },
    ],
    object2: [
      {
        id: 1,
        link: "#",
        name: "Stake GHST",
        icon: require("../../Static/img/icon_img/miner.svg").default,
      },
      {
        id: 2,
        link: "#",
        name: "Bridge Tokens",
        icon: require("../../Static/img/icon_img/matic.svg").default,
      },
      {
        id: 3,
        link: "#",
        name: "Buy Tickets",
        icon: require("../../Static/img/icon_img/ticket-common.svg").default,
      },
    ],
  };
  return (
    <div id="Navigation">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => setOpenWithHeader(true)}
          className="btn_togglebtn p-1 my-2 btn"
          style={{ background: "#006bb3" }}
        >
          <img
            style={{ width: "50px", height: "55px" }}
            src={require("../../Static/img/icon_img/menu.svg").default}
            alt=""
          />
        </button>
      </div>

      <div>
        <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
          <Drawer.Header>
            {/* <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Actions>
              <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
              <Button
                onClick={() => setOpenWithHeader(false)}
                appearance="primary"
              >
                Confirm
              </Button>
            </Drawer.Actions> */}
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="mx-2"
                style={{ width: "22px", height: "22px" }}
                src={require("../../Static/img/icon_img/130.svg").default}
                alt=""
              />
              <button
                className={`bg_toggle_btn_wrapper ${
                  thumbToggle && "active_btn_toggle"
                }`}
                onClick={() => setThumbToggle(!thumbToggle)}
              >
                <span
                  className={`toggle_thumbnail active_cursor ${
                    thumbToggle && "toggle_active"
                  }`}
                ></span>
              </button>

              <img
                className="mx-2"
                style={{ width: "22px", height: "22px" }}
                src={require("../../Static/img/icon_img/90.svg").default}
                alt=""
              />
            </div>
          </Drawer.Header>
          <Drawer.Body>
            <ul className="drawer_nav_list list-unstyled">
              {drawer_link_object.object1.map((v) => {
                return (
                  <li key={v.id} className="mb-3">
                    <a href={v.link}>
                      {" "}
                      <img
                        className="me-3"
                        src={v.icon}
                        alt="img"
                        style={{ width: "30px", height: "30px" }}
                      />{" "}
                      {v.name}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="list_divider"></div>

            <ul className="drawer_nav_list list-unstyled">
              {drawer_link_object.object2.map((v) => {
                return (
                  <li key={v.id} className="mb-3">
                    <a href={v.link}>
                      {" "}
                      <img
                        className="me-3"
                        src={v.icon}
                        alt="img"
                        style={{ width: "30px", height: "30px" }}
                      />{" "}
                      {v.name}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="settings_action">
              <div className="drawer_nav_list d-flex w-100 h-100">
                <a href="#" className="text-center align-self-end w-100  justify-content-center">
                  Settings
                  <img
                    className="ml-3"
                    src={require("../../Static/img/icon_img/settingsIconWhite.jpg")}
                    alt="img"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
              </div>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
}

export default Navigation;
