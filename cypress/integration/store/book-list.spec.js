describe("Lista de livros", () => {
  it("Cenário de listar livros com sucesso", () =>{
    cy.visit("/")
    cy.get("#book-card-1 h2#book-card-title-1").should("have.text", "Arquitetura Limpa")
  })
})