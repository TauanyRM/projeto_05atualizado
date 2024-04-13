import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardapioService } from '../cardapio.service';
import { ComandaService } from '../comanda.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  pratos: any[] = [];
  bebidas: any[] = [];
  drinks: any[] = [];
  sobremesas: any[] = [];
  nome: string = '';
  telefone: string = '';
  numMesa: string = '';

  constructor(private route: ActivatedRoute, private cardapioService: CardapioService, private comandaService: ComandaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.telefone = params['telefone'];
      this.numMesa = params['numMesa'];
    });

    this.pratos = this.cardapioService.getPratos();
    this.bebidas = this.cardapioService.getBebidas();
    this.drinks = this.cardapioService.getDrinks();
    this.sobremesas = this.cardapioService.getSobremesas();
  }

  adicionarItem(item: any): void {
    this.comandaService.adicionarItem({ nome: item.nome, preco: item.preco });
  }

  removerItem(nome: string, preco: number): void {
    this.comandaService.removerItem(nome, preco);
  }
}
