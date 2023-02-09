import { MouseEventHandler, useState } from 'react'
import { compact } from 'lodash';

import { data_integrations, analytics_integrations, type Integration } from '../data/Integrations';
import SidePanelSteps from './Steps/SidePanelSteps/SidePanelSteps';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

import './SidePanel.scss'

type SidePanelType = {
  title?: string;
  setIsPanelOpen: Function;
  isPanelOpen: boolean;
}

type headerType = {
  onClose: MouseEventHandler<HTMLSpanElement>;
  setIsPanelOpen: Function;
}

type footerButtonsType = {
  currentStep: number;
  setCurrentStep: Function;
  submitHandler: Function;
  onClose: MouseEventHandler<HTMLSpanElement>;
}

type InitialStateType = {
  name: string;
  analytics_integrations: Array<Integration>;
  data_integrations: Array<Integration>;
}

const initialState: InitialStateType = {
  name: '',
  analytics_integrations: analytics_integrations,
  data_integrations: data_integrations
};

function SidePanel(props: SidePanelType) {
  const { setIsPanelOpen, isPanelOpen } = props;
  const [currentStep, setCurrentStep] = useState(1);
  const [websiteData, setWebsiteData] = useState(initialState);

  const submitHandler = () => {
    const analytics_integrations = compact(websiteData.analytics_integrations.map(i => {
      if (i.selected) {
        return { name: i.name, id: i.id }
      }
    }));
    const data_integrations = compact(websiteData.data_integrations.map(i => {
      if (i.selected) {
        return { name: i.name, id: i.id }
      }
    }));
    const data = { name: websiteData.name, analytics_integrations, data_integrations };
    console.log(data);
    setCurrentStep(1);
    onClose();
  }

  const onClose = () => {
    setIsPanelOpen(!isPanelOpen);
    setCurrentStep(1);
    setWebsiteData({...initialState, ...{ name: '' }});
  }

  const setWebsiteName = (websiteName: string) => {
    const data = { ...websiteData , name: websiteName };
    setWebsiteData(data);
  }

  const setAnalyticsIntegrations = (integration: Integration) => {
    const { analytics_integrations } = websiteData;
    const filteredIntegrations = analytics_integrations.filter(i => i.id !== integration.id);
    filteredIntegrations.push(integration);
    const data = { ...websiteData, analytics_integrations: filteredIntegrations };
    setWebsiteData(data);
  }

  const setDataIntegrations = (integration: Integration) => {
    const { data_integrations} = websiteData;
    const filteredIntegrations = data_integrations.filter(a => a.id !== integration.id);
    filteredIntegrations.push(integration);
    const data = { ...websiteData, data_integrations: filteredIntegrations };
    setWebsiteData(data);
  }

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return <StepOne websiteName={websiteData.name} setWebsiteName={setWebsiteName} />
      case 2:
        return <StepTwo integrations={websiteData.analytics_integrations} setIntegrations={setAnalyticsIntegrations}/>
      default:
        return <StepThree integrations={websiteData.data_integrations} setIntegrations={setDataIntegrations}/>
    }
  }

  if (isPanelOpen) {
    return (
      <div className="SidePanel">
        <div className="sidepanel-backdrop"></div>
        <div className="sidepanel-content">
          <PanelHeader title="New Website" isPanelOpen={isPanelOpen} onClose={onClose} setIsPanelOpen={setIsPanelOpen}/>
          <SidePanelSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <div className="step">{renderCurrentStep()}</div>
          <PanelFooter 
            setIsPanelOpen={setIsPanelOpen} 
            isPanelOpen={isPanelOpen} 
            onClose={onClose}
            currentStep={currentStep} 
            setCurrentStep={setCurrentStep}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    )
  }
  return null;
}

function PanelHeader(props: SidePanelType & headerType) {
  const { title, onClose } = props;
  return (
    <div className="PanelHeader">
      <span className="header-title">{title}</span>
      <span className="close-icon" onClick={onClose}>{''}</span>
    </div>)
}

function PanelFooter(props: SidePanelType & footerButtonsType) {
  const { currentStep, setCurrentStep, submitHandler, onClose } = props;
  const currentStepHandler = () => {
    if (currentStep !== 3) {
      setCurrentStep(currentStep+1);
    }
    if (currentStep == 3) {
      submitHandler();
    }
  };

  return (
    <div className="PanelFooter">
      <div className="footer-buttons">
        <button className="button-cancel" onClick={onClose}>Cancel</button>
        <button className="button-submit" 
          onClick={currentStepHandler}>{currentStep === 3 ? 'Submit & Create Website' : 'Next'}
        </button>
      </div>
    </div>)
}

export default SidePanel;
