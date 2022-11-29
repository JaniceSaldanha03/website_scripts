describe('Clientside Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/#");
    cy.contains('Log In').click()
    cy.get("input#login-email.form-control").type("janice+earthsenseindia@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC1234",{force:true})
      cy.get('.btn-success.form-control').click({force:true})
});

it('To check if user can click on Co-Admin ', function(){
cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
})


it('To check if user can click on Data', function()
{ cy.contains('Data').click()

  
})
// It should pass
it('To check if user can click on Results',function()
{cy.contains("Results").click()
})


/************ Co-Admin in client company ********/

it('Verify Coadmin Title',function(){  
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get('.card-header').contains('Company Users')
})

it('Check the contents present in the Co-Admin table', ()=>{
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get('thead > tr > :nth-child(1)').should('contain',"Email")
  cy.get('thead > tr > :nth-child(2)').should('contain',"Permissions")
})

it('Check if Modify button is clickable',()=>{
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
})

it('Coadmin:Verify User role (Custom User)',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Custom User')
})

it('Coadmin:Verify User role (Base User)',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Base User')
})

it('Coadmin:Verify User role (Admin User)',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Admin User')
})


it('Coadmin:Verify User role (Robot)',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#empRoleSelector').select('Robot')
})

it('Coadmin:Verify Modify permissions Title',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain',"Modify Permissions")
})

it('Coadmin:Verify Modify permissions Page content title',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('.col > :nth-child(1) > label').should('contain',"Employee Role :")
  cy.get('.panel > .modal-body > :nth-child(1)').should('contain',"localCompany")
  cy.get('.modal-body > :nth-child(3)').should('contain',"globalPage")
})

it('Coadmin:Modify permissions with save',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(21) > :nth-child(2) > .btn-permissions > .fa').click()
//cy.get(':nth-child(6) > :nth-child(1) > .switch-sm > label').click()
cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close',{force:true}).click({force:true})
cy.get('#permissionModalSaveBtn').click({force:true})
})

 //It should Pass
it('Coadmin:Modify permissions with Cancel button',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
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
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(2) > :nth-child(2) > .btn-permissions > .fa').click()
})

