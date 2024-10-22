describe('Login Page Tests', () => {
    it('should allow a user to log in successfully', () => {
    
      cy.visit('http://127.0.0.1:5500/login/login.html');  
 
      cy.get('#login-email').type('test@example.com'); 
      cy.get('#login-password').type('password123');   
  
     
      cy.get('button[type="submit"]').click();
  
      
      cy.url().should('include', '/dashboard'); 
    });
  
    it('should show an error message for invalid login', () => {
 
      cy.visit('http://127.0.0.1:5500/login/login.html');
  
     
      cy.get('#login-email').type('invalid@example.com');
      cy.get('#login-password').type('wrongpassword');     
  
    
      cy.get('button[type="submit"]').click();
  
      
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Login failed. Please check your email and password.');
      });
    });
  
    it('should redirect to sign up page when clicking on "Sign Up" link', () => {
     
      cy.visit('http://127.0.0.1:5500/login/login.html'); 
    
      cy.get('a[href="../signUp/signup.html"]').click();
  
      cy.url().should('include', '/signUp/signup.html');  
    });
  });
  