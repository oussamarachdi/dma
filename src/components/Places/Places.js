import { Button } from '@material-ui/core'
import React from 'react'
import './Places.css'
import Card from './Card'

const data = {
    img : "https://www.americashomeplace.com/images/houseStylePage/HighlandsBluff_Currahee_159.jpg",
    title : "A beautiful home",
    location : 'usa',
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis dolor consequuntur quisquam quae natus laboriosam recusandae inventore aliquid repudiandae error nobis incidunt laborum, modi eligendi voluptatum. Odio, labore dicta.",
    star: 4.7,
    price : "30$/day",
    total : "200$"
}

const Places = () => {
    return (
        <div className='places'>
            <h2>Find Home that make you feel comfortable</h2> 
            <div className='btn'>
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>           
            <Card img={data.img} title={data.title} location={data.location} description={data.description} star={data.star} price={data.price} total={data.total}/>
            <Card img={data.img} title={data.title} location={data.location} description={data.description} star={data.star} price={data.price} total={data.total}/>
            <Card img={data.img} title={data.title} location={data.location} description={data.description} star={data.star} price={data.price} total={data.total}/>
            <Card img={data.img} title={data.title} location={data.location} description={data.description} star={data.star} price={data.price} total={data.total}/>
        </div>
    )
}

export default Places
