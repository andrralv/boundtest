export const analytics_integrations = [
  { name: 'Google Analytics 4', id: 'GA401', selected: false, order: 1 },
  { name: 'Adobe Analytics', id: 'AA001', selected: false, order: 2 },
  { name: 'Google Tag Manager', id: 'GTM01', selected: false, order: 3 },
  { name: 'Google Analytics Universal', id: 'GAU01', selected: false, order: 4 },
]

export const data_integrations = [
  { name: '6 sense', id: 'SE001', selected: false, order: 1 },
  { name: 'Clearbit', id: 'CB001', selected: false, order: 2 },
  { name: 'Dun & Bradstreet', id: 'DB001', selected: false, order: 3 },
  { name: 'Terminus', id: 'TE001', selected: false, order: 4 },
]

export type Integration = {
  name: string, id: string, selected: boolean, order: number
};