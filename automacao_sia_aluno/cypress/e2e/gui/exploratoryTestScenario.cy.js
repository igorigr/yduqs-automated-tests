/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import exploratory from '@page/homePage/exploratory';
import login from '@page/login';


describe('Cenário de Teste Exploratório SIA Aluno.', { tags: ['regressao','exploratory', 'smoke'] }, () => {
   
  
    describe('Como um usuário aluno navego pelo SIA Aluno nas funcionalidades principais', () => {

      beforeEach(() => {
        exploratory.logarNaPlataforma();
        cy.step('Dado que eu estou logado no SIA Aluno na home page');
       
      });

      it('Caso de Teste: Renovação de Matrícula.', () => {
        
        cy.step('Quando eu clico no menu: Acadêmico');
        exploratory.menuAcademico();
        
        cy.step('E eu clico no sub-menu: Renovação Matrícula');
        exploratory.subMenuRenovacaoMatricula();

        cy.step('Então é aberto o conteúdo da página para renovação de matrícula');
        exploratory.assertivaRenovacaoMatricula();


       
      });

      it('Caso de Teste: Pré-Matrícula.', () => {

        cy.step('Quando eu clico no menu: Acadêmico');
        exploratory.menuAcademico();

        cy.step('E eu clico no sub-menu: Pré-Matrícula');
        exploratory.subMenuPreMatricula();

        cy.step('Então é aberto o conteúdo da página para Pré-Matrícula');
        exploratory.assertivaPreMatricula();

      });

      it('Caso de Teste: Consulta Propostas de Negociação.', () => {

        cy.step('Quando eu clico no menu: Financeiro');
        exploratory.menuFinanceiro();

        cy.step('E eu clico no sub-menu: Consulta Propostas de Negociação');
        exploratory.subMenuConsultaPropostaNeg();

        cy.step('Então é aberto o conteúdo da página para Consulta Propostas de Negociação');
        exploratory.assertivaPropostaNegociacao();

      });

      it('Caso de Teste: Informações Financeiras.', () => {

        cy.step('Quando eu clico no menu: Financeiro');
        exploratory.menuFinanceiro();
          
        cy.step('E eu clico no sub-meu: Informações Financeiras;');
        exploratory.menuInformacoeFinanceiras();

        cy.step('Então é aberto o conteúdo da página das informações financeiras');
        exploratory.assertivaInformacoesFinanceiras();
        
      });

      it('Caso de Teste: Informações Financeiras > Vencimento.', () => {

        cy.step('Quando eu clico no menu: Financeiro');
        exploratory.menuFinanceiro();
          
        cy.step('E eu clico no sub-meu: Informações Financeiras;');
        exploratory.menuInformacoeFinanceiras();
     
        cy.step('E eu clico no botão: Vencimento;');
        exploratory.botaoFinanceiroVencimento();

        cy.step('Então é aberto um modal com as informações de Vencimento');
        exploratory.assertivaInformacoesVencimento();

        cy.step('E fecho o modal');
        exploratory.fecharModal();
      });

      it('Caso de Teste: Informações Financeiras > Bolsas.', () => {

          cy.step('Quando eu clico no menu: Financeiro');
          exploratory.menuFinanceiro();
            
          cy.step('E eu clico no sub-meu: Informações Financeiras.');
          exploratory.menuInformacoeFinanceiras();
       
          cy.step('E eu clico no botão: Bolsas.');
          exploratory.botaoFinanceiroBolsas();
  
          cy.step('Então é aberto um modal com as informações de Bolsas');
          exploratory.assertivaInformacoesBolsas();
  
          cy.step('E fecho o modal');
          exploratory.fecharModal();
       
        });

      it('Caso de Teste: Informações Financeiras > Financiamentos.', () => {
        
        cy.step('Quando eu clico no menu: Financeiro');
        exploratory.menuFinanceiro();
            
        cy.step('E eu clico no sub-meu: Informações Financeiras.');
        exploratory.menuInformacoeFinanceiras();
       
        cy.step('E eu clico no botão: Financiamentos.');
        exploratory.botaoFinanceiroFinanciamentos();
      
        cy.step('Então é aberto um modal com as informações de Financiamentos');
        exploratory.assertivaInformacoesFinanciamentos();
  
        cy.step('E fecho o modal');
        exploratory.fecharModal();
       

        });

        it('Caso de Teste: Informações Financeiras > Disciplinas Matriculadas.', () => {

          cy.step('Quando eu clico no menu: Financeiro');
          exploratory.menuFinanceiro();
              
          cy.step('E eu clico no sub-meu: Informações Financeiras.');
          exploratory.menuInformacoeFinanceiras();
         
          cy.step('E eu clico no botão: Disciplinas Matriculadas.');
          exploratory.botaoFinanceiroDiciplinasMatriculadas();
        
          cy.step('Então é aberto um modal com as informações de Disciplinas Matriculadas');
          exploratory.assertivaInformacoesDisciplinasMatriculadas();
    
          cy.step('E fecho o modal');
          exploratory.fecharModal();
      
        
      });

      it('Caso de Teste: Informações Financeiras > Download Boleto.', () => {

        cy.step('Financeiro > Informações Financeiras > Download Boleto;');
        
        cy.step('Quando eu clico no menu: Financeiro');
        exploratory.menuFinanceiro();
            
        cy.step('E eu clico no sub-meu: Informações Financeiras.');
        exploratory.menuInformacoeFinanceiras();

        cy.step('E eu clico no botão de filtro de Semestre e escolho um semestre anterior ao atual.');
        exploratory.botaoFinanceiroFiltroSemestre();

        cy.step('Então é recarregada a lista de débitos');
        exploratory.assertivaListaDeDebitos();
       
        cy.step('E eu clico no boleto da segunda linha de débito e inicializo o seu dowload.');
        let numeroDoBoleto = exploratory.botaoBaixarBoletoDebito(0);
        numeroDoBoleto = 'BOLETO_'+numeroDoBoleto+'.pdf';

        //Melhorar esta Assertiva com a descricao do boleto
        cy.step('Então o boleto é baixado, eu abro o botelo e confirmo os dados do boleto.');
        exploratory.assertivaConfereBoletoBaixado(numeroDoBoleto);
      

        
      });

      it('Caso de Teste: Informações Financeiras > Pagar com PIX.', () => {
         
        cy.step('Dados que eu esteja logado na Plataforma');
        
        cy.step('Quando clico no menu Financeiro');
        cy.get('div[id="ALU-02"]')
          .should('be.visible')
          .click();
        cy.step('E clico no sub-menu Informações Financeiras');
        cy.get('div[id="ALU-60"]')
          .should('be.visible')
          .click();
        
        cy.step('E clico no menu de ação (tres pontos) na lista onde possui um venciemnto em atraso');
          // Verifica se o elemento está presente na tela antes de clicar nele
        cy.get('div[class*="linha-base-financeiro"]').then(($ele) => {
            if ($ele.find('button[data-toggle="dropdown"]').length > 0) {
                cy.get('button[data-toggle="dropdown"]')
                  .should('be.visible')
                  .click();
                cy.contains('.dropdown-item', 'Pagamento')      
                  .click();
                
                cy.step('E clico no botão "Pagar com PIX"');
                cy.get('button[id="btnPix"]')
                  .should('be.visible')
                  .click();

                cy.step('Então abre uma nova guia com o QR-Code de pagamento com com PIX');
                cy.wait(3000);
                cy
                .puppeteer('switchTabAndGetContentPix')
                .each(($value,index) => {
                    cy.log("index: "+index+ "valor: "+$value);

                    if(index===0){
                      expect($value).to.equal('Pagamento Pix');
                    }else{
                      if(index===1){
                        expect($value).to.contains('BR.GOV.BCB.PIX');
                      }else{
                        expect($value).to.contains('data:image/png;base64');
                      }
                    }
          
                });
               
                //fechar modal
                cy.get('button[data-dismiss="modal"]')
                  .should('be.visible')
                 .click();
            }else{
              cy.log('O menu de ação não está presente na lista de pagamentos!');
            }

        });

        
      });

      it('Caso de Teste: Informações Financeiras > Pagar com cartão de crédito.', () => {
        
        cy.step('Dados que eu esteja logado na Plataforma');
        
        cy.step('Quando eu clico no menu Financeiro');
        cy.get('div[id="ALU-02"]')
          .should('be.visible')
          .click();
        
        cy.step('E eu clico no sub-menu Informações Financeiras');
        cy.get('div[id="ALU-60"]')
          .should('be.visible')
          .click();
        
        cy.step('E eu clico no sub-menu Informações Financeiras');
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
        
        });

        it('Caso de Teste: Informações Financeiras > Detalhe do Boleto.', () => {

         cy.step('Financeiro > Detalhe do Boleto');
        
         cy.get('div[id="ALU-02"]')
           .should('be.visible')
           .click();
         cy.get('div[id="ALU-60"]')
           .should('be.visible')
           .click();
       

         cy.get('button[data-toggle="dropdown"]')
          .should('be.visible')
          .click();
         cy.contains('.dropdown-item', 'Pagamento')      
          .click();
      
         cy.get('a[href*="#nav-detalhe-boleto"]')
          .should('be.visible')
          .click();
         cy.wait(30000);
         cy.get('div[id="exibicao-detalhe-boleto-pagar"]')
           .should('be.visible');

         cy.step('Imprimir boleto de pagamento');
         cy.get('a[id="btnImprimirBoleto"]')
           .should('be.visible')
           .click();
         //Implemetar a validação de Abertura do boleto 

        });

        it('Caso de Teste: Informações Financeiras > Enviar Boleto por Email.', () => {

         cy.step('Enviar Boleto por E-mail.');
        
         cy.get('div[id="ALU-02"]')
           .should('be.visible')
           .click();
         cy.get('div[id="ALU-60"]')
           .should('be.visible')
           .click();

           cy.get('button[data-toggle="dropdown"]')
           .should('be.visible')
           .click();
          cy.contains('.dropdown-item', 'Pagamento')      
           .click();
       
          cy.get('a[href*="#nav-detalhe-boleto"]')
           .should('be.visible')
           .click();
          cy.wait(30000);
          cy.get('div[id="exibicao-detalhe-boleto-pagar"]')
            .should('be.visible');
 
        
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
        
        });

        it('Caso de Teste: Informações Financeiras > Simulador Negociação.', () => {
         
         cy.step('Financeiro > Simulador Negociação;');
        
         cy.get('div[id="ALU-02"]')
           .should('be.visible')
           .click();
         cy.get('div[id="ALU-60"]')
           .should('be.visible')
           .click();
         
    
         cy.get('div[id="ALU-81"]')
           .should('be.visible')
           .click();
         cy.get('a[href*="/sianet/Aluno/CobrancaAluno/PortalExterno/PortalAutoNegociacao"]')
           .should('be.visible');
          //tratar a parte de clicar e ser redirecionado para a outra pagina

        });

        it('Caso de Teste: Financeiro > Novo Par.', () => {

          cy.step('Financeiro > Novo Par');
        
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

          });

        it('Caso de Teste: Financeiro > Parcelamento.', () => {

         cy.step('Financeiro > Parcelamento');
        
         cy.get('div[id="ALU-02"]')
           .should('be.visible')
           .click();
   

         cy.get('div[id="ALU-750-2"]')
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

          });

         it('Caso de Teste: Atendimento > Atendimento Agendado > Novo.', () => {

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
        
        });

        it('Caso de Teste: Atendimento > Atendimento Agendado > Consultar.', () => {

         cy.step('Atendimento > Atendimento Agendado > Consultar');
         cy.visit(EnvHelper.getValue('urlHome'));
        

         cy.get('div[id="ALU-99"]')
          .should('be.visible')
          .click();
        cy.get('div[id="ALU-70"]')
          .should('be.visible')
          .click();

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

        });

        it('Caso de Teste: Atendimento > Requerimento > Novo.', () => {
         
         cy.step('Atendimento > Requerimento > Novo');
        
         cy.get('div[id="ALU-99"]')
          .should('be.visible')
          .click();

         cy.get('div[id="ALU-07"]')
         .should('be.visible')
         .click();
         cy.get('div[id="ALU-1-1"]')
         .should('be.visible')
         .click();
         

        });

        it('Caso de Teste: Atendimento > Requerimento > Consulta.', () => {

         cy.step('Atendimento > Requerimento > Consulta');

         cy.get('div[id="ALU-99"]')
          .should('be.visible')
          .click();

         cy.get('div[id="ALU-07"]')
         .should('be.visible')
         .click();

         cy.get('div[id="ALU-1-2"]')
         .should('be.visible')
         .click();
      
      });

  
    });

});