import React from "react";
import Slider from "react-slick";
import style from "../styles/homescreen.module.scss";
import {
  Search,
  Download,
  PlayBtn,
  StarFill,
  ClockFill,
} from "react-bootstrap-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const carouselDate = [
    {
      id: 1,
      title: "Velocix",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      title: "Velocix",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      title: "Velocix",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];
  const cards = [
    {
      id: 1,
      title: "CDN",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <Download />,
      links: "/cdn",
    },
    {
      id: 2,
      title: "VXOA",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <PlayBtn />,
      links: "/cdn",
    },
    {
      id: 3,
      title: "VPP",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <StarFill />,
      links: "/cdn",
    },
    {
      id: 4,
      title: "VRM",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <ClockFill />,
      links: "/cdn",
    },
  ];

  const settings = {
    //   dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    //   slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.homeScreen}>
      <div className={style.wrapper}>
        <div className={style.sliderWrapper}>
          <Slider {...settings}>
            {carouselDate.map((data) => (
              <div className={style.cContent} key={data.id}>
                <h3 className={style.panelHead}>{data.title}</h3>
                <p>{data.body}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Doc grey container */}
      <div className={style.docContainer}>
        <div className={style.container}>
          <div>
            <h1>Documentation</h1>
            <p>
              Everything you need to get your software documentation online.
            </p>
          </div>
          <div className={style.inputWrapper}>
            <input placeholder="Search docs here..." />
            <Search />
          </div>
          {/* <i className="bi bi-search"></i> */}
        </div>
      </div>

      {/* Cards */}
      <div className={style.cardWrapper}>
        <div className={style.container}>
          {cards.map((data) => {
            return (
              <div key={data.id} className={style.card} onClick={()=> navigate(data.links)}>
                <div className={style.cardHead}>
                  <span className={style.iconWrapper}>{data.icon}</span>
                  <span className="card-title">
                    <Link to={data.links}>{data.title}</Link>
                  </span>
                </div>
                <p>{data.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.sHero}>
          <div className={style.sWrapper}>
            <h2>Launch Your Software Project Like a Pro</h2>
            <p className={style.text}>
              <span>Want to launch your software project and start getting traction from your target users? Check out</span>
              <span>our premium Bootstrap 5 startup template CoderPro! It has everything you need to promote your</span>
              <span>product.</span>
            </p>
            <div className={style.btnWrapper}>
              <button>Get CoderPro</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomeScreen;