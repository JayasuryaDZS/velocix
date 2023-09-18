import { get } from "lodash";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import pdf2base64 from "pdf-to-base64";

import rehypeRaw from "rehype-raw";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import style from "../../styles/dashboard.module.scss";
import "../../styles/dashboard.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { API_ENDPOINT } from "../../api";

import {
  GET_ALL_DOCUMENTS_BY_RELEASE_ID,
  GET_ALL_PRODUCTS,
} from "../../store/actionTypes";

const Document = () => {
  const [activeState, setActiveState] = useState("introduction");
  const [base64Data, setBase64Data] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const params = useParams();
  const document = get(location, "state", {});

  //Fucntion Convert PDF path url to base64 string:
  const urlToBlob = async () => {
    await pdf2base64(`${API_ENDPOINT}${document.pdfLink}`)
      .then((response) => {
        let base64Str = "data:application/pdf;base64," + response;
        setBase64Data(base64Str);
      })
      .catch((err) => {
        // console.log(err, 'Checking the error');
      });
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS });
    dispatch({
      type: GET_ALL_DOCUMENTS_BY_RELEASE_ID,
      payload: params.releaseId,
    });
    urlToBlob();
  }, []);

  return (
    <div className={style.wrapper}>
      <Header />
      <div className="container">
        <div className={style.rowContainer}>
          <Sidebar activeState={activeState} />
          <div className={style.main__wrapper}>
            <div className={style.contentSection}>
              <div className={style.mainHeader}>
                <h3>{document.doc_title}</h3>
                <a
                  href={`${API_ENDPOINT}${document.pdfLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Pdf
                </a>
              </div>
              {document.renderPdf ? (
                <section style={{ height: "700px" }}>
                  <h4>PDF Render screen</h4>
                  {base64Data && (
                    <object
                      data={base64Data}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    ></object>
                  )}
                </section>
              ) : (
                <section>
                  <h4>Document Content </h4>
                  <br />
                  <ReactMarkdown
                    // eslint-disable-next-line react/no-children-prop
                    children={document?.doc_content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
