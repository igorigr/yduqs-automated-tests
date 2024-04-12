import login from '@page/login';



Cypress.Commands.add('login', ([username, password]) => {
  cy.session([username, password], () => {

    login.loginUsuario(username, password);

  });
 
});

/*

const fs = require("fs");
const path = require('path')
const pdf = require('pdf-parse');

Cypress.Commands.add('readPdf', (caminhoArquivoPDF) => {

  return new Promise((resolve) => {
    const pdfPath = path.resolve(caminhoArquivoPDF)
    let dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function ({ text }) {

      resolve(text)

    });
  })

});
*/

Cypress.Commands.add('verificarPDF', (caminhoArquivoPDF) => {
  // Verifique se o arquivo PDF foi baixado
  cy.readFile(caminhoArquivoPDF).then((conteudoPDF) => {
    // Faça a análise do PDF para extrair o texto
    pdf(conteudoPDF).then((data) => {
      // Verifique se o texto do PDF contém a palavra "Boleto"
      //expect(data.text).to.include('Boleto');
      cy.log(conteudoPDF);
    });
  });
});


Cypress.Commands.add('getTempKeyValue', (key) => {
  cy.task('getTempKeyValue', key);
});

Cypress.Commands.add('setTempKeyValue', (object) => {
  cy.task('setTempKeyValue', object);
});

Cypress.Commands.add('allowCookies', () => {
  cy.step('Clicking on the allow cookies button.');
  cy.get('span').contains('cookies').parent().find('button').click({ force: true });
});
