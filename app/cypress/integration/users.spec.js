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

describe('Can input data into the form', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:1234')
    })

    it('can enter data into the name input field and submit button still disabled', () => {
        cy.get('#nameInput').type('Ann').should('have.value', 'Ann')
        cy.contains('Submit').should('be.disabled')
    })

    it('can enter data into email input field and submit button disabled', () => {
        cy.get('#emailInput')
        .type('ann@ann.com')
        .should('have.value', 'ann@ann.com')

        cy.contains('Submit').should('be.disabled')
    })

    it('can enter data into the password field and submit button disabled', () => {
        cy.get('#passwordInput')
        .type('password')
        .should('have.value', 'password')

        cy.contains('Submit').should('be.disabled')
    })

    it('can enter data into the birthday field and submit button disabled', () => {
        cy.get('#dateInput')
        .type('1990-06-20')
        .should('have.value', '1990-06-20')

        cy.contains('Submit').should('be.disabled')
    })

    it('can select a role and the submit button is disabled', () => {
        cy.get('select')
        .select('Developer')
        .should('have.value', 'Developer')

        cy.contains('Submit').should('be.disabled')
    })

    it('can enter in a personal url and the submit button is disabled', () => {
        cy.get('#urlInput')
        .type('http://something.com')
        .should('have.value', 'http://something.com')

        cy.contains('Submit').should('be.disabled')
    })

    it('can pick a color and the submit button is disabled', () => {
        cy.get('input[type=color]')
        .invoke('val', '#D783FF')
        .trigger('change')

        cy.contains('Submit').should('be.disabled')
    })

    it('can check the terms of service checkbox and submit button is now enabled', () => {
        cy.get('#checkboxInput').check()

        cy.contains('Submit').should('enabled')
    })
})