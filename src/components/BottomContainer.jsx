import React from 'react'
import Bg from '../Images/Bg.png'
import Cards from './Cards'
import egg from '../Images/egg.png'
import ramen from '../Images/ramen.png'
import chicken from '../Images/chicken.png'
import cake from '../Images/cake.png'
import burger from '../Images/burger.png'
import pancake from '../Images/pancake.png'
import TopContainer from './TopContainer'

const BottomContainer = () => {
  const foodData = [
    {
      name: "BOILED EGG",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: egg,
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: ramen,
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: chicken,
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: cake,
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: burger,
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: pancake,
      type: "dinner",
    },
  ];

  return (
    <div>
      <div className=' h-[78%] w-full opacity-80 absolute bg-black ' >
      </div>
        <img src={Bg} className=' h-[78%] w-full absolute -z-20' alt="" />
        <div className=' flex gap-x-5 gap-y-5 flex-wrap justify-center py-24 px-32'>
          {foodData.map(
            (value,index)=>(
              <Cards 
              // key={value.type}
              
              image={value.image}
              name={value.name}
              text={value.text}
              price={value.price}
              /> 
            )
          )}
          </div>
      
    </div>
  )
}

export default BottomContainer
