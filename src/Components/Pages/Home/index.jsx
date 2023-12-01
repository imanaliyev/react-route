import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getFetch =()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data=>{
            setItems(data)
            setIsLoading(false);


        })
    }
    useEffect(() => {
        setIsLoading(true);
        getFetch()
        
        
      
    }, [])
    console.log(items);
  return (
    <>
      {isLoading ? <i class="fa-solid fa-spinner fa-spin"></i> : null}
    <h2> Our Products</h2>
    <div className='main'>
       
       {items.map(x=>
        <ul className='card' key={x.id} >
            <img src={x.image}/>
            <li>{x.title}</li>
            <li>{x.price}</li>
            <li>{x.catagory}</li>
            <Link to={"/detail/"+x.id}><button >details</button></Link>
            


        </ul>
       )}




    </div>
    </>
  )
}

export default Home