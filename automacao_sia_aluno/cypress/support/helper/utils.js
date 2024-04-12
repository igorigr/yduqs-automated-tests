import { EL_UTILS } from './elements';

class Utils {
  constRandomValue(object) {
    return object[Math.floor(Math.random() * object.length)];
  }

  selectRandomElement(element) {
    cy.get(element).then($el => {
      let index = $el.length;
      let selectInput = Math.ceil(Math.random() * (index - 1));
      cy.get(element).eq(selectInput).click({ force: true });
    });
  }

  selectReactElement(index, value, load = true) {
    cy.get(EL_UTILS.reactSelect).eq(index).click({ force: true }).type(value);
    if (load) {
      cy.get('div').contains('Loading...').should('not.exist');
      cy.wait(500);
    }
    cy.get(EL_UTILS.divReactSelectOption).contains(value).click({ force: true });
  }

  selectRandomReactElement(index, load = false) {
    cy.get(EL_UTILS.reactSelect).eq(index).click({ force: true })
      .invoke('attr', 'id')
      .then((id) => {
        if (load) {
          cy.get('div').contains('Loading...').should('not.exist');
          cy.wait(500);
        }
        let index = id.split('-')[2];
        cy.get(EL_UTILS.reactSelectOption(index)).then($el => {
          let length = $el.length;
          let selectElement = Math.ceil(Math.random() * (length - 1));
          cy.get(EL_UTILS.reactSelectOptionElement(index, selectElement)).click({ force: true });
        });
      });
  }
}

export default new Utils();
