import React from 'react'
import "./Child.css";
import {FaStar } from "react-icons/fa";
const Child = (props) => {
    const data=props.data;
    let rating=[];
    for (let i = 0; i < data.rate; i++) {
      rating[i]=i;
    }
  return (
    <div className='card'>
        <div className='main-content'>
          <div className='card-image'>
            <img src={`http://localhost:3000/Image/${data.image}`}></img>
          </div>
          <div className='card-heading'>
            <h3>
              {data.name}
            </h3>
            <div className='label-box'>
              {
                data.label.map((value)=>{
                  return(
            <label className={value.isUnique?`brand`:"shipping"}>
              {value.name}
            </label>);
                })
             }
            </div>
          </div>
        </div>
        <div className='card-details'>
          <div className='rating'>
            <h4> {data.subname}</h4>
            <label style={{"opacity":`${0.5}`}}>{data.location}</label>
              <h6>
                {
                  rating.map((value,index)=>{
                    return (<FaStar/>);
                  })
                }
                <label style={{"opacity":`${0.5}`}}>
                {`(${data.review})`}
                </label>
              </h6>
          </div>
          <div className='price'>
            <h4>
            {`${data.price}AUD`}
            <label style={{"fontSize":`${15}px`}}></label>
            </h4>
            <label style={{"opacity":`${0.5}`}}>
              {`+${data.shipping} Shipping`}
            </label>
          </div>
          <div className='cart'>
            <button type="button" className='button'>
                Add to Cart
            </button>
            <button type="button" className='button'>
              Make Offer
            </button>
          </div>
        </div>
    </div>
  )
}

export default Child