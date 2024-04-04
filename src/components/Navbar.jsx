import {Link} from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar(){

  return(
    <>
      <header className='navbar-container'>
        <section className='breed-link'>
          <Link to='https://www.akc.org/dog-breeds/' target="_blank"> Breed Info </Link>
        </section>

       
          <h1 className='title'> Puppy Bowl </h1>
        

        <nav className='links'>
          <Link to='/'>Puppies</Link>
          <Link to='/signup'>Sign Up </Link>
        </nav>
      </header>
    
    </>
  )
}