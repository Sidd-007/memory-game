import React from 'react'
import './SingleCard.css'


function SingleCard({ card, handleChoice, flipped , disapled}) {

    const handleClick = () => {
        if (!disapled){
            handleChoice(card)
        }
    }


    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="cardfront" />
                <img
                    className="back"
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}

export default SingleCard
