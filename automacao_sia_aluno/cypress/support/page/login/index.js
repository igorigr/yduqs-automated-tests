/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import { EL_LOGIN } from './elements';


class Login {

  loginUsuario(username,password){
    cy.visit(EnvHelper.getValue('urlPortal'));

    // Disable CAPTCHA for the duration of the test
    /*
    cy.intercept('POST', '/your/captcha/endpoint', (req) => {
      req.reply({ captchaPassed: true });
    });*/

    cy.get(EL_LOGIN.inputMatricula).type(username);
    cy.get(EL_LOGIN.inputSenha).type(password);
    cy.get(EL_LOGIN.botaoLogin).click();

      //login.login(EnvHelper.getValue('users.aluno.producao.matricula'),EnvHelper.getValue('users.aluno.producao.senha'));
          
        /*
          //Selecionar o reCAPTCHA
            cy.get('iframe')
                .first()
                .its('0.contentDocument.body')
                .should('not.be.undefined')
                .and('not.be.empty')
                .then(cy.wrap)
                .find('#recaptcha-anchor')
                .should('be.visible')
                .click();
          
                cy.step('Escolhendo imagens manuais do Recaptcha');
                cy.wait(70000);
          */
            
              
      
          /*
          if(cy.get('div[class="erro-numero"]').contains('500')){
            login.login(EnvHelper.getValue('users.aluno.producao.matricula'),EnvHelper.getValue('users.aluno.producao.senha'));

          }*/

    cy.get(EL_LOGIN.divMatricula).contains("Matrícula").should('be.visible');
  }

}

export default new Login();
