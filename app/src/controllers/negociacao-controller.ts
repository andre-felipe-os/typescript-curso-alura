import { domInjector } from "../decorators/dom-injector.js";
import { mostrarTempoDeExecucao } from "../decorators/mostrar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.verificaSeDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                "Somente negociações em dias úteis são aceitas");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
        this.limparFormulario();
    }

    public importaDados(): void {
        this.negociacoesService.obterNegociacoesDoDia()
            .then(negociacoesDoDia => {
                for (let negociacao of negociacoesDoDia) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
                this.mensagemView.update("Negociações importadas com sucesso");
            })
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private verificaSeDiaUtil(data: Date) {
        return data.getDay() != DiasDaSemana.DOMINGO
            && data.getDay() != DiasDaSemana.SABADO;
    }
    
}