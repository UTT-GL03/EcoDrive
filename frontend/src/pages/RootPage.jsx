import data from '../assets/sample_data.json'
import FolderCard from '../components/FolderCard'

function RootPage() {
  const folders = [...new Set(data.files.map(f => f.path))]

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