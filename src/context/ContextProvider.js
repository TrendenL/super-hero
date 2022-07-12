import React, { useState } from 'react'
import axios from 'axios'

export const HeroContext = React.createContext()

export default function ContextProvider(props) {
    const [ heroData, setHeroData] = useState([])

    const baseUrl = process.env.REACT_APP_BASE_URL

    const heroSearch = (hero) => {
        axios.get(`${baseUrl}${hero}`,
        {
            'headers': {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        }
        )
        .then(res => setHeroData(res.data))
        .catch(err => console.log(err))
    }

    console.log(heroData)



    return (
        <HeroContext.Provider value={{ heroSearch, ...heroData }}>
            {props.children}
        </HeroContext.Provider>
    )
}
