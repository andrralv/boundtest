import { KeyboardEvent, ReactEventHandler, useEffect, useState } from 'react';

import './SidePanelSteps.scss';

type SidePanelStepsType = {
  currentStep: number,
  setCurrentStep: Function
}

const SidePanelSteps = (props: SidePanelStepsType) => {
  const { currentStep } = props;

  const checkmark = '✓';
  const [stepOneIcon, setStepOneIcon] = useState({content: '1', status: 'unchecked'});
  const [stepTwoIcon, setStepTwoIcon] = useState({content: '2', status: 'unchecked'});
  const [stepThreeIcon, setStepThreeIcon] = useState({content: '3', status: 'unchecked'});

  useEffect(() => {
    const { currentStep } = props; 
    if (currentStep == 1) {
      setStepOneIcon({ content: '1', status: 'current'})
      setStepTwoIcon({ content: '2', status: 'unchecked'})
      setStepThreeIcon({ content: '3', status: 'unchecked'})
    }
    if (currentStep == 2) {
      setStepOneIcon({ content: checkmark, status: 'checked'})
      setStepTwoIcon({ content: '2', status: 'current'})
      setStepThreeIcon({ content: '3', status: 'unchecked'})
    }
    if (currentStep == 3) {
      setStepOneIcon({ content: checkmark, status: 'checked'})
      setStepTwoIcon({ content: checkmark, status: 'checked'})
      setStepThreeIcon({ content: '3', status: 'current'})
    }
  }, [currentStep])

  const keyPressHandler = (e: KeyboardEvent, step: number) => {
   if (e.code === 'Space') {
    setCurrentStep(step);
   }
  }

  const { setCurrentStep } = props;
  return (
    <div className="SidePanelSteps">
      <div className="step-one">
        <span className={`step-icon ${stepOneIcon.status}`} tabIndex={1} 
          onClick={() => setCurrentStep(1)} onKeyDown={(e) => keyPressHandler(e, 1)}>{stepOneIcon.content}
        </span>
        <span className="step-text">Name</span>
        <span className="chevron">{'►'}</span>
      </div>
      <div className="step-two">
        <span className={`step-icon ${stepTwoIcon.status}`} tabIndex={1} 
          onClick={() => setCurrentStep(2)} onKeyDown={(e) => keyPressHandler(e, 2)}>{stepTwoIcon.content}</span>
        <span className="step-text">Analytics</span>
        <span className="chevron">{'►'}</span>
      </div>
      <div className="step-three">
        <span className={`step-icon ${stepThreeIcon.status}`} tabIndex={1} 
          onClick={() => setCurrentStep(3)} onKeyDown={(e) => keyPressHandler(e, 3)}>{stepThreeIcon.content}</span>
        <span className="step-text">Data</span>
      </div>
    </div>
  )
}

export default SidePanelSteps;
