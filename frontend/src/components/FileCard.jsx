import { Link } from 'react-router-dom'
import { icons, formatDate } from '../utils'

function FileCard({filename, type, size, created}) {

  return (
    <article>
      <div className="icon">{icons[type]}</div>
      <h3>{filename}</h3>
      <p>{size} · <time>{formatDate(created)}</time></p>
      <Link to={`/file/${filename}`} role="button">Ouvrir</Link>
    </article>
  )
}

export default FileCard