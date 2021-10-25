import React from "react";
import { useHistory } from "react-router-dom";
import "../css/HomePage.css";
import { Carousel } from "react-carousel-minimal";
import { FormatAlignJustify } from "@material-ui/icons";

const HomePage = () => {
  const history = useHistory();

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Fitness & Nutrition - Fitrution",
    },
    {
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      caption: "Yoga - For a Spiritual Discipline",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Ftiness",
    },
    {
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      caption: "Wellness & Selfcare",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523901839036-a3030662f220?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      caption: "Health & Weight Management",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      caption: "Webinars on Fitness",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      caption: "Zumba Certified Coach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      caption: "Dance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      caption: "Health & Nutrition",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="homepage">
      {/* <div className="homepageContainer"> */}
      <div style={{ textAlign: "center" }}>
        {/* <h2>Fitrution</h2>
        <div
          style={{
            padding: "0 10px",
            width: "1800px",
          }}
        > */}
        <Carousel
          data={data}
          time={2000}
          width="1800px"
          height="750px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnails={{ style: FormatAlignJustify }}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "1800px",
            maxHeight: "720px",
            margin: "20px auto",
          }}
        />
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default HomePage;
