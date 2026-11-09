import { useState, useEffect } from 'react'
import FolderCard from '../components/FolderCard'

function RootPage() {

  const [folders, setFolders] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x=>x.json())
      .then(data=>{
        setFolders(
          Object.values(
            [...new Set(data.files.map(f => f.path))]
          ),
        )    
      })
   }, [])


  return (
    <>
      <input type="search" placeholder="Chercher un document..." />
      <h2>Racine</h2>
      <div className="files">
        {folders.map(path => <FolderCard key={path} path={path} />)}
      </div>
    </>
  )
}

export default RootPage