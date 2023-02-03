import { useState } from 'react'
import SidePanel from './components/SidePanel'
import './App.css'

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  return (
    <div className="App">
      <div className="middle-section">
        <div className="button-section">
          <button 
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="boundtest-button">
              {`${isPanelOpen ? 'Close' : 'Open'} Side Panel`}
          </button>
        </div>
      </div>
      <SidePanel />
    </div>
  )
}

export default App
