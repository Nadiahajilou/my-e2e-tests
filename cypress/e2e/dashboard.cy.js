describe('Dashboard Page Tests', () => {
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:5500/login/login.html'); 
      cy.get('#login-email').type('test@example.com'); 
      cy.get('#login-password').type('password123');
      cy.get('button[type="submit"]').click(); 
    });
  
    it('should display the user name on the dashboard', () => {

      cy.url().should('include', '/dashboard'); 
      cy.get('#user-name').should('contain', 'Test'); 
    });
  
    it('should display the current date and time', () => {
     
      cy.get('#current-time').should('exist'); 
    });
  
    it('should log out the user when the sign-out button is clicked', () => {
    
      cy.get('#sign-out-button').click(); 
      cy.url().should('include', '/login'); 
    });
  });
  