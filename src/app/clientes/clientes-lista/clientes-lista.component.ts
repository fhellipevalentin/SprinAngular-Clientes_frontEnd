import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes!: Cliente[];
  clienteSelecionado! : Cliente;

  constructor(private service: ClientesService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(response => {
        this.clientes = response;
      });
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  } 
}
