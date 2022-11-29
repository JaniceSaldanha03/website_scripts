const { it } = require("mocha");

describe('RobotInfo Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
       cy.get('#sidebarv2-item-robotinfo > .d-flex > .menu-collapsed').should('contain','Robot Info').click()
});

//To click on RobotInfo from left Menu

it('Click on RobotInfo from left menu', function()
{ 
cy.get('h1').should('contain', 'Robot Information')
})


it('Check the Robot Info page link',()=>
{
  cy.url().should('contain',"https://www.terrasentia.co/robotinfo") 
})

it('Check the Title',()=>
{
  cy.get('h1').should('contain',"Robot Information")
})


it('Check the options available on the Robot Info page',()=>
{
  cy.get('.existingRobot').should('contain',"Existing Robot")
  cy.get('.robotLog').should('contain',"View Robot Log")
  cy.get('.newRobot').should('contain',"New Robot")
})

//To click on New Robot Button

it('Click on New Robot', function()
{
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('h3').should('contain',"New Robot Details")// To get page title
  
})

it('Validate details required to create a new Robot', ()=>
{
  cy.get('.newRobot').click()
  cy.get('.robotTable > :nth-child(1) > :nth-child(1) > label').should('contain',"Robot Name")
  cy.get(':nth-child(2) > :nth-child(1) > label').should('contain',"Robot Type")
  cy.get('.robotTable > :nth-child(3) > :nth-child(1)').should('contain',"Left Camera")
  cy.get('.robotTable > :nth-child(4) > :nth-child(1)').should('contain',"Right Camera")
  cy.get('.robotTable > :nth-child(6) > :nth-child(1)').should('contain',"Back(Top) Camera")
  cy.get(':nth-child(7) > :nth-child(1) > label').should('contain',"Compute - Controller")
  cy.get(':nth-child(8) > :nth-child(1) > label').should('contain',"Compute - Companion")
  cy.get(':nth-child(9) > :nth-child(1) > label').should('contain',"Lidar")
  cy.get(':nth-child(10) > :nth-child(1) > label').should('contain',"Special internal components")
  cy.get(':nth-child(1) > p').should('contain',"Boards, Motors, Wheels etc")
  cy.get(':nth-child(11) > :nth-child(1) > label').should('contain',"Organization")
  cy.get(':nth-child(12) > :nth-child(1) > label').should('contain',"Comments")
  cy.get(':nth-child(13) > :nth-child(1) > label').should('contain',"New robot requirements verified by")
  cy.get('.addRobot').should('contain',"Save")
  cy.get('.canceladdRobot').should('contain',"Cancel")
})

// To add New Robot Details
it('Enter Valid New Robot Details', function()
{
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('h3')
  cy.get('#robotName').type('test911')
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('#robotType').select('Terrasentia Mast')
  cy.get('#lCamType').select('Realsense')
  cy.get('#rCamType').select('3mp')
cy.get('#fCamType').select('Realsense')
  cy.get('#bCamType').select('NA')
 cy.get('#controllerType').select('Raspberry Pi')
 cy.get('#companionType').select('NA')
 cy.get('#robotComments').type('Testit is')
 cy.get('#reqVerifiedBy').type('newTest')
  cy.get('#orgName').select('ARS_Columbia')

})

it('New Robot:Click on Save button without entering mandatory data.Check if user is unable to save blank records.np', function()
{
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('.addRobot').click()
  cy.get('.bert-alert').should('contain',"Kindly enter mandatory data")// Should show error as user has not enteresd mandatory data
})


// To verify Cancel Button
it('Click on Cancel NewRobot', function()
{
 
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('h3')
  cy.get('#robotName').type('Terraweb101006w1276rt')
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('#robotType').select('Terrasentia Standard')
  cy.get('#lCamType').select('na')
  cy.get('#rCamType').select('3mp')
cy.get('#fCamType').select('na')
  cy.get('#bCamType').select('na')
 cy.get('#controllerType').select('Raspberry Pi')
 cy.get('#companionType').select('na')
 cy.get('#robotComments').type('Testit is')
 cy.get('#reqVerifiedBy').type('newTest')
  cy.get('#orgName').select('ARS_Columbia')
  cy.get('.canceladdRobot').click()
})


