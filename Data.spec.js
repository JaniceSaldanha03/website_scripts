describe('Data Testsuite',function()
{
  beforeEach(() => {
    cy.visit("https://www.terrasentia.co/");
    cy.get("input#login-email.form-control").type("janice@earthsense.co",{force:true});
    cy.get('#login-password').type("RupRuJ.cC123456",{force:true})
       cy.get('#login-button').click({force:true})
       cy.contains('Data').click()

});

it('Change scope to EarthSense India', function()
    { 
      cy.contains('Change Scope').click()
      cy.get('select[id="selectCompany"]').select('EarthsenseIndia').should('have.value','EarthsenseIndia')
    cy.get('.btn.btn-primary.changeCompanyButton').click()
    })

// It should Pass    
    it('Click on Data from leftmenu', function()
    { cy.contains('Data').click()  
    })

    it('Verify page url', ()=>{
      cy.url().should('contain',"https://www.terrasentia.co/Data")
      })
      
    // It should Pass    
    it('verify Pageheader', function()
    { 
      cy.get('.page-header').contains('Data')
      
    })

    it('Verify the Data details', ()=>{

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
    cy.get('.crop-query.btn').get('select').select('All').should('have.value','All')  
  })


//To search data that is available
it('Search functionality',function()
{
  cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('ManualDrive')
  cy.get('[colspan="5"] > .set-extra-query').type('{enter}')
})


it('Verify search functionality for available field data',function()
{
  cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('ManualDrive')
  cy.get('[colspan="5"] > .set-extra-query').type('{enter}')
  
cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > [colspan="5"] > .atooltip > ul > li')
.should('contain','ManualDrive')

})


//To verify if text entered in Search tab is not available: It should Fail
it('Verify No Record Message for Crops',function()
{
 cy.get('[colspan="5"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').click()
 cy.get('[colspan="5"] > .set-extra-query').type('Corn22')
 cy.get('[colspan="5"] > .set-extra-query').type('{enter}')
 cy.get('#field-cards-container > p').should('contain','Record not available') // No pop-up mesage is shown this case needs to fail
})

it('Verify Ascending and Descending order click button for Collected Data', ()=>
{
    
    cy.get('[colspan="4"] > ul > [style="width:100%;"] > .fa').click()
    cy.get('[colspan="4"] > ul > [style="width:100%;"] > .fa').click()
})

it('Verify Ascending and Descending order click button for Field Name', ()=>
{
   
    cy.get('[colspan="5"] > ul > [style="width:100%;"] > .fa').click()
    cy.get('[colspan="5"] > ul > [style="width:100%;"] > .fa').click()
})
  
it('Verify Ascending and Descending order click button for Column ', ()=>
{
    
    cy.get('[data-sort="start_col"] > .fa').click()
    cy.get('[data-sort="start_col"] > .fa').click()
})

it('Verify Ascending and Descending order click button for Rows', ()=>
{
   
    cy.get('[data-sort="start_range"] > .fa').click()
    cy.get('[data-sort="start_range"] > .fa').click()
})
it('Verify Ascending and Descending order click button for Robot Data', ()=>
{
    
    cy.get('[data-sort="robot_name"] > ul > [style="width:100%;"] > .fa').click()
    cy.get('[data-sort="robot_name"] > ul > [style="width:100%;"] > .fa').click()
})


it('Upload file', function()
{
 
  //const filepath ='C:\Users\pooja\OneDrive\Desktop\aws\t1.png'

  //cy.contains('Upload')
  //cy.get('[style="margin-right:25px; margin-top: 75px;"] > .btn').attachFile('C:\Users\pooja\OneDrive\Desktop\aws')
 

  cy.get('[style="margin-right:25px; margin-top: 75px;"] > .btn').click()
  //cy.get('.fa.fa-upload').click(),
   cy.get('.fa.fa-upload').attachFile('img12100012.json')

 //cy.get(".btn.btn-secondary.uploadButton").contains('t1.p')
}

)
//To verify drag and drop file
it('Drag and Drop', function()
{
 
cy.get('.fa.fa-upload').click()
//cy.get("#drop-zone").trigger('dragenter');
//cy.attachFile('test2.json','force:true');
cy.get('#drop-zone').attachFile('n1tttttabcd.json',{'subjectType':'drag-n-drop'})
})


// To verify  error for already uploaded file : It should fail due to same name of uploaded file
it('dragnddrop upload exisiting file', function()
{
  
cy.get('.fa.fa-upload').click()
cy.get('#drop-zone').attachFile('img12100012.json',{'subjectType':'drag-n-drop'}) //case needs to fail as file has already been uploaded
cy.get('.bert-content > p')

//cy.get('#drop-zone').attachFile('filepath=t1.png','encoding', 'utf-8')

 // cy.get('[data-cy="file-input"]')
  //.attachFile({ filePath: 'empty.txt', allowEmpty: true });
//cy.get('[data-cy="dropzone"]')
//.attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
//y.get('.fa.fa-upload').trigger('dragenter')
//cy.upload_File('C:\Users\pooja\OneDrive\Desktop\aws\t1.png')
//cy.upload_File('.drop','t1.png')
})

//To verify Upload file
it('Upload File', function()
{
cy.get('[style="margin-right:25px; margin-top: 75px;"] > .btn').click()
//cy.get('.fa.fa-upload').click(),
 cy.get('.fa.fa-upload').attachFile('t1011test1234.json')
    
  
});


// To  verify search robot tab
it('To check if "Robot record not available" pop-up is displayed when the user searches for a invalid record ', function()
{

cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query > .fa').type('2020TS59{enter}',)
cy.get('.bert-content > p').should('contain',"Robot record not available") //No message is displayed script needs to fail
})


it('To check if user is able to search a valid robot name', function()
{
cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}')
cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(5) > p').should('contain','2020TS058')
})


 // To verify  rightarrow
 it('verify rightrrow',function()
 {
  cy.get('.btn.btn-primary.rightSkip').click({multiple:true})
 }
 )
 

 
 
 // To verify  lefttarrow on 2nd page 
 it('verify leftrrow',function()
 {
 cy.get('.btn.btn-primary.rightSkip').click({multiple:true})
  cy.get('.btn.btn-primary.leftSkip').click({multiple:true})// It should pass testcase
 }
 )


 it('Verify table details are visible ',function()
 {
   cy.get('.crop-query.btn').get('select').select('All').should('have.value','All')
   cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"]').click({multiple:true})
 
  
 }) 

 it('Verify title for record details ',function()
{
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
{
cy.get('.table.analytics-main-table.analytics-main-available').click({multiple:true})
cy.get('#analytics-download-link > .fa').click()
cy.get('ul > #analytics-download-link > .fa').click()

}) 




// To verify left camera
it('verify left camera ',function()
{ 
cy.get(':nth-child(1) > [colspan="24"] > .table').click()
cy.get('.small-title').should('contain','Left Camera ')
cy.get('.row > .badge-cell > :nth-child(1) > .custom-available-badge').should('contain','Width')
cy.get('.row > .badge-cell > .atooltip > .custom-available-badge').should('contain','Count')
}
)


// To verify right camera
it('verify right camera ',function()
{
  
  cy.get(':nth-child(1) > [colspan="24"] > .table').click()

cy.get('.small-title').should('contain','Right Camera')
cy.get(':nth-child(3) > .badge-cell > :nth-child(1) > .custom-available-badge').should('contain','Width')
cy.get(':nth-child(3) > .badge-cell > .atooltip > .custom-available-badge').should('contain','Count')
}
)

// To verify front camera
it('verify front camera ',function()
{
cy.get(':nth-child(1) > [colspan="24"] > .table').click()

cy.get('.small-title').should('contain','Front Camera')

}
)


// To verify Lidar
it('verify Lidar ',function()
{
  
  cy.get(':nth-child(1) > [colspan="24"] > .table').click()
cy.get('.small-title').should('contain','LiDAR')
cy.get(':nth-child(5) > .badge-cell > :nth-child(1) > .custom-badge').should('contain','Height')
cy.get(':nth-child(2) > .custom-badge').should('contain','Plot Split')
cy.get(':nth-child(3) > .custom-badge').should('contain','3D Point Cloud')
}
)

// To verify LAi Camera
it('verify LAI Camera ',function()
{
  
  cy.get(':nth-child(1) > [colspan="24"]').click()
  cy.get(':nth-child(4) > .atooltip > .small-title').should('contain','LAI Camera')
cy.get(':nth-child(4) > .badge-cell > div > .custom-badge').should('contain','Leaf Area Index')

}
)

// To verify flag event
it('Enter data into flag and click on save',function()
{
    
    cy.get(':nth-child(1) > [colspan="24"] > .table').click()
 cy.get('#analytics-flag-link > .fa').click()
 cy.get('textarea').clear()
 cy.get('textarea').type('testing123') 
 cy.get('.modal-body > .btn-success').click()

}
)

//Remove flag using the curve arrow
it('To check if user can remove the flag using remove arrow', ()=>
{
    
    cy.get(':nth-child(1) > [colspan="24"] > .table').click()
    cy.get('.undo-flag > .fa').click()  
})

//Flag cancel btton functionality

it('Closing flag text box using cancel button', ()=>
{
    
    cy.get(':nth-child(1) > [colspan="24"] > .table').click()
 cy.get('#analytics-flag-link > .fa').click()
 cy.get('.modal-body > .btn-secondary').click()

})

it('Check if flag pop-up can be exited by clicking anywhere else on the screen',()=>{
  cy.get(':nth-child(1) > [colspan="24"] > .table').click()
  cy.get('#analytics-flag-link > .fa').click()
  cy.get('.modal.show').click() 

})


it('Verify if user can click on Metadata',function()
{
  //cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt').click()
  cy.get('#sidebarv2-item-analytics_tasks > .d-flex').click()
  cy.get(':nth-child(1) > [colspan="24"]').click()
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

}
)

//Metadata Cancel button

it('Verify if user can click on  Metadata cancel button', ()=>
{

cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > :nth-child(7) > .atooltip > #edit-infotxt').click()
cy.get('.btn-default').click()

})

//Metadata Save button

it('Verify if user can click on Metadata save button', ()=>
{

cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > :nth-child(7) > .atooltip > #edit-infotxt').click()
cy.get('#editMetaDataSaveBtn').click()

})

//MetaData X button
it('Verify if user can click X button in Metadata', ()=>
{

cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > :nth-child(7) > .atooltip > #edit-infotxt').click()
cy.get('.close > span').click()

})

it('Verify if user is able to exit Metadata page without clicking on Save, X or cancel button', ()=>{
  cy.get(':nth-child(1) > [style="padding:3px !important;"] > .analytics-main-table > :nth-child(1) > .table-row-title > :nth-child(7) > .atooltip > #edit-infotxt').click()
  cy.get('.modal.show').click()
})


//MetaData Saving without entering mandatory data
it('Verify if metadata cannot be saved by leaving mandatory data blank', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

cy.get('#valueField').clear()
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')


})

//Saving MetaData without entering mandatory data
it('Verify if metadata cannot be saved by leaving mandatory field blank', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

cy.get('#valueField').clear()
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')


})

