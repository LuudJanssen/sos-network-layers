export const COLOR = {
  Normal: {
    value: "inherit",
    text: "Normal"
  },
  Orange: {
    value: "#ffc107",
    text: "Orange"
  }
}

export const colorOptions = [COLOR.Normal, COLOR.Orange]

export class Tab {
  constructor(id, textOptions, correctText, colorOptions, route) {
    this.textOptions = textOptions
    this.colorOptions = colorOptions
    this.correctText = correctText
    this.text = this.textOptions[0]
    this.color = this.colorOptions[0].value
    this.disabled = false
    this.route = route
    this.id = id
  }
}