it('Check if robot name does not accept only numeric values and special characters)', ()=>{
  cy.get('.newRobot').click()
  cy.get('#robotName').type("@@017501")
  cy.get('.bert-alert').should('contain',"Robot name must contain alphanumeric values")
})

it('Check if comment section does not accept only numeric values and special characters)', ()=>{
  cy.get('.newRobot').click()
  cy.get('#robotComments').type("@@013301")
  cy.get('.bert-alert').should('contain',"Comment section must contain alphanumeric values")
})


it('Check if "New robot requirements" section does not accept only numeric values and special characters)', ()=>{
  cy.get('.newRobot').click()
  cy.get('#reqVerifiedBy').type("@@013##01")
  cy.get('.bert-alert').should('contain',"New robot requirements verified by details must contain alphanumeric values")
})

//To verify uncheck checkboxes
it('To verify check-uncheck functionality for lidars', function()
{ 
cy.get('.btn.btn-primary.newRobot').click()
cy.get('#lidar1').check({force: true});
cy.get('#lidar2').check({force: true})

// To uncheck 1stcheckbox
cy.get('#lidar1').uncheck({force: true});
cy.get('#lidar2').uncheck({force:true})
// To select slider
cy.get('.slider').click()
//To deselect slider
cy.get('#spIntComp').uncheck({force: true})
})


it('Click on Save NewRobot after adding the required details', function()
{
 
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('h3')
  cy.get('#robotName').type('CypressScriptTest42')
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('#robotType').select('Terrasentia Standard')
  cy.get('#lCamType').select('rs')
  cy.get('#rCamType').select('3mp')
cy.get('#fCamType').select('rs')
  cy.get('#bCamType').select('NA')
 cy.get('#controllerType').select('Raspberry Pi')
 cy.get('#companionType').select('NA')
 cy.get('#robotComments').type('Testit is')
 cy.get('#reqVerifiedBy').type('newTest')
  cy.get('#orgName').select('1')
  cy.get('#lidar1').check({force: true});
  cy.get('#lidar2').check({force: true})
  cy.get('.addRobot').click()
  cy.get('.bert-alert').contains('New robot record added')// To verify success message
})

/*** Existing Robot***/
it('Check if Existing robot is clickable',()=>{

  cy.get('.existingRobot').contains('Existing Robot').click()
})


it('Verify Existing Robot Title',()=> {
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get('h3').should('contain',"Existing Robot Details")
})

it('Check if Exisiting robot does not contain blank records', ()=>
{
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get('select').select(" ").should('not.exist'); //Case must fail.As we are able to save blank records
})


it('Check if exisiting robot does not conatin invalid robot names', ()=>{
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get('select').select("@@001").should('not.exist');
})


it('Check Refresh button is clickable', ()=>{
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
})


it('Verify if user can edit robot data and verify if changes are reflected', ()=>
{
   cy.get('.existingRobot').contains('Existing Robot').click()
   cy.get('#robotName').select('testest1234')
   cy.get('.editRobotRecord').click()
   cy.get('#robotComments').clear()
   cy.get('#robotComments').type('testingCypressScript1')
   cy.get('.saveRobotRecord').click()
   cy.get('.bert-content > p').contains('Robot data updated')
   cy.get('.existingRobot').contains('Existing Robot').click()
   cy.get('#robotName').select('testest1234') 
   cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
   cy.get('.editRobotRecord').click()
   cy.get('#robotComments').should('have.value', 'testingCypressScript1') 
})

it('Cancel the edit details', ()=>{
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get('#robotName').select('testest1234')
  cy.get('.editRobotRecord').click()
  cy.get('#robotComments').clear()
  cy.get(':nth-child(13) > :nth-child(3) > .btn').click()

})

