describe('Change scope Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
       cy.get('#sidebarv2-item-changescope').click()
});


    // It should Pass
    it(' Validate ChangeScopeUrl', function(){
    
        cy.url().should('contain',"https://www.terrasentia.co/changescope")
    })

// It should Pass
    it(' Verify the PageTitle', function(){
        cy.get('h1').should('contain','Change Company Filter')
        
  })


// It should Pass
it('Verify DropdownTitle', function(){
  cy.get('.col > div > p').should('contain','Choose new company filter:')
})


// It should Pass
it(' Change scope from dropdown', function(){
  cy.get('select[id="selectCompany"]').select('Bayer').should('have.value','Bayer')
  cy.get('.btn.btn-primary.changeCompanyButton').click()
  cy.get('.bert-content > p').should('contain','Company scope updated')  
  
})


// It should Pass
it('Changescope from dropdown for already existing company to get already existing message', function(){
  cy.get('select').select('Bayer').should('have.value','Bayer')
  cy.get('.btn.btn-primary.changeCompanyButton').click()
  cy.get('.bert-content > p').should('contain','Please select different company. Already in this scope')
})



// It should Pass
it('Changescope: second value from dropdown', function(){
    cy.wait(500)
    cy.get('select').select('EarthsenseIndia').should('have.value','EarthsenseIndia')
    cy.get('.btn.btn-primary.changeCompanyButton').click()
    cy.get('.bert-content').contains('Company scope updated.')
})



})