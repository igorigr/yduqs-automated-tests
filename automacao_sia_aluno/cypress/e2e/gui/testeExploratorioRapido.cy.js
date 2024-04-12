/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';




describe('Exploratory Test Scenario.', { tags: ['rapido', 'smoke', 'parceiros'] }, () => {
   
      it('Teste', () => {

        cy.visit(EnvHelper.getValue('urlPortal'));
    
      });

  
    describe.only('Como usuário Aluno', () => {

      it('Navegar pela plataforma como Aluno.', () => {
       
        cy.visit(EnvHelper.getValue('urlPortal'));

        cy.session(['201907344721', '1234as'], () => {

          cy.request({
            method: 'POST',
            url: `https://sia.estacio.br/sianet/Logon/SignIn`,
            body: {
              
              Logar: 'Entrar',
              Cnstring: 'Producao',
              Senha_Cripto: 'b013f2ec1f37c6e681e238fa63026da7',
              OpenEngenhariaSocial: 'False',
              PaginaDeRetorno: '',
              Usuario: '202201127295',
              Senha: 'Ra2008',
              'g-recaptcha-response': '03AFcWeA6zJ3o8jQ19y6piMO3h5NbtIeng2De6hSi9GNuWsGQ5ikvIDQ3NgQtz282I5Fl-TR1UD1IPJjKPhSPuZ38ZKGYn7iVWaL5PlMEP6TyROVzoi0eaN-tuNgM92cXYMIcTdKehV3EHk8-K1leQaopad1Wu0feIdbGoGsr_ubaF2AXK3XHzZS38-RBp-Sq2LEHUaN1skD8V-PesWrzbSpmW7980pkZ3BTVntibnJZpYNE1Z5arYfMkJYOa-4fNzACjP1MXYmWvVWU8I8paovHwQBFwF9UeFf6QQqI46A1oTtn6YLQr34YKQ0sNv-1vvN9S_W5I-Eahw3GE8-Z5cS3RKLE-KOmxSufJ_uaiMdvKuXJFzw-309BWiFdhKg_BZibYTvUJo_D5NvLvdOs0HSNPj9bRGy2MqI49-riHO0Y1gu6G6zd26lmZbbVuOE0Dbejt4zQabmvY9Nn27SZSin7daQAASTzN7CSeftwUnZvmGCWGrtVe3Snx2bqrWo_NoVbdi2JPDm8g1wqfaU2ScOYpDZGdr3xS6rK_gVldMyle37sZ760SMFkWb7cKqqDhyEqdOqlZ22iJaflvCAwgHSMClx5paR4evQYLXte1c-SXoI-8PRdJiR_knG9sBlLFeMugsZl0x0ED9crvd7P9oojJdxPgQ4BL3JB7beLqSzuFjjrdimH_r12A'
              
            }
          }).then((response) => {
            cy.log(response);

            cy.visit('https://sia.estacio.br/alu/default.asp');

            //return cy.wrap(response.body.data.token, { log: false });
          });
        });

        /*
        cy.visit(EnvHelper.getValue('urlPortal'));

        cy.get('input[id="Usuario"]').type(EnvHelper.getValue('users.aluno.principal.matricula'));
        cy.get('input[id="Senha"]').type(EnvHelper.getValue('users.aluno.principal.senha'));
        cy.get('input[id="btnEntrar"]').click();
      
     
    
        cy.visit(EnvHelper.getValue('urlPortal'));

        cy.get('input[id="Usuario"]').type(EnvHelper.getValue('users.aluno.producao.matricula'));
        cy.get('input[id="Senha"]').type(EnvHelper.getValue('users.aluno.producao.senha'));
       
     */
        
        
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
        


        cy.get('div[id="area_usuario"]').contains("Matrícula").should('be.visible');

        cy.step('Navegar para o menu: Acadêmico > Renovação de Matrícula');
        //cy.wait(3000);
        cy.contains('a','Acadêmico')
          .should('be.visible')
          .click();
        //cy.get('div[id="ALU-2"]')
        cy.get('div a').contains('Renovação Matrícula')
          .should('be.visible')
          .click();
        cy.get('div[id="content"]')
          .find('img')
          .should('have.attr', 'src','/sianet/Content/estacio/Images/Renovacao/BannerConviteGradeDesk1.png');

        cy.step('Navergar para Acadêmico > Pré-Matrícula');
        //cy.wait(3000);
        cy.get('div[id="ALU-85"]')
          .should('be.visible')
          .click();
        //Gerar Assertiva

        //Fecha o menu Academico
        cy.contains('a','Acadêmico')
        .should('be.visible')
        .click();

        cy.step('Navegar para o menu: Financeiro > Consulta Propostas de Negociação;')
        //cy.wait(3000);
        cy.get('div[id="ALU-02"]')
          .should('be.visible')
          .click();
        cy.get('div[id="ALU-55')
          .should('be.visible')
          .click();
        //Gerar Assertiva
        
        //Tratar o Alerta que aparece
        /*
        cy.step('Navegar para o menu: Financeiro > Débito Automático em Conta');
        cy.wait(3000);
        cy.get('div[id="ALU-80"]').click();
        */
    
        /*cy.on ('window:alert', (text) => {
            //expect(text).to.eq('alert text')
            done();                              // waiting for event, fails on timeout    
          })*/
        /*
          cy.on('window:confirm', (t) => {
            //assertions
            //expect(t).to.contains('You have unsaved changes, are you sure you want to leave?');
            return false;
          })*/
        //Gerar Assertiva

        cy.step('Financeiro > Informações Financeiras;');
        //cy.wait(3000);
        cy.get('div[id="ALU-60"]')
          .should('be.visible')
          .click();
         //Gerar Assertiva

        cy.step('Financeiro > Informações Financeiras > Vencimento;');
        //cy.wait(3000);
        cy.get('a[id="btnDtVencimento"]').click();
        //Fechar Modal
        cy.get('button[data-dismiss="modal"]')
          .should('be.visible')
          .click();
        //Gerar Assertiva

        cy.step('Financeiro > Informações Financeiras > Bolsas;');
        //cy.wait(3000);
        cy.get('a[id="btnBolsas"]')
          .should('be.visible')
          .click();
        cy.get('button[data-dismiss="modal"]')
          .should('be.visible')
          .click();
          //Gerar Assertiva

        cy.step('Financeiro > Informações Financeiras > Financiamentos;');
        //cy.wait(3000);
        cy.get('a[id="btnFinanciamentos"]')
          .should('be.visible')
          .click();
        cy.get('button[data-dismiss="modal"]')
          .should('be.visible')
          .click();
        //Gerar Assertiva
        

        cy.step('Financeiro > Informações Financeiras > Disciplinas Matriculadas;');
        //cy.wait(3000);
        cy.get('a[id="btnDisciplinasMatriculadas"]')
          .should('be.visible')
          .click();
        cy.get('button[data-dismiss="modal"]')
          .should('be.visible')
          .click();
        //Gerar Assertiva

        
        cy.step('Financeiro > Informações Financeiras > Download Boleto;');
       // cy.wait(3000);
        cy.get('a[id="btnFiltro"]')
          .should('be.visible')
          .click()
          .get('select[id="NumSeqPeriodoAcademico"]')
          .select(1, { force: true });
        //Gerar Assertiva
        
        cy.wait(3000);
        //cy.get('a[href*="/sianet/Aluno/InformacoesFinanceiras/Financeiro/BaixarBoleto?"]').eq(0).click();
        cy.get('a[href*="/sianet/Aluno/InformacoesFinanceiras/Financeiro/BaixarBoleto?"]').eq(0).should('be.visible');
        //Gerar Assertiva

        

         
        cy.step('Financeiro > Informações Financeiras > Pagar com PIX');
       // cy.wait(3000);
        cy.get('button[data-toggle="dropdown"]')
          .should('be.visible')
          .click();
        cy.contains('.dropdown-item', 'Pagamento')      
          .click();
        
        cy.get('button[id="btnPix"]')
          .should('be.visible');
        //incrementar a abertura do QR-CODE
        //fechar modal
        cy.get('button[data-dismiss="modal"]')
        .should('be.visible')
        .click();

        
        cy.step('Financeiro > Informações Financeiras > Pagar com cartão de crédito');
        // cy.wait(3000);
        cy.get('button[data-toggle="dropdown"]')
          .should('be.visible')
          .click();
        cy.contains('.dropdown-item', 'Pagamento')      
          .click();
      
         cy.get('a[href*="#tabCredito"]')
          .should('be.visible')
          .click();
         cy.get('h1').contains('Informações do Cartão')
           .should('be.visible');
         //fechar modal
         cy.get('button[data-dismiss="modal"]')
         .should('be.visible')
         .click();

         cy.step('Financeiro > Detalhe do Boleto');
         cy.get('button[data-toggle="dropdown"]')
          .should('be.visible')
          .click();
         cy.contains('.dropdown-item', 'Pagamento')      
          .click();
      
         cy.get('a[href*="#nav-detalhe-boleto"]')
          .should('be.visible')
          .click();
         cy.wait(25000);
         cy.get('div[id="exibicao-detalhe-boleto-pagar"]')
           .should('be.visible');

         cy.step('Imprimir boleto de pagamento');
         cy.get('a[id="btnImprimirBoleto"]')
           .should('be.visible')
           .click();
         //Implemetar a validação de Abertura do boleto 

         
         cy.step('Enviar Boleto por E-mail.');
         cy.get('a[id="btnEnviarBoletoEmail"]')
           .should('be.visible')
           .click();
         cy.get('h1[id="modal_listagem_notificacoes_label"]')
           .contains('Envio de Boleto por E-mail')
           .should('be.visible');
        
         //fechar modal
         cy.get('button[data-dismiss="modal"]')
         .should('be.visible')
         .click();
          //fechar modal
          cy.get('button[data-dismiss="modal"]')
          .should('be.visible')
          .click();

         
         cy.step('Financeiro > Simulador Negociação;')
         //cy.wait(3000);
         cy.get('div[id="ALU-81"]')
           .should('be.visible')
           .click();
         cy.get('a[href*="/sianet/Aluno/CobrancaAluno/PortalExterno/PortalAutoNegociacao"]')
           .should('be.visible');
          //tratar a parte de clicar e ser redirecionado para a outra pagina

          
         cy.step('Financeiro > Novo Par')
         // Verifica se o elemento está presente na tela antes de clicar nele
         cy.get('div[id="ALU-02"]').then(($ele) => {
          if ($ele.find('div[id="ALU-50-1"]').length > 0) {
              cy.get('div[id="ALU-50-1"]')
                .should('be.visible')
                .click();
              cy.get('div[id="wrapIframe"]')
                .should('be.visible')
            
            } else {
                cy.log('O Menu Financerio > Novo Par,  não está presente na tela');
            }
          });
          
           
         cy.step('Financeiro > Parcelamento')
           //cy.wait(3000);
         cy.contains('a', 'Parcelamento')      
           .should('be.visible')
           .click();
         /*cy.get('div[class="page"]')
           .find('a')
           .contains('Parcelamento')
           .should('be.visible');*/
          
           //Fecha menu Financeiro
         cy.get('div[id="ALU-02"]')
           .should('be.visible')
           .click();


         cy.step('Atendimento > Atendimento Agendado > Novo');
         cy.get('div[id="ALU-99"]')
           .should('be.visible')
           .click();
         cy.get('div[id="ALU-70"]')
           .should('be.visible')
           .click();
         cy.get('div[id="ALU-70-1"]')
           .should('be.visible')
           .click();
        /*
         cy.get('div[id="content"]')
           .find('a')
           .contains('Novo Atendimento Agendado')
           .should('be.visible');*/

         cy.step('Atendimento > Atendimento Agendado > Consultar');
         cy.get('div[id="ALU-70-2"]')
         .should('be.visible')
         .click();
         /*
         cy.get('div[id="content"]')
         .find('a')
         .contains('Consulta de Atendimento Agendado')
         .should('be.visible');*/
         //fecha menu Atendimento Agendado
         cy.get('div[id="ALU-70"]')
         .should('be.visible')
         .click();


         
         cy.step('Atendimento > Requerimento > Novo');
         cy.get('div[id="ALU-07"]')
         .should('be.visible')
         .click();
         cy.get('div[id="ALU-1-1"]')
         .should('be.visible')
         .click();
         /*
         cy.get('div[id="content"]')
         .find('a')
         .contains('Novo Requerimento')
         .should('be.visible');*/

         cy.step('Atendimento > Requerimento > Consulta');
         cy.get('div[id="ALU-1-2"]')
         .should('be.visible')
         .click();
         /*
         cy.get('div[id="content"]')
         .find('a')
         .contains('Consulta de Requerimentos')
         .should('be.visible');*/

           

           
           
 

         
         
        
         




        
    
        

  
      });

  
    });

});