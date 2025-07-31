import React, { useEffect, useState } from "react";

export default function Card({ filter }) {

    const [coffeeList, setCoffeeList] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
            .then((response) => response.json())
            .then((data) => setCoffeeList(data))
    }, [])

    const filteredList = filter === 'available' ? coffeeList.filter(item => item.available) : coffeeList;

    return (
        <div className="card-grid">
            {filteredList.map(coffee => (

                <div className='card' key={coffee.id}>
                    <div className='card-image-wrapper'>
                        <img src={coffee.image} alt={coffee.name} />
                        {coffee.popular && <span className='popular-tag'>Popular</span>}
                    </div>


                    <div className='card-details'>
                        <div className='card-header'>
                            <h4>{coffee.name}</h4>
                            <span className="price-tag">{coffee.price}</span>
                        </div>

                        <div className='card-footer'>
                            {coffee.rating ? (
                                <p>{coffee.rating}⭐ ({coffee.votes} votes)</p>
                            ) : (<p> ☆  No ratings</p>)}
                            {!coffee.available && <span className='out-of-stock-tag'>Sold out</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}