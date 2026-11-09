import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FileCard from '../components/FileCard'
import { folderName } from '../utils'

function FolderPage() {
  const { folderName: name } = useParams() 
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x=>x.json())
      .then(data=>{
        setFiles(
          Object.values(
            data.files.filter(f => folderName(f.path) === name)
          ),
        )    
      })
   }, [])


  return (
    <>
      <input type="search" placeholder={`Chercher un document dans ${name}...`} />
      <h2>
        <Link to="/" role="button" className="secondary outline back">←</Link>
        {name}
      </h2>
      <div className="files">
        {files.map((x, i) => 
           <FileCard {...x} key={i} /> )}
      </div>
    </>
  )
}

export default FolderPage