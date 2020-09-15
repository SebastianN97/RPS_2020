
describe('User can play RPS', () => {
    it('user can play against the computer', () => {
        cy.visit('http://localhost:3001')
        cy.contains('Rock Paper Scissor')
        cy.get('#Play').click()
    })
})
