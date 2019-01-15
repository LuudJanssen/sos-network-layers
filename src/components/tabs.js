const Color = {
  Transparent: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "black"
  },
  Orange: {
    backgroundColor: "#ffc107",
    color: "white"
  }
};

const colorOptions = [Color.Transparent, Color.Orange];

class Tab {
  constructor(textOptions, colorOptions, route) {
    this.textOptions = textOptions
    this.colorOptions = colorOptions
    this.text = this.textOptions[0]
    this.color = this.colorOptions[0]
    this.route = route
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

export default {
  colorOptions,
  Tab
};