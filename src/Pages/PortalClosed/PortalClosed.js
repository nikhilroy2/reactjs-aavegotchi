import React, { useState, useEffect } from "react";
import "./PortalClosed.css";
function PortalClosed(props) {
  const asideLinkObject = [
    {
      id: 1,
      name: "AAVEGOTCHIS",
      link: "#",
      icon_img: "https://aavegotchi.com/images/aavegotchialpha.png",
    },
    {
      id: 2,
      name: "PORTALS - CLOSED",
      link: "#",
      icon_img: "https://aavegotchi.com/images/portals/h1_closed.svg",
    },
    {
      id: 3,
      name: "PORTALS - OPEN",
      link: "#",
      icon_img: "https://aavegotchi.com/images/portals/h1_open.svg",
    },
    {
      id: 4,
      name: "GOTCHIVERSE REALM",
      link: "#",
      icon_img: "https://aavegotchi.com/images/gotchiverse.png",
    },
    {
      id: 5,
      name: "WEARABLES",
      link: "#",
      icon_img: "https://aavegotchi.com/images/items/54.svg",
    },
    {
      id: 6,
      name: "CONSUMABLES",
      link: "#",
      icon_img: "https://aavegotchi.com/images/items/129.svg",
    },
    {
      id: 7,
      name: "RAFFLE TICKETS",
      link: "#",
      icon_img: "https://aavegotchi.com/images/tickets/ticket-common.svg",
    },
    {
      id: 8,
      name: "ACTIVITY",
      link: "#",
      icon_img: "https://aavegotchi.com/images/icons/activity.svg",
    },
  ];
  const [portalTabList, setPortalTabList] = useState([]);
  useEffect(() => {
    fetch("./PortalClosedJson.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setPortalTabList(data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div id="PortalClosed">
      <div className="row g-0 mt-5">
        <div className="w-25 col_size_wrapper">
          <aside className="p-3 position-sticky" style={{ top: "0px" }}>
            <h3 className="box_title text-center">Collections</h3>
            <ul className="list-unstyled aside_link_list">
              {asideLinkObject.map((v) => {
                return (
                  <li key={v.id}>
                    <a
                      className={`d-flex align-items-center p-3 ${
                        v.name == "PORTALS - CLOSED" && "active_link"
                      }`}
                      href={v.link}
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        src={v.icon_img}
                        alt=""
                      />{" "}
                      {v.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
        <div className="w-75 content_right_side col_size_wrapper">
          <div className="content_wrapper">
            <div id="portalClosedContent">
              <ul
                className="list-unstyled d-flex tabItemWrapper mb-0 position-sticky"
                style={{ top: "0px" }}
              >
                <li>PORTALS-CLOSED</li>
                <li>50 RESULTS</li>

                <li className="list_dropdown dropdown">
                  <button
                    className="dropdown-toggle"
                    data-mdb-toggle="dropdown"
                  >
                    Sort: Lowest Price
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Lowest price
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Highest price
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        tokenid (ASC)
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        tokenid (desc)
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="list_dropdown dropdown">
                  <button
                    className="dropdown-toggle"
                    data-mdb-toggle="dropdown"
                  >
                    Haunt: all
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        ALL
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        HAUNT 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        HAUNT 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="tabItemContent">
                {portalTabList.length === 0 ? (
                  <ul className="list-unstyled mb-0 tabItemList">
                    <li>
                      <h3>Loading listings...</h3>
                    </li>
                  </ul>
                ) : (
                  <ul className="list-unstyled mb-0 tabItemList">
                    {portalTabList.map((v) => {
                      return (
                        <li key={v.id}>
                          <a href="#" className="d-block tabContentLink">
                            <div className="row">
                              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12">
                                <img
                                  src={
                                    require("../../Static/img/icon_img/h2_closed_img.svg")
                                      .default
                                  }
                                  alt="img"
                                />
                              </div>

                              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className="col_wrapper">
                                  <div className="col_header">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h3 className="mb-0">
                                        UNOPENED PORTAL 21110
                                      </h3>

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
                                    <ul className="list-unstyled">
                                      <li className="text-uppercase">
                                        Haunt: 2
                                      </li>
                                      <li className="text-uppercase">
                                        never sold
                                      </li>
                                      <li>
                                        Owner: <a href="#">0x70...8f51</a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalClosed;
