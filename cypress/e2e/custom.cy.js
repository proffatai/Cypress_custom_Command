/// <reference types="cypress">



describe('Custom commands', () => {

  beforeEach('website', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.logsin('Admin','admin123')
  })
  
  it('Valid login', () => {
    
    cy.get('h1').should('contain', 'Dashboard')
  })

  afterEach('Logging out',()=>{
    cy.Logout()
  })
})