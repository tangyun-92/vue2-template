// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username = 'luoyang', password = 'abcd1234') => {
  cy.visit('/#/login')
  cy.contains('button', '登录')

  cy.get('input[placeholder="用户名"]')
    .clear()
    .type(username)
    .should('have.value', username)
  // 输入密码
  cy.get('input[placeholder="密码"]')
    .clear()
    .type(password)
    .should('have.value', password)
  // 提交表单
  cy.get('button.login-btn').click()

  cy.contains('辽宁省普通')
  cy.contains('罗阳')
})