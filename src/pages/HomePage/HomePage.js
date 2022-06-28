import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {} from "./HomePage.css";
import {API_URL} from './../../const'
function HomePage() {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch(API_URL+"/collection")
      .then((res) => res.json())
      .then((collections) => {
        setCollections(collections);
      });
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(API_URL+'/jewelryCategory')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
      })
  }, [])

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setSlideIndex(prv => prv===4?0:prv+1)
    },3000)
    
    return () => clearInterval(intervalId)
  },[])

  return (
    <div className="new-homepage">
      <div className="new-homepage-slider">
        <div className="new-homepage-slider-slides">
          {collections.slice(0, 5).map((collection, index) => (
            <Link key={collection.id}
              to={`/collection/${collection.id}`}
              style={
                index === 0 ? { marginLeft: "-" + 20 * slideIndex + "%" } : {}
              }
              className="new-homepage-slider-slide"
            >
              <img src={collection.image} alt="" />
            </Link>
          ))}
        </div>
        <div className="new-homepage-slider-controller-wrapper">
          <div className="new-homepage-slider-controller">
            {collections.slice(0, 5).map((collection, index) => (
              <div key={collection.id}
                style={
                  index === slideIndex ? { backgroundColor: "#FFB2B8" } : {}
                }
                className="new-homepage-slider-controller-bullet"
                onClick={() => setSlideIndex(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="new-homepage-slider-left-btn-wrapper">
          <img
            onClick={() => {
              slideIndex === 0
                ? setSlideIndex(4)
                : setSlideIndex((prv) => prv - 1);
            }}
            className="new-homepage-slider-left-btn"
            src={process.env.PUBLIC_URL +'/btn_arrow_prev.png'}
          ></img>
        </div>
        <div className="new-homepage-slider-right-btn-wrapper">
          <img
            onClick={() => {
              slideIndex === 4
                ? setSlideIndex(0)
                : setSlideIndex((prv) => prv + 1);
            }}
            className="new-homepage-slider-right-btn"
            src={process.env.PUBLIC_URL +'/btn_arrow_next.png'}
          ></img>
        </div>
      </div>
      <div className="new-homepage-category-introduce-wrapper">
        <div className="new-homepage-category-introduce">
            <h2>Khám phá thế giới trang sức tuyệt mỹ</h2>
            {categories.map((category,index)=>(
              <Link key={category.id} to={`jewelry-category/${category.id}`} className="new-homepage-category-wrapper collection-link">
                <div>
                  <img className="new-homepage-category-image"src={category.items[0].image[1]} alt="" />
                </div>
                <span className="new-homepage-category-title">{category.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
