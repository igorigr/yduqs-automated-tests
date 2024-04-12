import './commands/api/commands';
import './commands/gui/commands';
import 'cypress-plugin-steps';
import 'cypress-plugin-xhr-toggle';
import 'cypress-mochawesome-reporter/register';
import '@cypress/puppeteer/support';


const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

Cypress.on('uncaught:exception', () => {
  return false;
});
