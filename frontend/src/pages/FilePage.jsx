import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { icons, formatDate, folderName } from '../utils'

function FilePage() {
  const { filename } = useParams()
  const [file, setFile] = useState([])

 useEffect(() => {
    fetch('/sample_data.json')
      .then(x=>x.json())
      .then(data=>{
        setFile(
          Object.values(
           data.files.find(f => f.filename === filename)
          ),
        )    
      })
   }, [])
  
  
  if (!file) {
    return <p>Fichier introuvable. <Link to="/">Retour à la racine</Link></p>
  }

  return (
    <article>
      <header>
        {console.log(file)}
        <Link to={`/folder/${folderName(file[0])}`} role="button" className="secondary">
          ✕ Fermer
        </Link>
      </header>
      <div className="icon big">{icons[file[2]]}</div>
      <h2>{file.filename}</h2>
      <p>Taille : {file[4]}</p>
      <p>Ajouté le <time>{formatDate(file[1])}</time></p>
      <p>Dossier : {file[0]}</p>
    </article>
  )
}

export default FilePage