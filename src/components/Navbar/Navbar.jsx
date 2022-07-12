import SearchBar from '../SearchBar/SearchBar'

import './navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='nav'>
        <div className='logo'>
          <h2>Super<span>Hero.</span></h2>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}
