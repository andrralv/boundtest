import { ChangeEvent, ReactElement } from "react";
import { ReactComponent as QuestionMark } from "assets/icons/question-circle.svg";

import './SidePanelSteps/SidePanelSteps.scss';

type StepOneType = {
  websiteName?: string;
  setWebsiteName: Function;
}

const StepOne = (props: StepOneType) => {
  const websiteNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { setWebsiteName } = props;
    setWebsiteName(e.target.value);
  }

  const { websiteName } = props;
  return (
    <div className="StepOne">
      <TextLabel labelText="Website Name" withInfo={true}>
        <input type="text" maxLength={255} value={websiteName} onChange={(e) => websiteNameHandler(e)}/>
      </TextLabel>
    </div>
    )
}

const TextLabel = (props: { children: ReactElement, labelText: string, withInfo: boolean }) => {
  const { children, labelText, withInfo } = props;
  return (
    <div className="TextLabel">
      <div className="input-label">
        <span className="bound-label-text">{labelText}</span>
        <span className="info-icon">{withInfo ? <QuestionMark className="h-3 w-3 svg-icon"/> : ''}</span>
      </div>
      <div className="bound-label-content">{children}</div>
    </div>
  )
}

export default StepOne;