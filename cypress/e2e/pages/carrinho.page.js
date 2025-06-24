class CarrinhoPage {
  visit() {
    cy.visit('/'); 
  }

 
  addCarrinho() {
    cy.get(':nth-child(1) > .card > .card-body > .btn').click()
  }

  MenuCarrinho(){
    cy.get(':nth-child(2) > .nav-link').click()
     cy.get('.cart-item').should('be.visible')
  }

  RemoveProduto(){
    cy.get('.cart-item > .btn').click()
  }

  CarrinhoVazio(){
    cy.get('#cart-list > .text-center > p').should('be.visible')
  }

  
    

  
}

export default CarrinhoPage;
