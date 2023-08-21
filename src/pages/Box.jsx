import React from 'react';
import '../styles/task6.css';
import Card1 from './Card1';

const Box = () => {

    const arr = [
        {image:"/assets/box1.png", title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java", date:"August 19, 2022 "},
        {image:"/assets/box2.png", title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable", date:"August 19, 2022"},
        {image:"/assets/box3.png", title: "Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda", date:"August 19, 2022"},
        {image:"/assets/box4.png", title: "Workshop Coffee Sharing Session", date:"August 19, 2022"},
        {image:"/assets/box5.png", title: "Workshop Coffee Brewing", date:"August 19, 2022"}
]
    return (
    <div>
        {arr.map((data, index) => {
            return(
                <Card1 key={index} image={data.image} title={data.title} date={data.date}/>
            )
        })}
    </div>
  )
}

export default Box;