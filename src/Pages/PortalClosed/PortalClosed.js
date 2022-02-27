import React from "react";
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
  return (
    <div id="PortalClosed">
      <div className="row g-0">
        <div className="w-25 col_size_wrapper">
          <aside className="p-3">
            <h3 className="box_title text-center">Collections</h3>
            <ul className="list-unstyled aside_link_list">
              {asideLinkObject.map((v) => {
                return (
                  <li key={v.id}>
                    <a
                      className={`d-flex align-items-center p-2 ${
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus voluptatem quos soluta molestiae adipisci tenetur
              similique aut quasi totam est quae in accusantium voluptatum
              tempora eum expedita optio sapiente debitis dolorem ex, nesciunt
              pariatur saepe! Consectetur ipsum possimus pariatur tempore et,
              necessitatibus cumque. Incidunt voluptatibus est commodi!
              Veritatis totam blanditiis, a enim soluta saepe aut aperiam
              explicabo nobis eos, dignissimos consequatur. Veritatis est rerum
              blanditiis? Quisquam ex id voluptates optio quod consectetur
              distinctio dolorum tempora quo aperiam tenetur corporis dolores
              laborum, neque provident, vero accusamus a esse impedit aspernatur
              necessitatibus cum. Laboriosam inventore iusto animi, accusantium
              facere labore! Molestiae, corrupti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalClosed;
