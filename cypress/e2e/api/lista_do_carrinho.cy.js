import { userApi } from '../../support/api/lista_api.cy';

describe('API para a aplicação QA-Commerce, que gerencia produtos', () => {

  it('GET - Deve retornar a lista de usuarios com sucesso' , () => {
    userApi.getUsers().should((response) => {
      expect(response.status).to.eq(200);
    });
  });

   it('GET - Deve retornar erro quando não encontra usuário' , () => {
    userApi.getInvalidUsers().should((response) => {
      console.log()
      expect(response.status).to.eq(404);
    });
  });

  it('POST - Deve adicionar um produto ao carrinho com sucesso', () => {
    const newPost = {
       "userId": 0,
       "productId": 101,
       "quantity": 2
     
    };

    userApi.createPost(newPost).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Produto adicionado ao carrinho com sucesso.")
    });
  });

});