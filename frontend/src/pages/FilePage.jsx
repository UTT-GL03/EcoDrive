import { Link, useParams } from 'react-router-dom'
import data from '../assets/sample_data.json'
import { icons, formatDate, folderName } from '../utils'

function FilePage() {
  const { filename } = useParams()
  const file = data.files.find(f => f.filename === filename)

  if (!file) {
    return <p>Fichier introuvable. <Link to="/">Retour à la racine</Link></p>
  }

  return (
    <article>
      <header>
        {}
        <Link to={`/folder/${folderName(file.path)}`} role="button" className="secondary">
          ✕ Fermer
        </Link>
      </header>
      <div className="icon big">{icons[file.type]}</div>
      <h2>{file.filename}</h2>
      <p>Taille : {file.size}</p>
      <p>Ajouté le <time>{formatDate(file.created)}</time></p>
      <p>Dossier : {file.path}</p>
    </article>
  )
}

export default FilePage