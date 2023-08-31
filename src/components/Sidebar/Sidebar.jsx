import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  ArrowDown,
  Signpost2Fill,
  Box2,
  Tools,
  X,
  XLg,
} from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_DOCUMENTS_BY_RELEASE_ID,
  GET_PRODUCT_BY_ID,
} from "../../store/actionTypes";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const { activeState } = props;
  // console.log(activeState, "CHecking the active state 14 -->");
  const [toggle, setToggle] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const products = useSelector((state) => state?.products?.products);


  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: params.productId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <div className="sidebarMenu">
        <span className="menuIcon" onClick={() => setToggle(true)}>
          <List />
        </span>
      </div>
      <div
        id="docs-sidebar"
        className={`docs-sidebar sidebar-visible ${toggle ? "show" : ""}`}
      >
        <nav id="docs-nav" className="docs-nav navbar">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            {products.length > 0 &&
              products.map((product) => {
                const releases = product?.attributes?.releases?.data || [];
                // console.log({ product }, "product");
                return (
                  <>
                    <li
                      className={`nav-item section-title ${
                        activeState === "introduction" ? "active" : ""
                      }`}
                    >
                      <a className="nav-link scrollto active">
                        <span className="theme-icon-holder me-2">
                          <Signpost2Fill />
                        </span>
                        {product?.attributes.title}
                      </a>
                      <span
                        onClick={() => setToggle(false)}
                        className="close-sidebar"
                      >
                        <XLg />
                      </span>
                    </li>

                    {releases.length > 0 &&
                      releases.map((release) => {
                        return (
                          <>
                            <li
                              className={`nav-item ${
                                activeState === "section1.1" ? "active" : ""
                              }`}
                            >
                              <a className="nav-link scrollto">
                                <span
                                  onClick={() => {
                                    dispatch({
                                      type: GET_ALL_DOCUMENTS_BY_RELEASE_ID,
                                      payload: release.id,
                                    });
                                    navigate(
                                      `/${product?.attributes?.title.toLowerCase()}/${
                                        product.id
                                      }/${release.attributes.title.toLowerCase()}/${
                                        release.id
                                      }`
                                    );
                                  }}
                                >
                                  {release.attributes?.title}
                                </span>
                              </a>
                            </li>
                          </>
                        );
                      })}
                  </>
                );
              })}

            {/* <li className={ `nav-item section-title ${activeState === "vxon" ? "active" : ""}`}>
              <a className="nav-link scrollto active" href="#vxon">
                <span className="theme-icon-holder me-2">
                  <ArrowDown />
                </span>
                VXON
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-5">
                Section Item 2.1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-1-6">
                Section Item 2.2
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
