import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)
const updateNews = async ()=>{
   props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data=await fetch(url);
   props.setProgress(30);
    let parsedata= await data.json();
   props.setProgress(70);
   setArticles(parsedata.articles)
   setTotalResults(parsedata.totalResults)
   setLoading(false)
   props.setProgress(100);
  }
  const fetchMoreData = async() => {
    setPage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    let parsedata= await data.json();
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
    setLoading(false)
}
useEffect(() => {
  document.title=`${ props.category.charAt(0).toUpperCase() +props.category.slice(1)} - NewsMonkey`;
  updateNews();
},[])

return (
      <div className="container my-3">
       <h1 className="text-center" style={{margin:"35px,0px",marginTop:"90px"}}>NewsMonkey-Top { props.category.charAt(0).toUpperCase() +props.category.slice(1)} Headlines</h1>
       {/* { state.loading && <Spinner/>} */}
       <InfiniteScroll
          dataLength={articles.length}
          next={ fetchMoreData}
          hasMore={ articles.length!==totalResults}
          loader={ loading && <Spinner/>}
        >
        <div className="container">
         
       <div className="row">
       {articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.imageUrl?"https://w7.pngwing.com/pngs/982/544/png-transparent-news-graphy-logo-icon-news-logo-text-photography-computer-wallpaper.png":element.urlToImage}newsUrl={element.url}
        author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
       })}
       </div> 
       </div>
       </InfiniteScroll>  
      </div>
         
      
    )
}

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
  
 }
 News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
 }
export default News
