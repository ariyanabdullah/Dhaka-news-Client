import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { image_url, title, details, _id, author, rating, total_view } = news;
  const { img, name, published_date } = author;

  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <div className="left-div d-flex align-items-center">
              <img
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                src={img}
                alt=""
              />
              <div className="ms-3">
                <h6 className="m-0">{name}</h6>
                <p className="mb-0 ">{published_date}</p>
              </div>
            </div>
            <div className="right-div">
              <span className="me-2">
                <FaRegBookmark />
              </span>
              <span>
                <FaShareAlt />
              </span>
            </div>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <>
                {details.slice(0, 230) + "..."}
                <Link to={`/news/${_id}`}> Read More </Link>
              </>
            ) : (
              <> {details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span>
                <FaStar className="text-warning" />
              </span>
              <span className="ms-2">{rating.number}</span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaRegEye />
              </span>
              <span className="ms-2">{total_view}</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