// It should Pass
it('Coadmin:Reset Email (no)',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  //cy.get(':nth-child(1) > :nth-child(2) > .btn-reset-email > .fa').click()
  cy.get(':nth-child(1) > :nth-child(2) > .btn-reset-email > .fa').click()
  cy.get('.__cancel.btn.btn-default').click() // click NO

   })


  // It should Pass
  it('Coadmin:Reset Email (yes)',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get(':nth-child(1) > :nth-child(2) > .btn-reset-email > .fa').click()
    cy.wait(20000)
    cy.get('.__yes').click()// Click yes
    
  })

  it('Co-Admin: Verify the text for email button to create new user',()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-user').should('contain',"Email")
  })

  it('Co-Admin: Verify the text for Robot button to create new robot',()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-robot').should('contain',"Robot")
  })
  
  it('Check if Create new company button is clickable',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-user').click() 
  })

  it('Check if Create new Robot button is clickable',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-robot').click() 
  })

  it('Verify the title contents of Create new User page',()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('#createCompanyUserModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain',"Create New Company User")
    cy.get('[for="emailInput"]').should('contain',"Email:")
    cy.get('.modal-body > div > label').should('contain',"Employee Role :")
    cy.get('.modal-footer > .btn-default').should('contain',"Cancel")
    cy.get('.modal-footer > .btn-success').should('contain',"Create")
    
  })

  it('Create New Company User:Check if you can enter content in the email section',()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('.modal-body > .form-control').type("abc@gmail.com")
    
  })
  

  it('Email Button:Check if user is able to exit the page without entering email id',()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn.btn-primary.btn-new-company-user').click()
    cy.get('.modal-footer > .btn-success').click()
    cy.get('#emailInput-error').should('contain',"You must input an email.")
  })
  
  it('New Robot:Verify New robot page titles', ()=>{
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-robot').click()
    cy.get('#createCompanyRobotModal > .modal-dialog > .modal-content > .modal-header').contains("Create New Company User")
    cy.get('[for="idInput"]').should('contain',"ID:")
    cy.get('[for="passwordInput"]').should('contain',"Password:")
  })
    
  
  // It should Pass
  it('Robot Button: Create New Company User: close icon',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
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
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-robot').click()
    cy.get('.modal-footer > .btn-success').click()
    cy.get('#idInput-error').should('contain',"You must input an ID")
  })
  
  it('Robot : Click on save button without entering any password',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
    cy.get('.btn-new-company-robot').click()
    cy.get('.modal-footer > .btn-success').click()
    cy.get('#passwordInput-error').should('contain',"You must input a password.")
  })
  
  
  
  it('Custom User Role cancel icon',function(){
  cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Custom User').should('have.value','customUser')
  
  // To close permission pop up
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()
  
  })
  
  it('Custom User Role cancel button',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To select other user 
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Custom User').should('have.value','customUser')
  
  // To close permission pop up
  cy.get('.modal-footer > .btn-default').click()
  
  })
  
  it('Custom User with Save Btn ',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To click save btn
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Custom User').should('have.value','customUser')
  cy.get('#permissionModalSaveBtn').click()
  
  })
  
  
  
  it('Base User Role close icon',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To select other user 
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Base User').should('have.value','baseUser')
  
  // To close permission pop up
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()
  
  })
  
  it('Base User Role cancel button',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
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
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To select other user 
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Robot').should('have.value','robot')
  
  // To close permission pop up
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()
  
  })
  
  
  it('RobotRole Cancel button',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To select other user 
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Robot').should('have.value','robot')
  
  // To close permission pop up
  cy.get('.modal-footer > .btn-default').click()
  })
  
  
  it('RobotRole Save Btn ',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To click save btn
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Robot').should('have.value','robot')
  cy.get('#permissionModalSaveBtn').click()
  
  })
  
  
  it('Admin User Role cancel icon',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Admin User').should('have.value','adminUser')
  
  // To close permission pop up
  cy.get('#permissionsModal > .modal-dialog > .modal-content > .modal-header > .close').click()
  
  })
  
  
  it('Admin User Role cancel button',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  // To select other user 
  
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Admin User').should('have.value','adminUser')
  
  // To close permission pop up
  cy.get('#permissionModalSaveBtn').click()
  
  })
  
  it('Admin User Save Btn ',function(){
    cy.get('#sidebarv2-item-coadmin > .d-flex > .menu-collapsed').click()
  cy.url().should('include','/coadmin')
  // To click save btn
  cy.get(':nth-child(4) > :nth-child(2) > .btn-permissions > .fa').click()
  cy.get('select').select('Admin User').should('have.value','adminUser')
  cy.get('#permissionModalSaveBtn').click()
  
  })


  /****************Data Page on Client Company */

  it('Click on Data from leftmenu as a client user', function()
  { cy.contains('Data').click()  
  })

  it('Verify page url', ()=>{
    cy.contains('Data').click()  
    cy.url().should('contain',"https://www.terrasentia.co/Data")
    })
    
  // It should Pass    
  it('Verify Pageheader', function()
  { cy.contains('Data').click()  
    cy.get('.page-header').contains('Data')
    
  })

  it('Verify the Data details', ()=>{
    cy.contains('Data').click()  
    cy.get('[colspan="4"] > ul > [style="width:100%;"]').should('contain',"Collected Date");
    cy.get('[colspan="5"] > ul > [style="width:100%;"]').should('contain',"Field Name");
    cy.get('[data-sort="start_col"]').should('contain',"Column");
    cy.get('[data-sort="start_range"]').should('contain',"Ranges");
    cy.get('[data-sort="robot_name"] > ul > [style="width:100%;"]').should('contain',"Robot Name");
    cy.get('thead > :nth-child(6)').should('contain',"Size");
    cy.get('thead > :nth-child(7)').should('contain',"Metadata");
    cy.get('thead > :nth-child(8)').should('contain',"Analyze");
  
  })
  

it('Select All from crops drop-down list', ()=>{
  cy.contains('Data').click()  
  cy.get('.crop-query.btn').get('select').select('All').should('have.value','All')  
})


//To search data that is available
it('To search for an available field record',function()
{cy.contains('Data').click()  
cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('ManualDrive')
cy.get('[colspan="5"] > .set-extra-query').type('{enter}')
})


