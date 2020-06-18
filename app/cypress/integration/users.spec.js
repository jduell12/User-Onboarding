/* eslint-disable no-undef */
describe('Navigates to the page and the form loads with submit button disabled', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:1234')
        cy.url().should('include', 'localhost')
    })

    it('loads the page correctly', () => {
        cy.contains('Users')
        cy.contains('Create')
        cy.get('[for=nameInput]').contains('Name:')
        cy.get('[for=emailInput]').contains('Email:')
        cy.get('[for=passwordInput]').contains('Password:')
        cy.get('[for=dateInput]').contains('Birthday:')
        cy.contains('Role')
        cy.get('[for=urlInput]').contains('url')
        cy.contains('color')
        cy.get('[for=checkboxInput]').contains('Terms of Service')
    })

    it('Input areas are empty and Submit button is disabled', () => {
        cy.get('#nameInput').should('be.empty')
        cy.get('#emailInput').should('be.empty')
        cy.get('#passwordInput').should('be.empty')
        cy.get('#dateInput').should('be.empty')
        cy.get('#urlInput').should('be.empty')
        cy.get('#checkboxInput').should('not.be.checked')
        cy.contains('Submit').should('be.disabled')
    })
})