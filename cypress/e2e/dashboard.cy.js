describe('Dashboard Page Tests', () => {
    beforeEach(() => {
      // فرض می‌کنیم که کاربر قبلاً وارد سیستم شده است
      cy.visit('http://127.0.0.1:5500/login/login.html'); // صفحه ورود
      cy.get('#login-email').type('test@example.com'); // ایمیل کاربر
      cy.get('#login-password').type('password123'); // پسورد کاربر
      cy.get('button[type="submit"]').click(); // کلیک روی دکمه ورود
    });
  
    it('should display the user name on the dashboard', () => {
      // انتظار داریم که نام کاربر در داشبورد نمایش داده شود
      cy.url().should('include', '/dashboard'); // اطمینان از اینکه به صفحه داشبورد هدایت شده‌ایم
      cy.get('#user-name').should('contain', 'Test'); // فرض می‌کنیم نام کاربر "Test" است
    });
  
    it('should display the current date and time', () => {
      // انتظار داریم که تاریخ و زمان فعلی نمایش داده شود
      cy.get('#current-time').should('exist'); // اطمینان از وجود عنصر زمان
    });
  
    it('should log out the user when the sign-out button is clicked', () => {
      // بررسی کنیم که کاربر با کلیک روی دکمه خروج، از سیستم خارج می‌شود
      cy.get('#sign-out-button').click(); // کلیک روی دکمه خروج
      cy.url().should('include', '/login'); // انتظار داریم که به صفحه ورود هدایت شویم
    });
  });
  