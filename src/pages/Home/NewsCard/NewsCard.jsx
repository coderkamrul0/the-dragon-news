import React, { useState } from "react";
import { FaBookmark, FaShareAlt,FaStar,FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,id,other_info,rating,total_view,author,thumbnail_url,image_url,details,} = news;

const [showFullDetails, setShowFullDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullDetails(true);
  };
  return (
    <div className="border rounded mb-5 p-2">
      <div
        style={{ backgroundColor: "#F3F3F3", padding: "10px" }}
        className="author d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center  gap-1">
          <img
            style={{ height: "50px", width: "50px" }}
            className="rounded-circle"
            src={author.img}
            alt=""
          />
          <div className="">
            <h6>{author.name}</h6>
            <p style={{marginBottom: '0'}}>{author.published_date}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <h5>{title}</h5>
      <img className="img-fluid" src={image_url} alt="" />
      <p>{showFullDetails ? details : `${details.slice(0, 300)}...`}</p>
      {!showFullDetails && (
        <p style={{cursor: 'pointer'}} className="text-warning" onClick={handleReadMoreClick}>
          Read More
        </p>
      )}
      <hr />
      <div className="d-flex justify-content-between pb-2">
        <div className="d-flex gap-3 align-items-center">
            <div className="d-flex">
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
                <FaStar className="text-warning"/>
            </div>
            <p style={{marginBottom: '0'}}>{rating.number}</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
            <FaRegEye/>
            <p style={{marginBottom: '0'}}>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
