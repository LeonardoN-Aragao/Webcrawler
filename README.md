# Webcrawler - Projeto_Lett
  Projeto de Webcrawler simples desenvolvido JavaScript com nodeJS para coletar informações do site Magazine Luiza.
  
## Instruções
  - Para instalar bibliotecas utilizadas `npm install`.
  - Para testar o programa utilizar o comando `npm start`.
  - Utilizar Curl ou ferramentas como postman para realizar requisições.
  - Endpoints disponíveis`/scrap_product` & `status`.
  - :exclamation: Mudar a porta da aplicação caso necessário.
  
## Informações adicionais

### Rota status
    -Request:
      Método: GET
      Rota: /status
    -Response: 
      Status Code: 200
      Corpo: “OK”

### Rota scrap Product
    -Request:
      Método: POST
      Rota: /scrap_product
      Corpo: {“url”: “url_do_produto”}
    -Response:
      Status Code: 200
      Corpo: JSON
 
