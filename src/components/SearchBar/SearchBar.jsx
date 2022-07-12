import { useState, useContext } from 'react'
import { HeroContext } from '../../context/ContextProvider'

export default function SearchBar() {
    

    const { heroSearch} = useContext(HeroContext)
    const [ hero, setHero] = useState({search: ''})

    console.log(hero)

    function handleChange(e){
        const { name, value } = e.target
        setHero(prevHero => ({
            ...prevHero,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        heroSearch(hero.search)
        setHero(hero)
    }

return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' value={hero.search} placeholder='search' onChange={handleChange} />
            <button>search</button>
        </form>
)
}
