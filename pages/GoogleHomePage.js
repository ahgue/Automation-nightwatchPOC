module.exports = {
    elements: {
      loginButton: {
        selector: '#gb_70',
      },
    },
    commands: [
      {
        waitAndClickElement(element) {
          this.waitForElementVisible(element, this.waitForConditionTimeout)
          return this.click(element)
        },
        waitAndSetValue(element, textInput) {
          this.waitForElementVisible(element, this.waitForConditionTimeout)
          this.clearValue(element)
          return this.setValue(element, textInput)
        },
  
      },
    ],
  }