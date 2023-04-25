import moment from "moment";
import React, { useState } from "react";
import { FaBookmark, FaShareAlt,FaRegStar, FaStar,FaRegEye } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,id,other_info,rating,total_view,author,thumbnail_url,image_url,details,_id} = news;

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
            <p style={{marginBottom: '0'}}> {moment(author.published_date).format('MMMM Do YYYY')}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <h5>{title}</h5>
      <img className="img-fluid" src={image_url} alt="" />
      {details.length < 250 ? <p>{details}</p>: <p>{details.slice(0,250)}... <Link style={{textDecoration: 'none'}} to={`/news/${_id}`}><p style={{cursor:'pointer' ,color: "#FFBF00"}}>Read More</p></Link></p>}
      <hr />
      <div className="d-flex justify-content-between pb-2">
        <div className="d-flex gap-3 align-items-center">
            <div>
                <Rating
                    placeholderRating={parseInt(rating.number)}
                    emptySymbol={<FaRegStar/>}
                    placeholderSymbol={<FaStar/>}
                    fullSymbol={<FaStar/>}
                >

                </Rating>
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
