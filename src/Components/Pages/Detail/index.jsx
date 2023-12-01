import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();

  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getFetch = () => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    getFetch();
  }, []);

  

  return (
    <>
    <Link to={"/"}><button>go back</button></Link>
    {isLoading ? <div><i class="fa-solid fa-spinner fa-spin"></i> <span>Yuklenir...</span></div>: null}
    <div className="container">
      <ul className='card' key={items.id} >
            <img src={items.image}/>
            <li>{items.title}</li>
            <li>{items.price}</li>
            <li>{items.catagory}</li>
            <p>{items.description}</p>
            
            


        </ul>
    </div>
    </>
  );
}

export default Detail;
