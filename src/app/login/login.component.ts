import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  phone: string = '';
  numMesa: string = ''; // Adicionando o campo numMesa

  constructor(private router: Router) {}

  login() {
    if (this.name.trim() !== '' && this.phone.trim() !== '' && this.numMesa.trim() !== '') {
      // Lógica de autenticação

      // Passando os parâmetros na navegação para a rota '/cardapio'
      this.router.navigate(['/cardapio', {
        nome: this.name,
        telefone: this.phone,
        numMesa: this.numMesa
      }]);
    } else {
      // Exibe mensagem de erro
      alert('Por favor, preencha todos os campos.');
    }
  }
}
