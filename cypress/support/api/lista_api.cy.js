class UserApi {
  getUsers() {
   return cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/carrinho/123',
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

   getInvalidUsers() {
   return cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/carrinho/',
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }


  createPost(data) {
    return cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: 'http://localhost:3000/api/carrinho',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }
}

export const userApi = new UserApi();