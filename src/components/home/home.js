import React from "react";
import "./home.scss";
import myPic from "../../assets/kittenplaceholder.jpg";
import { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="aboutMe">
          <h2>hello, my name is</h2>
          <h1>Arwa Ahmed</h1>
          <p>
            Welcome to my portfolio! I started off my journey in becoming a
            software developer at the age of 9 on Neopets! I taught myself HTML
            and CSS in order to display my photoshop creations using my own
            custom website templates on Freewebs. Fast-forward, I graduated from
            the University of Texas at Dallas with a B.S in Computer Science.
          </p>
          <p>
            After college, I began my career by learning data engineering before
            moving onto a software engineering role. On the side, I've created
            projects using
          </p>
          <p>
            Here are some of the technologies I have worked with:
            <ul>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </p>
        </div>
        <div className="pic">
          <img src={myPic} />
        </div>
      </div>
      <div className="readingSectionHeader">
        <h3>Currently Reading</h3>
      </div>
      <div className="readingSection">
        Add somethign here just to see how it looks
        {/* put your goodreads api stuff here */}
      </div>
    </div>
  );
};

export default Home;
