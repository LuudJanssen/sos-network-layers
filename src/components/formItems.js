export class FormItem {
  constructor(id, label, placeholder, description, type, disabled) {
    this.id = id
    this.label = label
    this.placeholder = placeholder
    this.description = description
    this.type = type
    this.disabled = disabled
  }
}

export const nameFormItem = new FormItem('name', 'Full name', 'Johan Derksen', 'We need your name for administrative purposes', 'text', false)
export const firstAddressFormItem = new FormItem('first_address', 'Address Line 1', 'Island Road 1', 'Street address, P.O. box, company name, c/o', 'text', false)
export const secondAddressFormItem = new FormItem('second_address', 'Address Line 2', 'Palm tree #37', 'Apartment, suite, unit, building, floor, etc.', 'text', false)
export const cityFormItem = new FormItem('city', 'City', 'Bermuda Triangle', 'In case unknown, enter "-"', 'text', false)
export const countryFormItem = new FormItem('country', 'Country', 'Bermuda', 'In case unkown, enter "-"', 'text', false)
export const longitudeFormItem = new FormItem('longitude', 'Longitude', '120°', 'With degree symbol', 'text', false)
export const latitudeFormItem = new FormItem('latitude', 'Latitude', '120°', 'With degree symbol', 'text', false)

export const formItems = [
  nameFormItem,
  firstAddressFormItem,
  secondAddressFormItem,
  cityFormItem,
  countryFormItem,
  longitudeFormItem,
  latitudeFormItem,
]