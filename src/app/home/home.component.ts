import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //atributos=variables
  nombre:string="Juan"
  edad:number=33

  numeros:any[]=[1,2,3,4,5,6,7,8,9,10]
  //personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama1.webp?alt=media&token=f257df94-685b-4334-a4fe-05e1ac58d9d9","https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/freezer1.webp?alt=media&token=7b87d57d-8a2f-4977-ae69-a7f3f1169e14"]

  personajes:Personaje[]=[
    {
      "nombre":"Benji",
      "edad":45,
      "foto":"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama1.webp?alt=media&token=f257df94-685b-4334-a4fe-05e1ac58d9d9"
    }
  ]

  constructor() { }

  

}
