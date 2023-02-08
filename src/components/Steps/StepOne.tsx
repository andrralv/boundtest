import { ChangeEvent, ReactElement } from "react";
import '../SidePanelSteps.scss';

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
        <input type="text" maxLength={255} value={websiteName} onChange={websiteNameHandler}/>
      </TextLabel>
    </div>
    )
}

const TextLabel = (props: { children: ReactElement, labelText: string, withInfo: boolean }) => {
  const info = "ⓘ";
  const { children, labelText, withInfo } = props;
  return (
    <div className="TextLabel">
      <div className="input-label">
        <span className="bound-label-text">{labelText}</span>
        <span className="info-icon">{withInfo ? info : ''}</span>
      </div>
      <div className="bound-label-content">{children}</div>
    </div>
  )
}

export default StepOne;