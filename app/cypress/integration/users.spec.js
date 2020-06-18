/* eslint-disable no-undef */
describe('Navigates to the page and the form loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:1234')
        cy.url().should('include', 'localhost')
    })
})