//Saving MetaData by adding Alphanumeric values in range and column
it('Verify if user cannot save MetaData by adding Alphanumeric values in range and column', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

  cy.get('#valueColumn').clear()
  cy.get('#valueColumn').type('abc42r212')
  cy.get('#valueRangeStart').clear()
  cy.get('#valueRangeStart').type('1ac4421314')
  cy.get('#valueRangeStop').clear()
  cy.get('#valueRangeStop').type('abc54332123')
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')  // case needs to fail


})

it('Verify if user cannot save MetaData by adding special characters as range and column values', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

  cy.get('#valueColumn').clear()
  cy.get('#valueColumn').type('@@')
  cy.get('#valueRangeStart').clear()
  cy.get('#valueRangeStart').type('&&&')
  cy.get('#valueRangeStop').clear()
  cy.get('#valueRangeStop').type('#$%')
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')  // xase needs to fail


})

it('Verify if user cannot save MetaData by adding special characters as range and column values', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

  cy.get('#valueColumn').clear()
  cy.get('#valueColumn').type('@@')
  cy.get('#valueRangeStart').clear()
  cy.get('#valueRangeStart').type('&&&')
  cy.get('#valueRangeStop').clear()
  cy.get('#valueRangeStop').type('#$%')
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')  // xase needs to fail


})


it('Verify if metadata cannot be saved by saving field name with only numeric values', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

cy.get('#valueField').clear()
cy.get('#valueField').type(12345)
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')


})

it('Verify if metadata cannot be saved by saving field name with only special characters', ()=>
{
  cy.get('[data-sort="robot_name"] > ul > [style="width:100%; padding-top:5px;"] > .start-query').type('2020TS058{enter}') 
  cy.get(':nth-child(1) > [colspan="24"] > .table > tbody > .table-row > :nth-child(7) > .atooltip > #edit-infotxt > .fa').click()

cy.get('#valueField').clear()
cy.get('#valueField').type(12345)
cy.get('#editMetaDataSaveBtn').click()
cy.get('.bert-content > p').contains('Cannot save data')


})



})


