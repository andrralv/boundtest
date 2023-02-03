import { useState } from 'react'
import './SidePanel.scss'

function SidePanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="SidePanel">
      SidePanel
    </div>
  )
}

export default SidePanel