it('Verify if the search record is displayed on the screen',function()
{cy.contains('Data').click()  
cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('ManualDrive')
cy.get('[colspan="5"] > .set-extra-query').type('{enter}')

cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > [colspan="5"] > .atooltip > ul > li')
.should('contain','ManualDrive')

})


//To verify if text entered in Search tab is not available: It should Fail
it('Verify if an error message is displayed when user tries to search for a crop record that is not available',function()
{cy.contains('Data').click()  
cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').click()
cy.get('[colspan="5"] > .set-extra-query').type('aaaaa')
cy.get('[colspan="5"] > .set-extra-query').type('{enter}')
cy.get('#field-cards-container > p').should('contain','Record not available') // No pop-up mesage is shown this case needs to fail
})

it('To check if the collection data is arranged in ascending and descending order after clicking on the arrow', ()=>
{
  cy.contains('Data').click()  
  cy.get('[colspan="4"] > ul > [style="width:100%;"] > .fa').click()
  cy.get('[colspan="4"] > ul > [style="width:100%;"] > .fa').click()
})

it('To check if the field name is arranged in ascending and descending order after clicking on the arrow', ()=>
{
  cy.contains('Data').click()  
  cy.get('[colspan="5"] > ul > [style="width:100%;"] > .fa').click()
  cy.get('[colspan="5"] > ul > [style="width:100%;"] > .fa').click()
})

it('To check if the column values are arranged in ascending and descending order after clicking on the arrow', ()=>
{
  cy.contains('Data').click()  
  cy.get('[data-sort="start_col"] > .fa').click()
  cy.get('[data-sort="start_col"] > .fa').click()
})

it('To check if the row values are arranged in ascending and descending order after clicking on the arrow', ()=>
{
  cy.contains('Data').click()  
  cy.get('[data-sort="start_range"] > .fa').click()
  cy.get('[data-sort="start_range"] > .fa').click()
})

it('To check if the robot data is arranged in ascending and descending order after clicking on the arrow', ()=>
{
  cy.contains('Data').click()  
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%;"] > .fa').click()
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%;"] > .fa').click()
})
    
// To  verify search robot tab
it('To check if an error message is displayed when the user tries to search for a robot record that is not available', function()
{
  cy.contains('Data').click()  
cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('2020TS59{enter}',)
cy.get('.bert-content > p').should('contain',"Robot record not available") //No message is displayed script needs to fail
})


it('To check if the search fuctionality works when user tries to search for a valid robot name', function()
{cy.contains('Data').click()  
cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}')
cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(5) > p').should('contain','2020TS058')
})


 // To verify  rightarrow
 it('verify rightrrow',function()
 {cy.contains('Data').click()  
  cy.get('.btn.btn-primary.rightSkip').click({multiple:true})
 }
 )
 


 // To verify  lefttarrow on 2nd page 
 it('verify leftrrow',function()
 {cy.contains('Data').click()  
 cy.get('.btn.btn-primary.rightSkip').click({multiple:true})
  cy.get('.btn.btn-primary.leftSkip').click({multiple:true})// It should pass testcase
 }
 )


 it('Verify table details are visible ',function()
 {cy.contains('Data').click()  
   cy.get('.crop-query.btn').get('select').select('All').should('have.value','All')
   cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"]').click({multiple:true})
 
  
 }) 

 it('Verify title for record details ',function()
{cy.contains('Data').click()  
  cy.get('.crop-query.btn').get('select').select('All').should('have.value','All')
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
 cy.get(':nth-child(1) > [colspan="24"]').click()
 cy.get('.row > :nth-child(1) > .small-title').should('contain','Left Camera')
 cy.get(':nth-child(2) > .atooltip > .small-title').should('contain','Front Camera')
 cy.get(':nth-child(3) > :nth-child(1) > .small-title').should('contain','Right Camera')
 cy.get(':nth-child(4) > .atooltip > .small-title').should('contain','LAI Camera')
 cy.get(':nth-child(5) > .atooltip > .small-title').should('contain','LiDAR')
 
}) 

// To  Download  collection zip file
it(' download collection zip file ',function()
{cy.contains('Data').click()  
cy.get('.table.analytics-main-table.analytics-main-available').click({multiple:true})
cy.get('#analytics-download-link > .fa').click()
cy.get('ul > #analytics-download-link > .fa').click()

}) 




