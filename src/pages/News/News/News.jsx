import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorInside from '../EditorInside/EditorInside';

const News = () => {

    const news = useLoaderData();
    const {
        title,image_url,details,category_id} = news;

    return (
        <div>
            <h4>Dragon News</h4>
            <div className='border p-3'>
                <img className='img-fluid' src={image_url} alt="" />
                <h4 className='py-3'>{title}</h4>
                <p>{details}</p>
                <Link to={`/category/${category_id}`}><button style={{backgroundColor:'red', color: 'white', border: 'none', padding: '10px'}}><FaArrowLeft/> All news in this category</button></Link>
            </div>
            <EditorInside/>
        </div>
    );
};

export default News;