import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((dadosNegociacoes: Array<NegociacaoDoDia>) => {
                return dadosNegociacoes.map(dadoNegociacao => {
                    return new Negociacao(
                        new Date(),
                        dadoNegociacao.vezes,
                        dadoNegociacao.montante)
                })
            });
    }

}