import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  itens: { nome: string; preco: number }[] = []; // Define o tipo explícito do array de itens
  precoTotal: number = 0; // Define o tipo explícito para o preço total

  constructor(private router: Router) {}

  adicionarItem(item: { nome: string; preco: number }) {
    this.itens.push(item);
    this.precoTotal += item.preco;
  }

  removerItem(nome: string, preco: number) {
    const index = this.itens.findIndex(item => item.nome.toLowerCase() === nome.toLowerCase() && item.preco === preco);
    if (index !== -1) {
      this.precoTotal -= this.itens[index].preco; // Subtrai o preço do item removido do preço total
      this.itens.splice(index, 1); // Remove o item da lista
    }
  }


  enviarPedido() {
    // Aqui você pode implementar a lógica para enviar os itens e preços para outra página
    // Por exemplo, você pode usar um serviço para armazenar temporariamente os itens e preços
    // e, em seguida, navegar para a página da cozinha
    // Vou mostrar um exemplo simples de como você pode navegar para a página da cozinha

    // Supondo que a rota para a página da cozinha seja '/cozinha'
    this.router.navigate(['/cozinha'], { state: { itens: this.itens, precoTotal: this.precoTotal } });
  }
}
