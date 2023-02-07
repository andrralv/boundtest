import { useState } from 'react'
import SidePanel from './components/SidePanel'
import './App.scss'

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  return (
    <div className="App">
      <div className="middle-section">
        <div className="button-section">
          <button 
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="boundtest-button button-submit">
              {'Create New Website'}
          </button>
        </div>
        <SidePanel isPanelOpen={isPanelOpen} setIsPanelOpen={setIsPanelOpen}/>
      </div>
    </div>
  )
}

export default App
