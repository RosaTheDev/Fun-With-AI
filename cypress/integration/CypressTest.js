describe('Cypress testing for Fun With AI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.contains('Fun With AI')
    .get('form')
      .contains('Enter Prompt')
  })

  it('Should grab the form, and enter text inside the form', () => {
    cy.get('input[type="text"]').type('Luxury Brands')
    cy.get('[type="submit"]').click()
    cy.get('.index_cards__2pYdi').contains('Prompt: Luxury Brands')
  })

  it('Should grab the form, and enter another text in the form, it should then display the cards from newest to oldest', () => {
    cy.get('input[type="text"]').type('Luxury Brands')
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(1) > .index_cards__2pYdi')
    cy.contains('Prompt: Luxury Brands')

    cy.get('input[type="text"]').type('Malcolm X')
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(1) > .index_cards__2pYdi')
    cy.contains('Prompt: Malcolm X')
  })

})