import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'
import './App.css'

import Header from './components/Header'
import RootPage from './pages/RootPage'
import FolderPage from './pages/FolderPage'
import FilePage from './pages/FilePage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/folder/:folderName" element={<FolderPage />} />
          <Route path="/file/:filename" element={<FilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App