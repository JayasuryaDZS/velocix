import React, { useState, useEffect } from "react";

import style from '../../styles/dashboard.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";

const CdnScreen = () => {
  const [activeState, setActiveState] = useState("introduction");

  useEffect(() => {
    const scrollCheck = (e) => {
      // let currentSection = "introduction";

      const navLinkEls = document.querySelectorAll(".nav-item");
      const sectionsEls = document.querySelectorAll("section");

      sectionsEls.forEach((sectionEl) => {
        if (window.scrollY > sectionEl.offsetTop - sectionEl.clientHeight / 3) {
          setActiveState(sectionEl.id);
        }
      });
    }

    window.addEventListener("scroll", scrollCheck);

    return (() => {
      window.removeEventListener("scroll", scrollCheck);
    })
  },[])

  return (
    <div className={style.wrapper}>
      <Header />
      <div className="container">
        <div className={style.rowContainer}>
            <Sidebar activeState={activeState}/>
            <div className={style.main__wrapper}>
              <div className={style.contentSection}>


                <section id="introduction" className={style.intoSec}>
                  <h1>Introduction</h1>
                  <p className={style.smapleText}>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit. Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>

                  <h4>Github Code Example:</h4>
                  <span className={style.text}>You can embed your code snippets using Github gists</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>

                  <h4>Highlight.js Example:</h4>
                  <span className={style.text}>You can embed your code snippets using highlight.js It supports 185 languages and 89 styles.</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>
                </section>

                <section id="section1.1" className={style.intoSec}>
                  <h1>Section 1.1</h1>
                  <p className={style.smapleText}>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit. Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>

                  <h4>Github Code Example:</h4>
                  <span className={style.text}>You can embed your code snippets using Github gists</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>

                  <h4>Highlight.js Example:</h4>
                  <span className={style.text}>You can embed your code snippets using highlight.js It supports 185 languages and 89 styles.</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>
                </section>

                <section id="section1.2" className={style.intoSec}>
                  <h1>Section 1.2</h1>
                  <p className={style.smapleText}>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit. Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>

                  <h4>Github Code Example:</h4>
                  <span className={style.text}>You can embed your code snippets using Github gists</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>

                  <h4>Highlight.js Example:</h4>
                  <span className={style.text}>You can embed your code snippets using highlight.js It supports 185 languages and 89 styles.</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>
                </section>
                <section id="vxon" className={style.intoSec}>
                  <h1>VXON</h1>
                  <p className={style.smapleText}>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit. Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>

                  <h4>Github Code Example:</h4>
                  <span className={style.text}>You can embed your code snippets using Github gists</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>

                  <h4>Highlight.js Example:</h4>
                  <span className={style.text}>You can embed your code snippets using highlight.js It supports 185 languages and 89 styles.</span>

                  <div className={style.githubCode}>
                    <span>Github:</span>
                  </div>
                </section>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CdnScreen;
