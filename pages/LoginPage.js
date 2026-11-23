export const LoginPage=
class LoginPage{

    constructor(page){
        this.page=page
        this.loginoption='#login2'
        this .usernameinput='#loginusername'
        this.passwordinput='#loginpassword'
        this.loginbtn="//button[@type='button' and text()='Log in']"

    }
    async OpenBrowser(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async LoginPage(username,password){
       await this.page.locator(this.loginoption).click()
       await this.page.locator(this.usernameinput).fill(username)
       await this.page.locator(this.passwordinput).fill(password)
       await this.page.locator(this.loginbtn).click()


    }

}