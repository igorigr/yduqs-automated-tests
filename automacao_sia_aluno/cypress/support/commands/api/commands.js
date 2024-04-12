import EnvHelper from '@helper/envHelper';
import { ENDPOINTS } from '@fixtures/endpoints';

Cypress.Commands.add('loginApi', (credential, password, user, url) => {
  cy.getTokenUser(
    credential,
    password,
    user
  ).then((token) => {
    cy.setCookie('eos.access_token', token);
  });

  if (url) {
    cy.visit(url);
    cy.allowCookies();
  }
});

Cypress.Commands.add('getTokenUser', (credential, password, user) => {
  cy.request({
    method: 'POST',
    url: `${EnvHelper.getValue('urlApi')}${ENDPOINTS.auth(user)}`,
    body: {
      login: {
        credencial: credential,
        senha: password
      }
    }
  }).then((response) => {
    cy.log(response);
    return cy.wrap(response.body.data.token, { log: false });
  });
});
