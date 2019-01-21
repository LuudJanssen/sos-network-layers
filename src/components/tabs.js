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

  toggleText() {
    this.text = this.toggleOption(this.textOptions, this.text)
  }

  toggleColor() {
    this.color = this.toggleOption(this.colorOptions, this.color)
  }

  toggleOption(options, option) {
    const currentIndex = options.indexOf(option)
    let newIndex = currentIndex + 1

    if (options.length === newIndex) {
      newIndex = 0
    }

    return options[newIndex]
  }
}