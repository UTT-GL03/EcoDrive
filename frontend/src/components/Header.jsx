import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="plain-link">
              <strong><img src={reactLogo} /> EcoDrive</strong>
            </Link>
          </li>
        </ul>
        <ul><li>Profil</li></ul>
      </nav>
    </header>
  )
}

export default Header