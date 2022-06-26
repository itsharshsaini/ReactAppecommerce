import React from 'react'
import Child from '../Child/Child';
import  "./Parent.css";
const Parent = () => {
    const data=[
        {   
            id:1,
            name:"Node stage 3 88 Keys",
            price:"$5,738.00",
            review:"31",
            shipping:"195",
            subname:"E.M.L.A MUSIC Le",
            location:"France",
            image:"image1.jpg",
            rate:5,
            label:[
            {isUnique:false,name:"Free Shipping"},
            {isUnique:true,name:"15% OFF"}]
        },
        {   
            id:2,
            name:"Line 6 Helix Rack Guitar Processor - 1x opened box",
            price:"$1831.57",
            review:"561",
            shipping:"244.36",
            subname:"ProMusic Tools",
            location:"Munchen,Germany",
            image:"image2.jpg",
            rate:4,
            label:[{isUnique:true,name:"Brand Name"}]
        },
        {   
            id:3,
            name:"Nord Lead A1",
            price:"$1700",
            review:"341",
            shipping:"35",
            subname:"Gear Garage",
            location:"Dulwich Hill,Australia",
            image:"image3.jpg",
            rate:5,
            label:[{isUnique:true,name:"Brand Name"},
            {isUnique:false,name:"Free Shipping"}]
        },
        {   
            id:4,
            name:"Moog Subsequent 37",
            price:"$1700",
            review:"1031",
            shipping:"205",
            subname:"TURNLAB",
            location:"Antwerpen,Belgium",
            image:"image4.jpg",
            rate:3,
            label:[{isUnique:false,name:"Free Shipping"}]
        },
        {   
            id:5,
            name:"Moog Minitaur 2010s Black",
            price:"$682.80",
            review:"456",
            shipping:"42.68",
            subname:"Andrew's Gear Outlet",
            location:"Ojai,CA,United States",
            image:"image5.jpg",
            rate:4,
            label:[]
        }
    ];
  return (
    <div className='container'>
        <div className='container-box'>
            {
            data.map((value)=>{
              return(<Child data={value} key={value.id}/>);
            })
            }
        </div>
    </div>
  )
}

export default Parent