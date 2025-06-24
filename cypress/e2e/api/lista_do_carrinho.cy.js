import { userApi } from '../../support/api/lista_api.cy';

describe('API para a aplicação QA-Commerce, que gerencia produtos', () => {

  it('GET - Deve retornar a lista de usuarios', () => {
    userApi.getUsers().should((response) => {
      expect(response.status).to.eq(200);
    
     
    });
  });

  it('POST - Deve criar um novo post', () => {
    const newPost = {
       "userId": 1,
       "productId": 101,
       "quantity": 2
     
    };

    userApi.createPost(newPost).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Produto adicionado ao carrinho com sucesso.")
    });
  });

});