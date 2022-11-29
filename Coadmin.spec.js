
describe('Coadmin Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
       cy.wait(3000)
       cy.contains('Co-Admin').click()
       cy.wait(1000)
});


// It should Pass
it('Coadmin Title',function(){  
  cy.get('.card-header').contains('Company Users')
})


it('Co-Admin Url check', ()=>{
  cy.get('#sidebarv2-item-changescope').click()
  cy.get('select').select('EarthsenseIndia').should('have.value','EarthsenseIndia')
    cy.get('.btn.btn-primary.changeCompanyButton').click()
    cy.contains('Co-Admin').click()
  cy.url().should('contain',"https://www.terrasentia.co/coadmin/EarthsenseIndia")
})

it('Co-Admin table content check', ()=>{
  cy.get('thead > tr > :nth-child(1)').should('contain',"Email")
  cy.get('thead > tr > :nth-child(2)').should('contain',"Permissions")
})

it('Check if Modify button is clickable',()=>{
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
})

it('Coadmin:Verify User role (Custom User)',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Custom User')
})

it('Coadmin:Verify User role (Base User)',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Base User')
})

it('Coadmin:Verify User role (Admin User)',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Admin User')
})


it('Coadmin:Verify User role (Robot)',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Robot')
})

it('Coadmin:Verify Modify permissions Title',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain',"Modify Permissions")
})

it('Coadmin:Verify Modify permissions Page content title',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('.col > :nth-child(1) > label').should('contain',"Employee Role :")
  cy.get('.panel > .modal-body > :nth-child(1)').should('contain',"localCompany")
  cy.get('.modal-body > :nth-child(3)').should('contain',"globalPage")
})



//It should Pass
it('Coadmin:Modify permissions with save',function(){
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
//cy.get(':nth-child(6) > :nth-child(1) > .switch-sm > label').click()
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close',{force:true}).click({force:true})
cy.get('#permissionModalSaveBtn').click({force:true})
})

 //It should Pass
it('Coadmin:Modify permissions with Cancel button',function(){

  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
//cy.get(':nth-child(6) > :nth-child(1) > .switch-sm > label').click()
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close',{force:true}).click({force:true})
cy.get('.modal-footer > .btn-default').click({force:true})
})

// It should Pass
it('Coadmin:Modify permissions with X icon',function(){
  cy.contains('Co-Admin').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
//y.get(':nth-child(6) > :nth-child(1) > .switch-sm > label').click()
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close',{force:true}).click({force:true})
//cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
})


it('Check if email button is clickable',function(){
  cy.get(':nth-child(2) > :nth-child(2) > .btn-permissions > .fa').click()
})

// It should Pass
it('Coadmin:Reset Email (no)',function(){

  //cy.get(':nth-child(1) > :nth-child(2) > .btn-reset-email > .fa').click()
  cy.get(':nth-child(20) > :nth-child(2) > .btn-reset-email > .fa').click()
  cy.get('.__cancel.btn.btn-default').click() // click NO

   })


  // It should Pass
  it('Coadmin:Reset Email (yes)',function(){
   
    cy.get(':nth-child(20) > :nth-child(2) > .btn-reset-email > .fa').click()
    cy.wait(20000)
    cy.get('.__yes').click()// Click yes
    
  })

  it('Co-Admin: Verify the text for email button to create new user',()=>{
    cy.get('.btn-new-company-user').should('contain',"Email")
  })

  it('Co-Admin: Verify the text for Robot button to create new robot',()=>{
    cy.get('.btn-new-company-robot').should('contain',"Robot")
  })
  
  it('Check if Create new company button is clickable',function(){
    cy.get('.btn-new-company-user').click() 
  })

  it('Check if Create new Robot button is clickable',function(){
    cy.get('.btn-new-company-robot').click() 
  })

  it('Verify the title contents of Create new User page',()=>{
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('#createCompanyUserModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain',"Create New Company User")
    cy.get('[for="emailInput"]').should('contain',"Email:")
    cy.get('.modal-body > div > label').should('contain',"Employee Role :")
    cy.get('.modal-footer > .btn-default').should('contain',"Cancel")
    cy.get('.modal-footer > .btn-success').should('contain',"Create")
    
  })

  it('Create New Company User:Check if you can enter content in the email section',()=>{
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('.modal-body > .form-control').type("abc@gmail.com")
    
  })
  
