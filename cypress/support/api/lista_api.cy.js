class UserApi {
  getUsers() {
    return cy.request('http://localhost:3000/api/carrinho/123');
  }


  createPost(data) {
    return cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/carrinho',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }
}

export const userApi = new UserApi();