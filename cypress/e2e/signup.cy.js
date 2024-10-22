describe("Signup Page Tests", () => {
  it("should allow a user to sign up successfully", () => {
    cy.visit(
      "http://127.0.0.1:5500/signUp/signup.html"
    );
    cy.get("#email").type("test@example.com");
    cy.get("#firstname").type("Test");
    cy.get("#lastname").type("User");
    cy.get("#birthdate").type("1990-01-01");
    cy.get("#phone").type("09123456789");
    cy.get("#password").type("password123");
    cy.get("#password-confirm").type("password123");

    // کلیک روی دکمه ثبت‌نام
    cy.get('button[type="submit"]').click();

    // انتظار برای مشاهده پیام موفقیت یا هدایت به صفحه ورود
    cy.url().should("include", "/login");
  });
});
