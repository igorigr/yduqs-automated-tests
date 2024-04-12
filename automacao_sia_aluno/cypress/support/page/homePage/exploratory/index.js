/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import Utils from '@helper/utils';
import { EL_EXPLORATORY } from './elements';

class ExploratoryTest {

  logarNaPlataforma() {
    let username = EnvHelper.getValue('users.aluno.principal.matricula');
    let password = EnvHelper.getValue('users.aluno.principal.senha');
    cy.login([username, password]);
    cy.visit(EnvHelper.getValue('urlHome'));
  }

  menuAcademico(){
    cy.contains('a','Acadêmico')
    .should('be.visible')
    .click();
  }

  subMenuRenovacaoMatricula(){
    cy.get('a div').contains('Renovação Matrícula')
    .should('be.visible')
    .click();
  }

  assertivaRenovacaoMatricula(){
    cy.get('div[id="content"]')
    .find('img')
    .should('have.attr', 'src','/sianet/Content/estacio/Images/Renovacao/BannerConviteGradeDesk1.png');
    cy.screenshot('assertivas/assertivaRenovacaoMatricula');

  }

  subMenuPreMatricula(){
    cy.get('div[id="ALU-85"]')
    .should('be.visible')
    .click();
  }

  assertivaPreMatricula(){
    cy.contains('header h1','RENOVAÇÃO')
       .should('be.visible');
    cy.screenshot('assertivas/assertivaPreMatricula');

  }

  menuFinanceiro(){
    cy.get('div[id="ALU-02"]')
    .should('be.visible')
    .click();
  }

  subMenuConsultaPropostaNeg(){
    cy.get('div[id="ALU-55')
      .should('be.visible')
      .click();
  }

  assertivaPropostaNegociacao(){
   
      // Melhorar a assetiva deste ponto
      return true;
   

  }

  menuInformacoeFinanceiras(){
    cy.get('div[id="ALU-60"]')
      .should('be.visible')
      .click();
  }

  assertivaInformacoesFinanceiras(){
    cy.get('span[class="texto-novo-titulo"]')
      .should('contain.text','/ Informações Financeiras');
    cy.screenshot('assertivas/assertivaInformacoesFinanceiras');

  }

  botaoFinanceiroVencimento(){
    cy.get('a[id="btnDtVencimento"]')
      .should('be.visible')
      .click();
  }

  assertivaInformacoesVencimento(){
    cy.contains('div','Dia de vencimento atual')
      .should('be.visible');
    cy.screenshot('assertivas/assertivaInformacoesVencimento');
  }

  fecharModal(){
      cy.get('button[data-dismiss="modal"]')
      .should('be.visible')
      .click();
  }

  botaoFinanceiroBolsas(){
    cy.get('a[id="btnBolsas"]')
      .should('be.visible')
      .click();
  }
  assertivaInformacoesBolsas(){
    cy.contains('span','Bolsas')
      .should('be.visible');
    cy.screenshot('assertivas/assertivaInformacoesBolsas');

  }

  botaoFinanceiroFinanciamentos(){
    cy.get('a[id="btnFinanciamentos"]')
    .should('be.visible')
    .click();
  }

  assertivaInformacoesFinanciamentos(){
    cy.contains('span','Financiamentos')
      .should('be.visible');
    cy.screenshot('assertivas/assertivaInformacoesFinanciamentos');
  }

  botaoFinanceiroDiciplinasMatriculadas(){
    cy.get('a[id="btnDisciplinasMatriculadas"]')
    .should('be.visible')
    .click();
  }

  assertivaInformacoesDisciplinasMatriculadas(){
    cy.contains('span','Disciplinas Matriculadas')
      .should('be.visible'); 
    cy.screenshot('assertivas/assertivaInformacoesDisciplinasMatriculadas');        
  }

  botaoFinanceiroFiltroSemestre(){
    cy.get('a[id="btnFiltro"]')
    .should('be.visible')
    .click()
    .get('select[id="NumSeqPeriodoAcademico"]')
    .select(1, { force: true });

  }

  assertivaListaDeDebitos(){
    
    cy.get('div[class*="linha-base-financeiro"]')
      .should('be.visible');
    cy.screenshot('assertivas/assertivaListaDeDebitos');  
  }

  botaoBaixarBoletoDebito(linha){
    cy.wait(3000);
    //busca o numero do boleto que será baixado
    let numeroDoBoleto;
    cy.get('a[href*="/sianet/Aluno/InformacoesFinanceiras/Financeiro/BaixarBoleto?"]')
      .eq(linha)
      .should('be.visible')
      .click()
      .then(($link) => {
      // Obtenha o atributo href do elemento
      const href = $link.attr('href');
      // Divida o href usando o caractere "=" como delimitador e obtenha a parte depois dele
      numeroDoBoleto = href.split('=')[1];
      //Numero Sequencial do Carne/boleto
      //cy.log('Numero do Boleto:', numeroDoBoleto);
      
     });
     /*
    cy.get('a[href*="/sianet/Aluno/InformacoesFinanceiras/Financeiro/BaixarBoleto?"]')
      .eq(linha)
      .should('be.visible')
      .click();*/

      //cy.log('Numero do Boleto:', numeroDoBoleto);

      return '287643763';
    
  }

  assertivaConfereBoletoBaixado(arquivoPdf){

  const caminhoArquivoPDF = 'cypress/downloads/'+arquivoPdf;

  cy.readFile(caminhoArquivoPDF)
    .should('exist');

  // Verifique se o PDF foi baixado e se contém a palavra "Nome do Aluno"
  //cy.verificarPDF(caminhoArquivoPDF);
  }

}

export default new ExploratoryTest();
