import { Link } from 'react-router-dom'
import { folderName } from '../utils'

function FolderCard({ path }) {
  return (
    <Link to={`/folder/${folderName(path)}`} className="plain-link">
      <article className="folder">
        <div className="icon">📁</div>
        <p>{folderName(path)}</p>
      </article>
    </Link>
  )
}

export default FolderCard