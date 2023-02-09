import { ChangeEvent, ReactElement } from "react";
import { sortBy } from 'lodash';
import { type Integration } from "../../data/Integrations";
import { ReactComponent as QuestionMark } from "../../assets/icons/question-circle.svg";

import './SidePanelSteps/SidePanelSteps.scss';

type StepTwoType = {
  integrations: Array<Integration>;
  setIntegrations: Function;
}

const StepTwo = (props: StepTwoType) => {
  const websiteDataHandler = (e: ChangeEvent<HTMLInputElement>, integration: Integration) => {
    const { setIntegrations } = props;
    const data = { name: e.target.name, id: e.target.id, selected: e.target.checked, order: integration.order };
    setIntegrations(data);
  }

  const { integrations } = props;
  return (
    <div className="StepTwo">
      <TextLabel labelText="Choose One Or More Analytics Integrations" withInfo={true}>
        <div className="integrations-container">
          {sortBy(integrations, 'order').map((integration: Integration) =>
            <div className="integrations-checkbox-listitem" key={integration.id}>
              <input
                type="checkbox"
                id={integration.id}
                name={integration.name}
                checked={integration.selected}
                onChange={(e) => websiteDataHandler(e, integration)}>
              </input>
              <label htmlFor={integration.name}>{integration.name}</label>
            </div>)
            }
        </div>
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

export default StepTwo;