// It should Pass
it('Create New Company User with Valid Email Address',function(){
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.get('.modal-body > .form-control').type("test0021@gmail.com")
  //cy.get('select').select('Base User')
  cy.get('.modal-footer > .btn-success').click()
  cy.wait(500)
  cy.get('.bert-container')
})

it('Create New Company User with InValid Email Address',function(){
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.get('.modal-body > .form-control').type("aaaaabb")
  //cy.get('select').select('Base User')
  cy.get('.modal-footer > .btn-success').click()
  cy.wait(500)
  cy.get('.bert-container').should('contain',"Kindly enter valid email address")
})

it('Create New Company User with existing email address',()=>{
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.get('.modal-body > .form-control').type("test0002@gmail.com")
  cy.get('.modal-footer > .btn-success').click()
  cy.wait(500)
  cy.get('.bert-container') 
})




  it('Email Button:Check if user is able to exit the page without entering email id',()=>{
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('.modal-footer > .btn-success').click()
    cy.get('#emailInput-error').should('contain',"You must input an email.")
  })
  

// It should Pass
/*it('Create New Company User:Admin',function(){
  cy.contains('Co-Admin').click()
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.title('Create New Company User')
  cy.get('.modal-body > .form-control').type('admintest1@gmail.com')
  cy.get('.modal-body > :nth-child(3)')
 // cy.get('.modal-content > .row > .col > :nth-child(1)').click()
  cy.get('select').select('Admin User').should('have.value','adminUser')
  cy.get('.modal-footer > .btn-success').click()
  //cy.get('.bert-container').contains('Verification Email Sent.')
})
 
/*
// It should Pass
it('Create New Company User:SuperAdmin',function(){
  cy.contains('Co-Admin').click()
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.title('Create New Company User')
  cy.get('.modal-body > .form-control').type('testabc@gmail.com')
  cy.get('.modal-body > :nth-child(5)')
 // cy.get('.modal-content > .row > .col > :nth-child(1)').click()
  cy.get('select').select('Super Admin').should('have.value','superAdmin')
  
  cy.get('.modal-footer > .btn-success').click()
  //cy.get('.bert-container').contains('Verification Email Sent.')
})





// It should Pass
it('Create New Company User:SuperAdmin:Edit_Button',function(){
  cy.contains('Co-Admin').click()
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.title('Create New Company User')
  cy.get('.modal-body > .form-control').type('testabc@gmail.com')
  cy.get('.modal-body > :nth-child(5)')
 // cy.get('.modal-content > .row > .col > :nth-child(1)').click()
  cy.get('select').select('Super Admin').should('have.value','superAdmin')
  cy.get('#postResultsEdits').click()
  
  cy.get('.modal-footer > .btn-success').click()
  //cy.get('.bert-container').contains('Verification Email Sent.')
})




// It should Pass
it('Create New Company User:SuperAdmin:Post_Result_Button',function(){
  cy.contains('Co-Admin').click()
  cy.get('.btn.btn-primary.btn-new-company-user').click()
  cy.title('Create New Company User')
  cy.get('.modal-body > .form-control').type('testabc@gmail.com')
  cy.get('.modal-body > :nth-child(5)')
 // cy.get('.modal-content > .row > .col > :nth-child(1)').click()
  cy.get('select').select('Super Admin').should('have.value','superAdmin')
  cy.get('#postResultsReviews').click()
  
  cy.get('.modal-footer > .btn-success').click()
  //cy.get('.bert-container').contains('Verification Email Sent.')
})


*/

