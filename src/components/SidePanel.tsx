import { useState } from 'react'
import './SidePanel.scss'

type SidePanelType = {
  title?: string;
  setIsPanelOpen: Function;
  isPanelOpen: boolean;
}

function SidePanel(props: SidePanelType) {
  const { setIsPanelOpen, isPanelOpen } = props;
  if (isPanelOpen) {
    return (
      <div className="SidePanel">
        <div className="sidepanel-backdrop"></div>
        <div className="sidepanel-content">
          <PanelHeader title="New Website" setIsPanelOpen={setIsPanelOpen} isPanelOpen={isPanelOpen}/>
          <PanelFooter setIsPanelOpen={setIsPanelOpen} isPanelOpen={isPanelOpen} />
        </div>
      </div>
    )
  }
  return null;
}

function PanelHeader(props: SidePanelType) {
  const { title, setIsPanelOpen, isPanelOpen } = props;
  return (
    <div className="PanelHeader">
      <span className="header-title">{title}</span>
      <span className="close-icon" onClick={() => setIsPanelOpen(!isPanelOpen)}>{''}</span>
    </div>)
}

function PanelFooter(props: SidePanelType) {
  const { setIsPanelOpen, isPanelOpen } = props;
  return (
    <div className="PanelFooter">
      <div className="footer-buttons">
        <button className="button-cancel" onClick={() => setIsPanelOpen(!isPanelOpen)}>Close</button>
        <button className="button-submit">Submit</button>
      </div>
    </div>)
}

export default SidePanel
