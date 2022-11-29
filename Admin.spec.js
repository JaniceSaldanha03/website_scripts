describe('Admin Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})     
});

    // It should Pass
    it(' Check AdminURL', function()
    {   cy.get('#sidebarv2-item-admin > .d-flex').click()    
      cy.wait(100000)
  cy.url().should('contain','https://www.terrasentia.co/admin')
    })

    
    it('Admin page title check', function()
    {      cy.get('#sidebarv2-item-admin > .d-flex').click() 
       cy.wait(100000)
      cy.get(':nth-child(1) > :nth-child(1) > .card-header').contains('Companies')
    cy.get(':nth-child(2) >.card-header').contains('Algorithms')
     cy.get(':nth-child(3) >.card-header').contains('Annotations')
   cy.get(':nth-child(4) >.card-header').contains('Count')
     cy.get('h2.card-header').contains('Size')
     
})

it('Navigate to Company', function()
{   cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get('[href="/coadmin/murraystate"]').click()
  cy.url().should('contain','https://www.terrasentia.co/coadmin/murraystate')
})



//Addition of New Company Name
it('To check if user can click on Create a new company button', ()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
})

it('Title verification of Create new Company ', ()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('#createCompanyModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain','Create New Company')

})


it('Title verification for company name and admin email address',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('[for="companyNameInput"]').should('contain','Company Name:')
  cy.get('[for="companyAdminEmailInput"]').should('contain','Company Admin Email:')
  
})


it('To check if the user can click on the cancel button and exit Create new company pop-up ', ()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('.btn-default').click()
})

it('To check if user can click on the X button to exit Create new Company pop-up',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(20000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('#createCompanyModal > .modal-dialog > .modal-content > .modal-header > .close').click()
})


it('To check if user is able to click on Create button present in Create New Company pop-up ', ()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('.modal-footer > .btn-success').click()
})

it('To check if an error message is displayed when the user tries to create a new company without company id',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('.modal-footer > .btn-success').click()
  cy.get('#companyNameInput-error').should('contain','You must input a company id.')

})

it('To check if an error message is displayed when the user tries to create a new company without company admin mail id',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('.modal-footer > .btn-success').click()
  cy.get('#companyAdminEmailInput-error').should('contain','You must input a company admin email.')

})

it('To check if user can enter data into Company name text-box',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('[name="companyNameInput"]').type('b')
  cy.get('[name="companyNameInput"]').should('have.value','b')
})


it('To check if user can enter data into Company Email Id text-box',()=>{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
  cy.get(':nth-child(1) > .list-group > .text-center > .btn > .fa').click()
  cy.get('[name="companyAdminEmailInput"]').type('a')
  cy.get('[name="companyAdminEmailInput"]').should('have.value','a')
})


//Algorithm

it('Toogle and untoggle switches in Algorithm', function()
{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000) //Need to wait as the page takes time to load
    cy.get(':nth-child(1) > .switch-sm > label').click()
    cy.get(':nth-child(1) > .switch-sm > label').click()
    cy.get(':nth-child(3) > .switch-sm > label').click()
    cy.get(':nth-child(3) > .switch-sm > label').click()
    cy.get(':nth-child(4) > .switch-sm > label').click()
    cy.get(':nth-child(4) > .switch-sm > label').click()
    cy.get(':nth-child(5) > .switch-sm > label').click()
    cy.get(':nth-child(5) > .switch-sm > label').click()
} )

it('Click on Save button in Algorithm', ()=>
{
  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
    cy.get(':nth-child(2) > .list-group > .justify-content-between > .btn').click()
   // cy.get('p').should('contain',"[You are not allow to enable/disable algorithms]");

})

it('Check uncheck annotation graph box', ()=>
{  cy.get('#sidebarv2-item-admin > .d-flex').click()
  cy.wait(100000)
    cy.get('#ac_rect_7').click()
    cy.get('#ac_rect_7').click()
})
   
    it('Check uncheck Count graph options',()=>
    {
      cy.get('#sidebarv2-item-admin > .d-flex').click()
      cy.wait(100000)
    cy.get('#ac_rect_1l').click()
    cy.get('#ac_rect_1l').click()
    cy.get('#ac_path_5l').click()
    cy.get('#ac_rect_1p').click()
    cy.get('#ac_rect_1p').click()
    cy.get('#ac_path_5l').click()
    cy.get('#ac_rect_1t').click()
    cy.get('#ac_rect_1t').click()

    })

    it('Check uncheck size graph options', ()=>
    {     cy.get('#sidebarv2-item-admin > .d-flex').click()
          cy.wait(100000)
          cy.get('#ac_rect_3p').click()
        cy.get('#ac_rect_3p').click()
        cy.get('#ac_path_5o').click()
        cy.get('#ac_rect_3t').click()
        cy.get('#ac_rect_3t').click()
        cy.get('#ac_path_5o').click()
        cy.get('#ac_rect_3x').click()
        cy.get('#ac_rect_3x').click()



    })

})