it('New Robot:Verify New robot page titles', ()=>{
  cy.get('.btn-new-company-robot').click()
  cy.get('#createCompanyRobotModal > .modal-dialog > .modal-content > .modal-header').contains("Create New Company User")
  cy.get('[for="idInput"]').should('contain',"ID:")
  cy.get('[for="passwordInput"]').should('contain',"Password:")
})
  

// It should Pass
it('Robot Button: Create New Company User: close icon',function(){
  cy.get('.btn-new-company-robot').click()
  cy.get('#createCompanyRobotModal > .modal-dialog > .modal-content > .modal-header > .close').click()
// cy.get('#createCompanyUserWithIdModal > .modal-dialog > .modal-content > .modal-header > .close').click()/// not getting closed in testrunner
  
})

  // It should Pass
 it('Robot : Create New Company User : cancel btn',function(){
  cy.contains('Co-Admin').click()
  cy.get('.btn-new-company-robot').click()
 //cy.get('.modal-footer > .btn-default')
 cy.get('#createCompanyRobotModal > .modal-dialog > .modal-content > .modal-header > .close').click()/// not getting closed in testrunner
  
})



it('Robot : Click on save button without entering any ID',function(){
  cy.get('.btn-new-company-robot').click()
  cy.get('.modal-footer > .btn-success').click()
  cy.get('#idInput-error').should('contain',"You must input an ID")
})

it('Robot : Click on save button without entering any password',function(){
  cy.get('.btn-new-company-robot').click()
  cy.get('.modal-footer > .btn-success').click()
  cy.get('#passwordInput-error').should('contain',"You must input a password.")
})


// It should Pass
it('Robot : Create New Company User',function(){

  // cy.get('.btn.btn-primary.btn-new-company-user-with-id').click()
  cy.get('.btn-new-company-robot').click()
  cy.wait(500)
  cy.get('[type="text"]').type('CypressTest025')
   cy.get('.modal-body > [type="password"]').type('1232acec')
   cy.get('.modal-footer > .btn-success').click()
   //cy.wait(500)
   //cy.get('.bert-container').contains('Account Created')
   //cy.get('p')
 })
 


it('Custom User Role cancel icon',function(){
// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Custom User').should('have.value','customUser')

// To close permission pop up
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()

})

it('Custom User Role cancel button',function(){
// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Custom User').should('have.value','customUser')

// To close permission pop up
cy.get('.modal-footer > .btn-default').click()

})

it('Custom User with Save Btn ',function(){
// To click save btn
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Custom User').should('have.value','customUser')
cy.get('#permissionModalSaveBtn').click()

})



it('Base User Role close icon',function(){

// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Base User').should('have.value','baseUser')

// To close permission pop up
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()

})

it('Base User Role cancel button',function(){


// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Base User').should('have.value','baseUser')

// To close permission pop up
cy.get('.modal-footer > .btn-default').click()

})

it('Base User Save Btn ',function(){
  cy.contains('Co-Admin').click()

// To click save btn
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Base User').should('have.value','baseUser')
cy.get('#permissionModalSaveBtn').click()

})



it('RobotRole Cancel icon',function(){
 

// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Robot').should('have.value','robot')

// To close permission pop up
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()

})


it('RobotRole Cancel button',function(){
 
// To select other user 
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Robot').should('have.value','robot')

// To close permission pop up
cy.get('.modal-footer > .btn-default').click()
})


it('RobotRole Save Btn ',function(){


// To click save btn
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Robot').should('have.value','robot')
cy.get('#permissionModalSaveBtn').click()

})


it('Admin User Role cancel icon',function(){
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Admin User').should('have.value','adminUser')

// To close permission pop up
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()

})


it('Admin User Role cancel button',function(){

// To select other user 

cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Admin User').should('have.value','adminUser')

// To close permission pop up
cy.get('#permissionModalSaveBtn').click()

})

it('Admin User Save Btn ',function(){

cy.url().should('include','/coadmin')
// To click save btn
cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
cy.get('select').select('Admin User').should('have.value','adminUser')
cy.get('#permissionModalSaveBtn').click()

})


})