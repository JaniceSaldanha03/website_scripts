describe('Result Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
     
});

//Viewer Mode

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

//To verify No Record Message
it('To check if "no record message" is displayed when data is not available  ',function()
{cy.get('#sidebarv2-item-changescope').click()
    cy.wait(500)
    cy.get('select').select('1').should('have.value','1')
    cy.get('.btn.btn-primary.changeCompanyButton').click()
    cy.get('.bert-content > p').should('contain','Company scope updated')
   cy.contains('Results').click()
   cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2019')
  cy.get('#field-cards-container > p').should('contain','No records found ...')
  })

//To select valid company 
it('Changescope to EarthsenseIndia',function()
{cy.get('#sidebarv2-item-changescope').click()
cy.wait(500)
cy.get('select').select('EarthsenseIndia').should('have.value','EarthsenseIndia')
cy.get('.btn.btn-primary.changeCompanyButton').click()
// cy.get('.bert-content').contains('Company scope updated.')

})

//Selection of year 2019
it(' year selection:2019',function()
{ cy.contains('Results').click()
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2019')
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').should('contain','2019')
})

//To select 2021 from dropdown
it(' year selection:2021',function()
    {   cy.contains('Results').click()
    cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2021')
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').should('contain','2021')
})

//To select 2022 from dropdown
it(' year selection:2022',function()
{     cy.contains('Results').click()
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2022')
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').should('contain','2022')
})


it(' year selection:2020',function()
{ cy.contains('Results').click()
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').should('contain','2020')
})


  //Selection of Synmon Result Card
  it('Click on result page card: synmon', function()
  {  cy.contains('Results').click({multiple:true})
  cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('h2').contains('SynMon')
  
  })
  
  // View Details
  it('View Crop details', function()
  {  cy.contains('Results').click({multiple:true})
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
  cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
    cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
    cy.get('[data-row_id="1590162021000_1_1"] > :nth-child(1)').click()

  })

  // To view details of stand count with Left Camera:It should Pass
  it('Click Deatils from synmon:Stand count &Left Camera selection', function()
  {  cy.contains('Results').click({multiple:true})
  cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.get('h2').contains('SynMon')
  cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('LEFT_CAM')
  cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
  cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Left Camera')
      })



// To view details of stand count with Right Camera:It should Pass

it('Click Deatils from synmon:Stand count selection & Right Camera', function()
{  cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
 cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Right Camera')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Right Camera')
})

// To view details of stand count with Average:It should Pass

it('Click Deatils from synmon:Stand count selection & Average', function()
{  cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Average')
cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Stand Count')
cy.get('[data-sort_by="COUNT"] > .results_page-selectdiv > .form-control').select('Average')
})

it('viewchart menu button: Download CSV for Field for all dates ',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.contains('Download CSV for Field for all dates').click()
})


it('viewchart menu button :download CSV for field for this date',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.contains('Download CSV for Field for this date').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for all dates ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
      
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.contains('Download CSV with Suppressed for Field for all dates').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for this date ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
       
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.contains('Download CSV with Suppressed for Field for this date').click()
})

it('viewchart menu button :Download PNG image ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
        
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.contains('Download PNG image').click()
})



/*  **Throps** */

// To select Throps from result page card :It should Pass
it('Click on result page card: Thorps', function()
{  cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('h2').contains('Thorps')

})

// To verify title Thorps and check if the pop-up appears when we move mouse over it : it should pass
it('Verify data ',function()
{ cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.title('Thorps') 
  cy.get('.highcharts-data-labels > .highcharts-label > .highcharts-label-box')// Verify date
  cy.get('.highcharts-markers > .highcharts-point').trigger('mouseover')
})

// To verify  date and mousehover data is present or not : t should pass
it('Verify date and mousehover data ',function()
{ cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
  cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
  cy.title('Thorps') 
  cy.get('.highcharts-data-labels > .highcharts-label > .highcharts-label-box')// Verify date
  cy.get('.highcharts-markers > .highcharts-point').trigger('mouseover')// Mousehover action
})


it('view details ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
     
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('[data-row_id="1597918596000_209_1"] > :nth-child(2)').click()
        
    })

//To select camera drodown value
it('Select cameras from drop down',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.title('Thorps') 
  cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('FRONT_CAM')// Select frontcamera
  cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('AVERAGE')// select average
})



//To select result page drodown value
it('Select value from dropdown',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
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
    cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
   
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="EAR_HEIGHT"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="EAR_HEIGHT"] > .results_page-selectdiv > .form-control').select('Front Camera')
})

//Select Cameras for Leaf Area Index
it('Select camera for Leaf Area Index', () =>
{
    cy.contains('Results').click()
    cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
   
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="LAI"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="LAI"] > .results_page-selectdiv > .form-control').select('Top Camera')
})

//Select Cameras for Plant Height
it('Select camera for Plant Height', () =>
{
    cy.contains('Results').click()
    cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
    
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Left Side')
    cy.get('[data-sort_by="HEIGHT"] > .results_page-selectdiv > .form-control').select('Right Side')
})

