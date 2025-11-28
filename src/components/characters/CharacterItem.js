import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div><div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.image_url} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Occupation:</strong> {item.occupation[0]}
                        </li>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birth_date}
                        </li>
                        <li>
                            <strong>Episode Count:</strong> {item.episodes_count}
                        </li>
                    </ul>
                </div>
            </div>
        </div></div>
    )
}

export default CharacterItem