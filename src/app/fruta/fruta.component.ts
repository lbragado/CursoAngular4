import {Component} from '@angular/core';

//Definimos nuestro selector para indicar los metadatos
@Component({
  selector: 'fruta',  //Indicamos el selector con el cual llamaremos al componente
  //------------------------------------------------------
  //Comentamos este código para ejemplificar que podríamos tener el template incrustado en esta sección
  // template: `
  //   <h2>{{nombre_componente}}</h2>
  //   <p>{{listado_frutas}}</p>
  // `
  //------------------------------------------------------
  templateUrl: './fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente = 'Componnte de fruta';
  public listado_frutas = 'Naranja, manzana, pera y sandía';
}