// To verify left camera
it('verify left camera details ',function()
{ cy.contains('Data').click()  
cy.get(':nth-child(1) > [colspan="24"] > .table').click()
cy.get('.small-title').should('contain','Left Camera ')
cy.get('.row > .badge-cell > :nth-child(1) > .custom-available-badge').should('contain','Width')
cy.get('.row > .badge-cell > .atooltip > .custom-available-badge').should('contain','Count')
}
)


// To verify right camera
it('verify right camera details ',function()
{
  cy.contains('Data').click()  
  cy.get(':nth-child(1) > [colspan="24"] > .table').click()

cy.get('.small-title').should('contain','Right Camera')
cy.get(':nth-child(3) > .badge-cell > :nth-child(1) > .custom-available-badge').should('contain','Width')
cy.get(':nth-child(3) > .badge-cell > .atooltip > .custom-available-badge').should('contain','Count')
}
)

// To verify front camera
it('verify front camera details',function()
{cy.contains('Data').click()  
cy.get(':nth-child(1) > [colspan="24"] > .table').click()
cy.get('.small-title').should('contain','Front Camera')

}
)


// To verify Lidar
it('verify Lidar details ',function()
{
  cy.contains('Data').click()  
  cy.get(':nth-child(1) > [colspan="24"] > .table').click()
cy.get('.small-title').should('contain','LiDAR')
cy.get(':nth-child(5) > .badge-cell > :nth-child(1) > .custom-badge').should('contain','Height')
cy.get(':nth-child(2) > .custom-badge').should('contain','Plot Split')
cy.get(':nth-child(3) > .custom-badge').should('contain','3D Point Cloud')
}
)

// To verify LAi Camera
it('verify LAI Camera details',function()
{
  cy.contains('Data').click()  
  cy.get(':nth-child(1) > [colspan="24"]').click()
  cy.get(':nth-child(4) > .atooltip > .small-title').should('contain','LAI Camera')
cy.get(':nth-child(4) > .badge-cell > div > .custom-badge').should('contain','Leaf Area Index')

}
)

// To verify flag event
// To verify flag event
it('To check if user is able to enter data in the flags pop-up and save it',function()
{
  cy.contains('Data').click()  
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
    cy.get(':nth-child(1) > [colspan="24"] > .table').click()
 cy.get('#analytics-flag-link > .fa').click()
 cy.get('textarea').clear()
 cy.get('textarea').type('testing123') 
 cy.get('.modal-body > .btn-success').click()

}
)




//To select result from left menu: It should Pass
it('Click on Result from leftmenu', function()
{ 
  cy.contains('Results').click()
})

it('Verify Results page title:', ()=>{
  cy.contains('Results').click()
  cy.get('.results_page-header').should('contain',"Results")
})


it("Verify Results page url", ()=>{
  cy.contains('Results').click()
  cy.url().should('contain',"https://www.terrasentia.co/Results")
})


//Selection of year 2019
it(' year selection:2019',function()
{ cy.contains('Results').click()
cy.get('.results_page-selectdiv > .form-control').select('2019')
cy.get('.results_page-selectdiv > .form-control').should('contain','2019')
})

//To select 2021 from dropdown
it(' year selection:2021',function()
    {   cy.contains('Results').click()
    cy.get('.results_page-selectdiv > .form-control').select('2021')
    cy.get('.results_page-selectdiv > .form-control').should('contain','2021')
})

//To select 2022 from dropdown
it(' year selection:2022',function()
{     cy.contains('Results').click()
cy.get('.results_page-selectdiv > .form-control').select('2022')
cy.get('.results_page-selectdiv > .form-control').should('contain','2022')
})


it(' year selection:2020',function()
{ cy.contains('Results').click()
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('.results_page-selectdiv > .form-control').should('contain','2020')
})


//Selection of Synmon Result Card
it('Click on result page card: synmon', function()
{  cy.contains('Results').click({multiple:true})

cy.get('.results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('h2').contains('SynMon')

})

// View Details
it('View Crop details', function()
{  cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.get('[data-row_id="1590162021000_1_1"] > :nth-child(1)').click()

})

// To view details of stand count with Left Camera:It should Pass
it('Click Deatils from synmon:Stand count &Left Camera selection', function()
{  cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('h2').contains('SynMon')
cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('LEFT_CAM')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Left Camera')
    })



// To view details of stand count with Right Camera:It should Pass

it('Click Deatils from synmon:Stand count selection & Right Camera', function()
{  cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Right Camera')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Right Camera')
})