//Select Cameras for Stem Width
it('Select camera for Stem Width', () =>
{
    cy.contains('Results').click()
    cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
  
    cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
    cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click()
    cy.get('[data-sort_by="WIDTH"] > .results_page-selectdiv > .form-control').select('Average')    
    cy.get('[data-sort_by="WIDTH"] > .results_page-selectdiv > .form-control').select('Right Camera')
})

//To select viewchart menu button 

it('viewchart menu button: Download CSV for Field for all dates ',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.get('.highcharts-menu-item')
cy.contains('Download CSV for Field for all dates').click()
})


it('viewchart menu button :download CSV for field for this date',function()
{cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')

cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.highcharts-a11y-proxy-button').click()
cy.get('.highcharts-menu-item')
cy.contains('Download CSV for Field for this date').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for all dates ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
  
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.get('.highcharts-menu-item')
    cy.contains('Download CSV with Suppressed for Field for all dates').click()
})

it('viewchart menu button :Download CSV with Suppressed  for Field for this date ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
       
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.get('.highcharts-menu-item')
    cy.contains('Download CSV with Suppressed for Field for this date').click()
})

it('viewchart menu button :Download PNG image ',function()
{       cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')
        
  cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
        cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
        cy.get('.highcharts-a11y-proxy-button').click()
    cy.get('.highcharts-menu-item')
    cy.contains('Download PNG image').click()
})

//**Editor Mode**

it('Changescope to EarthsenseIndia ',function()
{
  cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
cy.get('#login-password').type("Kalpit@18",{force:true})
   cy.get('#login-button').click({force:true})
   cy.wait(10000)
  cy.get('#sidebarv2-item-changescope').click()
cy.wait(500)
cy.get('select').select('EarthsenseIndia').should('have.value','EarthsenseIndia')
cy.get('.btn.btn-primary.changeCompanyButton').click()
})

it('Editor Mode:Check drop-down list in editor mode', ()=>
{
  cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[aria-label="1. 1597918596000_209_1, y: 0, value: 33.8."]').click({force: true})
         
        })

        it('Editor Mode:Click on Show from the drop-down list',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[aria-label="1. 1597918596000_209_1, y: 0, value: 33.8."]').click({force: true})
         cy.get('[data-action_type="show"]').click()

        } )

        it('Editor Mode:Click on Supress from the drop-down list',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[aria-label="1. 1597918596000_209_1, y: 0, value: 33.8."]').click({force: true})
         cy.get('[data-action_type="suppress"]').click()
        } ) 

        it('Editor Mode:Click on Hide from the drop-down list',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[aria-label="69. 1597919955000_223_2, y: 1, value: 41.6."]').click({force: true})
         cy.get('[data-action_type="hide"]').click()
        } ) 

        it('Editor Mode:Click on Add notes from the drop-down list',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[fill="rgb(149,205,138)"]').click({force: true})
         cy.get('[data-action_type="add-notes"]').click()
        } )     
        
        
        it('Editor Mode:Add text in the notes text-box',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[fill="rgb(149,205,138)"]').click({force: true})
         cy.get('[data-action_type="add-notes"]').click()
         cy.get('.results_page-plotgraph-notes-input-text').type('testscript').type('{enter}')
        } )  

        it('Editor Mode:Remove the added notes',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[fill="rgb(149,205,138)"]').click({force: true})
         cy.get('[data-action_type="add-notes"]').click()
         cy.get('.results_page-plotgraph-notes-input-text').type('testscript').type('{enter}')
         cy.get('[fill="rgb(149,205,138)"]').click({force: true})
         cy.get('[data-action_type="add-notes"]').click()
         cy.get('.results_page-plotgraph-notes-input-text').clear().type('{enter}')
        } )  
        
        it('Editor Mode:Click on Cancel from the drop-down list',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
    cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
    cy.get('#login-password').type("Kalpit@18",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Results').click({multiple:true})
       cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
         cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
         cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
         cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
         cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
         cy.get('[fill="rgb(149,205,138)"]').click({force: true})
         cy.get('[data-action_type="none"]').click()
        } ) 

        
        it('Editor Mode:Check preview edit text-box',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
          cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
          cy.get('#login-password').type("Kalpit@18",{force:true})
             cy.get('#login-button').click({force:true})
             cy.contains('Results').click({multiple:true})
             cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
               cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
               cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
               cy.get('[type="checkbox"]').wait(1000).check('preview', {force:true})

        })
      
        it('Editor Mode:UnCheck preview edit text-box',()=>
        {
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
          cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
          cy.get('#login-password').type("Kalpit@18",{force:true})
             cy.get('#login-button').click({force:true})
             cy.contains('Results').click({multiple:true})
             cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
               cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
               cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
               cy.get('[type="checkbox"]').wait(1000).uncheck('preview', {force:true})

        })

        it('Editor Mode:Check if save button is clickable', ()=>{
          cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
          cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
          cy.get('#login-password').type("Kalpit@18",{force:true})
             cy.get('#login-button').click({force:true})
             cy.contains('Results').click({multiple:true})
             cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
               cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
               cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
               cy.get('.results_page-editor-save-changes > .btn > span').click({force: true})
                cy.get('.bert-content > p')
        })

        
        
