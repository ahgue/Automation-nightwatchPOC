module.exports = {
    'Login ': (client) => {
        const homePage = client.page['GoogleHomePage']()
        const loginPage = client.page['LoginPage']()

        client.url('https://www.google.com').maximizeWindow()
        homePage.waitAndClickElement('@loginButton')
        loginPage.waitAndSetValue('@emailTextBox', process.env.EMAIL_ADDRESS)
        loginPage.waitAndClickElement('@nextButton')
        loginPage.waitAndSetValue('@passwordTextBox', process.env.PASSWORD)
        loginPage.waitAndClickElement('@nextButtonPassword')
        homePage.assert.elementNotPresent('@loginButton')
        client.end()
    }
}