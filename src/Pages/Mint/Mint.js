import React from "react";

function Mint(props) {
  return (
    <div className="Mint">
      <div id="PortalItems">
        <div id="PortalClosed">
          <div className="col_size_wrapper content_right_side ">
            <div className="content_wrapper">
              <div className="col_header">
                <div className="d-flex flex-wrap py-3 align-items-center justify-content-between">
                  <button
                    onClick={() => window.history.back()}
                    className="back_btn"
                  >{`<< Back`}</button>
                  <h3 className="mb-0">Mint</h3>

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
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3 p-md-4 px-md-5">
                    <div className="left_side_img_box">
                      <img
                        src={
                          require("../../Static/img/icon_img/h2_closed_img.svg")
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    {/* use backend to control file upload handling */}
                    <input
                      type="file"
                      className="d-none"
                      name=""
                      accept="image/*"
                      id="fileImageUploader"
                    />
                    <button class="border_all_box w-100 mt-3 btn btn-secondary">
                      <label htmlFor="fileImageUploader"> Select Image</label>
                    </button>
                  </div>

                  <div className="col user_details_col p-3 p-md-4 px-md-5">
                    <div className="user_details_col_title">
                      <h3 className="border_all_box px-4 mb-3 text-uppercase py-2">
                        Lorem ipsum dolor sit amet.
                      </h3>

                      <p className="border_all_box px-4 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero sequi, dolore, molestiae amet totam praesentium
                        quo quos nemo, beatae voluptatibus sit aut modi commodi
                        impedit ipsum delectus excepturi veritatis. Odio iure
                        provident suscipit ea consequuntur tempore iusto commodi
                        fuga! Aliquam velit dolorum ipsam illo alias facilis
                        error magni vero debitis. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Totam, nisi?
                      </p>

                      <button className="border_all_box btn w-100 btn-secondary">
                        Create a pack
                      </button>
                    </div>
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

export default Mint;