it(' Editor Mode:Check if commit button is clickable', function()
{cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
cy.get('#login-password').type("Kalpit@18",{force:true})
   cy.get('#login-button').click({force:true})
   cy.contains('Results').click({multiple:true})
  cy.contains('Results').click({multiple:true})
cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('EDITOR')
cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
cy.get('[data-field_id="SynMon"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
cy.get('.results_page-editor-commit-changes > .btn > span').click()
  cy.get('.bert-content > p')
})



it('Editor Mode:Make changes in the record and commit the changes',()=>
{
  cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
  cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
  cy.get('#login-password').type("Kalpit@18",{force:true})
     cy.get('#login-button').click({force:true})
     cy.contains('Results').click({multiple:true})
     cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
     cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
     cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
     cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
     cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
     cy.get('[aria-label="1. 1597918596000_209_1, y: 0, value: 33.8."]').click({force: true})
     cy.get('[data-action_type="suppress"]').click()
     cy.get('[fill="rgb(149,205,138)"]').click({force: true})
     cy.get('[data-action_type="add-notes"]').click()
 cy.get('.results_page-plotgraph-notes-input-text').type('testscript').type('{enter}')
 cy.get('.results_page-editor-commit-changes > .btn').click() 
  
})

 // Reviewer Mode

 it('Reviewer Mode:Check preview edit text-box',()=>
      {
           cy.contains('Results').click({multiple:true})
           cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
             cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
             cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
             cy.get('[type="checkbox"]').wait(1000).check('preview', {force:true})

      })
    
      it('Reviewer Mode:UnCheck preview edit text-box',()=>
      {
           cy.contains('Results').click({multiple:true})
           cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
             cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
             cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
             cy.get('[type="checkbox"]').wait(1000).uncheck('preview', {force:true})

      })

      it('Reviewer Mode:Check if save button is clickable', ()=>{
           cy.contains('Results').click({multiple:true})
           cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
             cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
             cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
             cy.get('.results_page-reviewer-save-changes > .btn').click({force: true})
              cy.get('.bert-content > p')
      })


     it('Reviewer Mode:Check if verify button is clickable', ()=>{
           cy.contains('Results').click({multiple:true})
           cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
             cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
             cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
             cy.get('.results_page-reviewer-validate-changes > .btn').click({force: true})
              cy.get('.bert-content > p')
      })



 it('Reviewer Mode: Once records are committed in editor mode, verify data in reviewer mode',()=>
 {
   cy.visit("https://www.terrasentia.co/"); // Performing this action since pooja has editor access and I have reviewer access
   cy.get("input#login-email.form-control").type("pooja@earthsense.co",{force:true});
   cy.get('#login-password').type("Kalpit@18",{force:true})
      cy.get('#login-button').click({force:true})
      cy.contains('Results').click({multiple:true})
      cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
      cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
      cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
      cy.get('[aria-label="1. 1597918596000_209_1, y: 0, value: 33.8."]').click({force: true})
      cy.get('[data-action_type="suppress"]').click()
      cy.get('[fill="rgb(149,205,138)"]').click({force: true})
      cy.get('[data-action_type="add-notes"]').click()
  cy.get('.results_page-plotgraph-notes-input-text').type('testscript').type('{enter}')
  cy.get('.results_page-editor-commit-changes > .btn').click() 
  cy.visit("https://www.terrasentia.co/");
  cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
  cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
     cy.get('#login-button').click({force:true})
 cy.contains('Results').click({multiple:true})
      cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Editor Mode')          
      cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
      cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
      cy.get('.results_page-reviewer-validate-changes > .btn').click()
      
 } ) 

 it('Check if hidden data is hidden in viewer mode', ()=>{ 
  cy.contains('Results').click({multiple:true})
  cy.get(':nth-child(2) > :nth-child(1) > .results_page-selectdiv > .form-control').select('Viewer Mode')          
      cy.get(':nth-child(3) > :nth-child(1) > .results_page-selectdiv > .form-control').select('2020')
      cy.get('[data-field_id="Thorps"] > .results_page-card-container-selection-icon-container > .fa').click({multiple:true})
      cy.get('[style="z-index:100; width:200px; float:right;"] > .form-control').select('Front Camera').should('contain','Front Camera')
      cy.get('[style="z-index:100; width:200px; float:right; margin-left:10px;"] > .form-control').select('Ear Height').should('contain','Ear Height')
      cy.get('[data-row_id="1597918824000_211_1"] > :nth-child(4)')
    })




























})


