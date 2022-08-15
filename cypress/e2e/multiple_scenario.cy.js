describe('Custom commands', () => {
  
    beforeEach('website', ()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    
    })
    
    it('Valid login', () => {
      cy.logsin('Admin','admin123')
     
      cy.Logout()

      cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/index.php/auth/login') 
      // Basically, we are collecting or accessing the url of the tab we are on. Then we compared it to the expected homepage url
    })
  
    it('Invalid login', () => {
      cy.logsin('Admina','admin123')
      cy.get('#spanMessage').should('contain','Invalid credentials')
    })

  })