// To view details of stand count with Average:It should Pass

it('Click Deatils from synmon:Stand count selection & Average', function()
{  cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Average')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Average')
})

it('viewchart menu button: Download CSV for Field for all dates ',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.contains('Download CSV for Field for all dates').click() 

})


it('viewchart menu button :download CSV for field for this date',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.contains('Download CSV for Field for this date').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for all dates ',function()
{       cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('.highcharts-a11y-proxy-button').click()
  cy.contains('Download CSV with Suppressed for Field for all dates').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for this date ',function()
{       cy.contains('Results').click({multiple:true})

     
cy.get('.results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('.highcharts-a11y-proxy-button').click()
  cy.contains('Download CSV with Suppressed for Field for this date').click()
})

/*  **Throps** */

// To select Throps from result page card :It should Pass
it('Click on result page card: Thorps', function()
{  cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('h2').contains('Thorps')

})

// To verify title Thorps and check if the pop-up appears when we move mouse over it : it should pass
it('Verify data ',function()
{ cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.title('Thorps') 
  cy.get('.highcharts-data-labels > .highcharts-label > .highcharts-label-box')// Verify date
  cy.get('.highcharts-markers > .highcharts-point').trigger('mouseover')
})

// To verify  date and mousehover data is present or not : t should pass
it('Verify date and mousehover data ',function()
{ cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.title('Thorps') 
  cy.get('.highcharts-data-labels > .highcharts-label > .highcharts-label-box')// Verify date
  cy.get('.highcharts-markers > .highcharts-point').trigger('mouseover')// Mousehover action
})


it('view details ',function()
{       cy.contains('Results').click({multiple:true})   
cy.get('.results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('[data-row_id="1597918596000_209_1"] > :nth-child(2)').click()
        
    })

//To select camera drodown value
it('Select cameras from drop down',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.title('Thorps') 
  cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('FRONT_CAM')// Select frontcamera
  cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('AVERAGE')// select average
})



//To select result page drodown value
it('Select value from dropdown',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Plant Height')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Leaf Area Index')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stem Width')
})

//Select Cameras for Ear Height
it('Select camera for Ear Height', () =>
{
    cy.contains('Results').click()
    cy.get('.results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="EAR_HEIGHT"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="EAR_HEIGHT"] > .results_page-selectdiv > .form-control').select('Front Camera')
})

//Select Cameras for Leaf Area Index
it('Select camera for Leaf Area Index', () =>
{
    cy.contains('Results').click()
    cy.get('.results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="LAI"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="LAI"] > .results_page-selectdiv > .form-control').select('Top Camera')
})

//Select Cameras for Plant Height
it('Select camera for Plant Height', () =>
{
    cy.contains('Results').click()   
    cy.get('.results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Left Side')
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Right Side')
})

//Select Cameras for Stem Width
it('Select camera for Stem Width', () =>
{
    cy.contains('Results').click()
  
    cy.get('.results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="WIDTH"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="WIDTH"] > .results_page-selectdiv > .form-control').select('Right Camera')
})

//To select viewchart menu button 

it('viewchart menu button: Download CSV for Field for all dates ',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.get('.highcharts-menu-item')
cy.contains('Download CSV for Field for all dates').click()
})


it('viewchart menu button :download CSV for field for this date',function()
{cy.contains('Results').click({multiple:true})
cy.get('.results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.get('.highcharts-menu-item')
cy.contains('Download CSV for Field for this date').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for all dates ',function()
{       cy.contains('Results').click({multiple:true})

cy.get('.results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.get('.highcharts-menu-item')
    cy.contains('Download CSV with Suppressed for Field for all dates').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for this date ',function()
{       cy.contains('Results').click({multiple:true})
    
cy.get('.results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.get('.highcharts-menu-item')
    cy.contains('Download CSV with Suppressed for Field for this date').click()

})


/**** Logout */
it('Check if the user click on Logout',function(){

  cy.get('#sidebarv2-item-logout > .d-flex > .menu-collapsed').click()
})















 
})

