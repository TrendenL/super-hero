import { useContext } from 'react'
import { HeroContext } from '../context/ContextProvider'

export default function Home() {
    const { name, images } = useContext(HeroContext)

  return (
    <div>
        <h1>{name}</h1>
        <img src={images ? images.lg : name} alt={name} />
    </div>
  )
}
