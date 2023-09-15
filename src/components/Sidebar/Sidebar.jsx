import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import {
  List,
  Signpost,
  Signpost2,
  ArrowDown,
  ChevronRight,
  Signpost2Fill,
  Box2,
  Tools,
  X,
  XLg,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_RELEASES_BY_ID,
  GET_PRODUCT_BY_ID,
} from "../../store/actionTypes";
const Sidebar = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products?.products);
  const category = useSelector((state) => state?.releases?.category);

  const [sideBarMenu, setSideBarMenu] = useState("");
  const [subSideBarMenu, setSubSideBarMenu] = useState("");
  const { activeState, setShowToggle, showToggle } = props;

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS });
  }, []);
  const sideBarDropDown = (menu) => {
    if (sideBarMenu === "") {
      setSideBarMenu(menu);
    } else if (sideBarMenu === menu) {
      setSideBarMenu("");
    } else {
      setSideBarMenu(menu);
    }
  };

  const subSideBarDropDown = (subMenu, id) => {
    dispatch({
      type: GET_ALL_RELEASES_BY_ID,
      payload: id,
    });
    if (subSideBarMenu === "") {
      setSubSideBarMenu(subMenu);
    } else if (subSideBarMenu === subMenu) {
      setSubSideBarMenu("");
    } else {
      setSubSideBarMenu(subMenu);
    }
  };

  return (
    <div>
      <div
        id="docs-sidebar"
        className={`docs-sidebar sidebar-visible ${toggle ? "show" : ""}`}
      >
        <nav id="docs-nav" className="docs-nav ">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            <li
              className={`nav-item section-title ${
                activeState === "" ? "active" : ""
              }`}
            >
              <Link className="nav-link scrollto active" to="#">
                Products
              </Link>
              <span
                onClick={() => {
                  setToggle(!toggle);
                  setShowToggle(!showToggle);
                }}
                className="close-sidebar"
              >
                <List />
              </span>
            </li>
            {products.map((item) => {
              return (
                <li
                  key={item}
                  className="nav-link"
                  onClick={(e) => {
                    sideBarDropDown(item?.attributes?.title);
                  }}
                >
                  <span
                    className="nav-link-span"
                    onClick={() =>
                      dispatch({ type: GET_PRODUCT_BY_ID, payload: item.id })
                    }
                  >
                    <span className="arrow-icon">
                      <ChevronRight className="arrow-icon" />
                    </span>
                    {item?.attributes?.title}
                  </span>

                  {(sideBarMenu === item?.attributes?.title ||
                    sideBarMenu === "cdn 1.0") && (
                    <ul className="sub-menu">
                      {item?.attributes?.releases?.data?.map((elem, index) => {
                        return (
                          <li
                            key={index}
                            className="nav-link"
                            onClick={(e) => {
                              e.stopPropagation();
                              subSideBarDropDown(
                                elem?.attributes?.title,
                                elem?.id
                              );
                            }}
                          >
                            {" "}
                            <span className="nav-link-span">
                              <span className="arrow-icon">
                                <ChevronRight className="arrow-icon" />
                              </span>
                              {elem?.attributes?.title}
                            </span>
                            {subSideBarMenu === elem?.attributes?.title && (
                              <ul className="sub-menu">
                                {category?.attributes?.category?.map(
                                  (categories, index) => {
                                    return (
                                      <li key={index}>
                                        {categories?.category_name}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
