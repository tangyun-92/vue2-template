// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  before(()=>{
    cy.visit('/#/login')
  })
  it('Visits the app root url', () => {
    cy.login('luoyang', 'abcd1234')  //调用 login 命令
  })
})