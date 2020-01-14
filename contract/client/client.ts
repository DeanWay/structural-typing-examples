const canadaProvinces = ['ON', 'QC'] as const
const usStates = ['NY', 'NJ'] as const

interface CanadaAccountSettings {
  country: 'CA'
  province: typeof canadaProvinces[number]
  visaDebitEnabled?: boolean
}

interface USAccountSettings {
  country: 'US'
  state: typeof usStates[number]
  achEnabled?: boolean
}

type AccountSettings = CanadaAccountSettings | USAccountSettings

const postRequest = (request: AccountSettings) => { }
