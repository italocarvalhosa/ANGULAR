import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setimo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setimo-componente.component.html',
  styleUrl: './setimo-componente.component.css'
})
export class SetimoComponenteComponent {

 exibir:boolean = false;

 //função de ação para trocar imagens
 acao(){
  if(this.exibir === true)
  (this.exibir =false)
 else{
    this.exibir=true
  }

 }

}
