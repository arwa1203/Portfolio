import React, { useState } from "react";
import "./home.scss";
import myPic from "../../assets/kittenplaceholder.jpg";
import { useEffect } from "react";
import BookCard from "../book/bookCard";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    getBookDetails();
  }, []);

  function getBookDetails() {
    const books = [];
    fetch(
      "https://www.googleapis.com/books/v1/users/100410344504318037111/bookshelves/3/volumes",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.map((book) => {
          const { title, authors, imageLinks } = book.volumeInfo;
          books.push({
            title,
            authors,
            cover: imageLinks.thumbnail,
          });
        });
        setListOfBooks(books);
      });
  }

  function renderBook() {
    return (
      <div className="bookDiv">
        {listOfBooks.map((book, key) => {
          return <BookCard book={book} key={key} />;
        })}
      </div>
    );
  }

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
          Here are some of the technologies I have worked with:
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
        <div className="pic">
          <img src={myPic} />
        </div>
      </div>
      <div className="readingSectionHeader">
        <h3>Currently Reading</h3>
      </div>
      <div className="readingSection">{listOfBooks ? renderBook() : ""}</div>
    </div>
  );
};

export default Home;
