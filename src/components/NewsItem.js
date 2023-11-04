import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem =(props)=>{
   let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
       <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

  <img src={imageUrl?imageUrl:"https://w7.pngwing.com/pngs/982/544/png-transparent-news-graphy-logo-icon-news-logo-text-photography-computer-wallpaper.png"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><b><small className="text-danger">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></b></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem
