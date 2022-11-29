describe('Log-In Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
});


// It should Pass
    it('Website Login', function()
    { 
      cy.visit("https://www.terrasentia.co/")
      cy.contains('Log In').click()
      cy.get("input#login-email.form-control").type("janice@earthsense.co",{force: true}).should('have.value','janice@earthsense.co').log("Valid Email")
      cy.get("input#login-password.form-control").type("RupRuJ.cC123456").should('have.value','RupRuJ.cC123456')
      cy.get('#login-button',{timeout:2000}).click()
      cy.get('.bert-content > p')
    })

  
      
it('Verify Login page url', ()=>{
  cy.visit("https://www.terrasentia.co/")
  cy.contains('Log In').click()
  cy.url().should('contain','https://www.terrasentia.co/#')

})

  it('Verify Login Page title',()=>{

    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get('.modal-title').should('contain',"Please Sign In")
    
  })

  
  it('Verify Email Address title', ()=>{
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get(':nth-child(1) > label').should('contain','Email Address')
  })
  
  it('Verify Password title', ()=>{
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get(':nth-child(2) > label').should('contain','Password')
  })
  
  it('To check if user can exit the Login screen by clicking on the X button', ()=>{
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get('.close').click()
  })
  
  it('To check if user cannot login without entering email and password', ()=>{
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get('#login-email').clear()
    cy.get('#login-password').clear()
    cy.get('#login-button').click()
    cy.get('.bert-container').should('contain','Sign In Failed: Match failed')
  })


  // It should Pass
  it('Verify login success message',function()
  {
  
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force: true}).should('have.value','janice@earthsense.co').log("Valid Email")
    cy.get("input#login-password.form-control").type("RupRuJ.cC123456").should('have.value','RupRuJ.cC123456')
    cy.get('#login-button',{timeout:2000}).click()
    cy.get('.bert-content').contains('Login succeeded.')
  
  
  })
  
  
// It should Pass
it('Login with Invalid data as Email and password and check message',function()
{
cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get("input#login-email.form-control").type("testtb@earthsense.co")
cy.get("input#login-password.form-control").type("aabcdaaa")
cy.get('#login-button').click()
cy.get('.bert-alert').contains('Sign In Failed: User not found')

})

  // It should Pass
  it('Login with Invalid email and check message',function()
{
cy.visit("https://www.terrasentia.co/")
      cy.contains('Log In').click()
      cy.get("input#login-email.form-control").type("test11@earthsense.co",{force: true})//.should('not.have.value','test@earthsense.co').log('Invalid Email')
cy.get("input#login-password.form-control").type("abcccc")//.should('not.have.value','abcd').log('Invalid Password')
cy.get('#login-button').click()
cy.get('.bert-alert').contains('User not found')

  })

  // It should Pass
it('Login with Invalid password and check message ',function()
{
cy.visit("https://www.terrasentia.co/")
      cy.contains('Log In').click()
      cy.get("input#login-email.form-control").type("janice@earthsense.co",{force: true}) //.should('not.have.value','test@earthsense.co').log('Invalid Email')
cy.get("input#login-password.form-control").type("abcdddd")  //.should('not.have.value','abcd').log('Invalid Password')
cy.get('#login-button').click()
cy.get('.bert-alert').contains('Sign In Failed: Incorrect password')

  })



  //Forgot password testcases
  it('To check if user can click on Forgot password link', ()=>{
    cy.visit("https://www.terrasentia.co/")
    cy.contains('Log In').click()
    cy.get('#forgot-password-link').click()
  })
  
  
  it('Verify the Forgot password URL',()=>{
    cy.visit("https://www.terrasentia.co/forgot_password")
    cy.url().should('contain','https://www.terrasentia.co/forgot_password')
  
  })
  
  
  it('To check if user can click on Send password reset email button', ()=>{
    cy.visit("https://www.terrasentia.co/forgot_password")
  cy.get('.btn').click()
  })
  
  
  it('To check if password reset email is sent successfully for a registered account email address',()=>{
    cy.visit("https://www.terrasentia.co/forgot_password")
  cy.get('#email').type('janice@earthsense.co')
  cy.get('.btn').click()
  cy.get('.bert-alert').should('contain','Sent password reset email')
  
  })
  
  it('To check if an error message is displayed when user tries to send a password reset mail to a unregistered user',()=>{
    cy.visit("https://www.terrasentia.co/forgot_password")
  cy.get('#email').type('abm@gmail.com')
  cy.get('.btn').click()
  cy.get('.bert-alert').should('contain','Sending password reset email failed: User not found')
  
  })
  


})