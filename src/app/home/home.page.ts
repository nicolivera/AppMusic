import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bandas =[ /*creacion de objeto*/
   {  
     nombre: 'laRenga',
     imagen: 'assets/image/laRenga.jpg',
     audio: 'assets/music/La Renga - Al Que He Sangrado.mp3'
   }, /*los objetos se separan con ,*/  

   {  
     nombre: 'callejeros',
     imagen: 'assets/image/callejeros.jpg',
     audio: 'assets/music/06) Morir - Callejeros.mp3'
    },

    {  
      nombre: 'canserbero',
      imagen: 'assets/image/canserbero.jpg',
      audio: 'assets/music/Canserbero - Es Épico.mp3'
     },

     {  
      nombre: 'a77aque',
      imagen: 'assets/image/a77aque.jpg',
      audio: 'assets/music/Setentista - Attaque 77.mp3'
     }

       
  ]

  reproducirSonido(banda){
    let sonido = new Audio();
    sonido.src = banda.audio;
    sonido.load();
    sonido.play();
    sonido.paused;
  }

}
