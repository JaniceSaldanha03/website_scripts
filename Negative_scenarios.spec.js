describe('Negative Scenario Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
});

it('Negative Scenario (ChangeScope): Check for company name that does not exist in the list',()=>{
  cy.get('#sidebarv2-item-changescope').click()
  cy.get('select').select('Test').should('have.value','Test')
})

it('verify leftrrow',function()
 {cy.contains('Data').click()
  cy.get('.btn.btn-primary.leftSkip').click({multiple:true})// Negative test case
 }
 )
})