it('Check if robot is able to edit just one robot record at a time',()=>{
  cy.get('.existingRobot').contains('Existing Robot').click()
  cy.get('#robotName').select('testest1234')
  cy.get('.editRobotRecord').click()
  cy.get('#robotComments').clear()
  cy.get('#robotName').select('webtest').should('not.exist')  //The user can edit multiple robot at once.Hemce this case fails
  cy.get('#robotComments').clear()
  

})

it('Select Robot Name', function()
{
   cy.get('.existingRobot').contains('Existing Robot').click()
   cy.get('h3')// To verify heading
   cy.get('#robotName').select('WebsiteTest')
  
})

//To verify BuildDone  button click
it(' Existing Robot: Build done', function()
{
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
//cy.get('.buildDone').click()
cy.get('.buildDone').click()
 cy.get('.bert-content').contains('Build data updated')
 //click on Refresh Button
 cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
 
})


// To verify Hw Testing done
it(' Verifying  Existing Robot status as Hw Testing done', function()
{
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
cy.get('.hTestingDone').click()
cy.get('.bert-content > p').contains('Hardware test data updated')
//click on Refresh Button
cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
})


// To verify Sw Testing done
it('Verifying Existing Robot as Sw Testing done', function()
{
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
cy.get('.sTestingDone').click()
//click on Refresh Button
cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
cy.get('.bert-alert').contains('Software test data updated')
})


// To verify Ready for Delivery
it(' Verifying Existing Robot status as Ready for Delivery', function()
{
 
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
cy.get('.readyToDeliver').click()
cy.get('#deliveryAddress').type(" EarthSense India")
cy.get('.saveDeliveryAddress').click()
cy.get('.bert-alert').contains('Delivery details updated')
})


it(' Verifying Existing Robot: Add Maintennance Record', function()
{
  
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
cy.get('.btn.btn-primary.maintRecord').click()
cy.get('#maintInfo').type('random')
cy.get('.btn.btn-primary.saveMaintLog').click()
cy.get('.bert-content > p').should('contain',"Maintenance data updated")
cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
//click on Refresh Button
cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()
})

// Delete existing robot
it(' Delete Existing Robot', function()
{
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('CypressScriptTest42')
//cy.get('.bert-content > p')
 cy.get('.btn.btn-secondary.deleteRobotRecord').click()

 //click on Refresh Button
 cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click()

})


it(' Delete Existing Robot and refresh to check if record deleted ', function()
{
  cy.get('.btn.btn-primary.newRobot').click()
  cy.get('#robotName').type("test018")
  cy.get('.addRobot').click()
cy.get('.existingRobot').contains('Existing Robot').click()
cy.get('#robotName').select('test018')
cy.get('.btn-secondary').click()
cy.get(':nth-child(5) > :nth-child(2) > div > .btn').click() //refresh
 
})



//Robot Log

it(' Check robot log button is clickable', function()
{
 
   cy.get('.btn.btn-primary.robotLog').contains(' Robot Log').click()

})

it('Verify title of Robot log', ()=>{
  cy.get('.btn.btn-primary.robotLog').contains(' Robot Log').click()
  cy.get('h3').should('contain',"Robot Log")
  })


  it('Select robot name whose logs are to be viewed', ()=>{
    cy.get('.btn.btn-primary.robotLog').contains(' Robot Log').click()
    cy.get('select').select('testq').should('exist')
 
  })


it(' Validate Log details', function()
{
 
   cy.get('.btn.btn-primary.robotLog').contains(' Robot Log').click()
   cy.get('select').select('testq').should('exist')
   cy.get('.robotTable > :nth-child(1) > :nth-child(1)').should('contain','Date')
  cy.get('.robotTable > :nth-child(1) > :nth-child(2)').should('contain',"User ID")
  cy.get('.robotTable > :nth-child(1) > :nth-child(3)').should('contain',"Action")
  cy.get('.robotTable > :nth-child(1) > :nth-child(4)').should('contain',"Data")
})





})








