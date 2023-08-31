import React, { useState, useEffect } from "react";

import style from "../../styles/dashboard.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";

import { useDispatch, useSelector } from "react-redux";

import {
  GET_ALL_DOCUMENTS_BY_RELEASE_ID,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from "../../store/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../../api";
const DashBoard = () => {
  const [activeState, setActiveState] = useState("introduction");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  console.log({ params }, "dashboard");

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS });
    dispatch({
      type: GET_ALL_DOCUMENTS_BY_RELEASE_ID,
      payload: params.releaseId,
    });

    const scrollCheck = (e) => {
      // let currentSection = "introduction";

      const navLinkEls = document.querySelectorAll(".nav-item");
      const sectionsEls = document.querySelectorAll("section");

      sectionsEls.forEach((sectionEl) => {
        if (window.scrollY > sectionEl.offsetTop - sectionEl.clientHeight / 3) {
          setActiveState(sectionEl.id);
        }
      });
    };

    window.addEventListener("scroll", scrollCheck);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  const releases = useSelector((state) => state?.releases?.release) || [];
  const category = releases?.attributes?.category || [];

  return (
    <div className={style.wrapper}>
      <Header />
      <div className="container">
        <div className={style.rowContainer}>
          <Sidebar activeState={activeState} />
          <div className={style.main__wrapper}>
            <div className={style.contentSection}>
              <section id="introduction" className={style.intoSec}>
                <h1>{releases?.attributes?.title}</h1>
                {category.length > 0 &&
                  category.map((item) => {
                    return (
                      <>
                        {" "}
                        <h2>
                          {" "}
                          <span style={{ color: "red" }}>Category:</span>{" "}
                          {item.category_name}
                        </h2>{" "}
                        <br />
                        {item.subCategory.length > 0
                          ? item.subCategory.map((data) => {
                              return (
                                <>
                                  {" "}
                                  <h3>
                                    <span style={{ color: "red" }}>
                                      Sub Category:
                                    </span>{" "}
                                    {data.subCategoryTitle}
                                  </h3>{" "}
                                  {data.doc.map((docs) => {
                                    return (
                                      <>
                                        <li>
                                          {" "}
                                          <span style={{ color: "blue" }}>
                                            Docs:
                                          </span>{" "}
                                          {docs?.doc_title}
                                        </li>{" "}
                                        <br />{" "}
                                      </>
                                    );
                                  })}
                                </>
                              );
                            })
                          : item.categoryDocs.map((docs) => {
                              return (
                                <>
                                  <li>
                                    {" "}
                                    <span style={{ color: "red" }}>
                                      Docs:
                                    </span>{" "}
                                    <span
                                      onClick={() => {
                                        // console.log({ docs });
                                        navigate(
                                          `/${params.product}/${params.productId}/${params.release}/${params.releaseId}/document`,
                                          { state: docs }
                                        );
                                      }}
                                    >
                                      {docs?.doc_title}
                                    </span>{" "}
                                    <span>
                                      {docs?.renderPdf
                                        ? "render pdf"
                                        : "render content"}
                                    </span>{" "}
                                    {docs?.pdfLink && (
                                      <a
                                        href={`${API_ENDPOINT}${docs.pdfLink}`}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        PDF Link
                                      </a>
                                    )}
                                  </li>{" "}
                                  <br />{" "}
                                </>
                              );
                            })}
                      </>
                    );
                  })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
