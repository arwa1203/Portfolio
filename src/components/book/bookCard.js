import React from "react";
import "./bookCard.scss";
import { Card } from "react-bootstrap";

const BookCard = (props) => {
  const { title, authors, cover } = props.book;
  console.log("YEEE" + props);
  return (
    <Card>
      <Card.Img variant="top" src={cover} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>
          <span className="authorName">{authors}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
