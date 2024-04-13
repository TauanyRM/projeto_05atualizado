import { Component, OnInit } from '@angular/core';
import { ComandaService } from '../comanda.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  constructor(public comandaService: ComandaService) { }

  ngOnInit(): void {
  }


  removerItem(index: number) {
    const itemRemovido = this.comandaService.itens[index];
    this.comandaService.removerItem(itemRemovido.nome, itemRemovido.preco);
  }
}
