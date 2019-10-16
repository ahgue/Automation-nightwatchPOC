module.exports = {
    elements: {
        emailTextBox: {
            selector: '#identifierId',
        },
        nextButton: {
            selector: '#identifierNext',
        },
        passwordTextBox: {
            selector: 'input[type=password]',
        },
        nextButtonPassword: {
            selector: '//span[contains(text(), "Siguiente")]',
            locateStrategy: 'xpath',
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
    ]
}