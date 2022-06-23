import React, {useState} from 'react'
import "./Card.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

const Card = ({
    img, 
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className='Card'>
            <img src={img} alt=""/>
            <FavoriteBorderIcon className={liked ? "Card_heart liked" : "Card_heart"} onClick={() => setLiked(!liked)}/>
            <div className='Card_info'>
                <div className='Card_infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className='Card_infoBottom'>
                    <div className='Card_stars'>
                        <StarIcon  className="Card_star"/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='Cards_price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
