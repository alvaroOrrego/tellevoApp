import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service';
import {ConductoresService} from './conductores.service'

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})

export class ConductoresPage implements OnInit {
  private cond = []
  users=[]

  /* private chofer = [
    {
      id: '1)',
      nombre: 'Kike',
      apellido: 'Acuña',
      imgUrl: 'https://pbs.twimg.com/media/EXmhFzZUcAAilfL.jpg',
      destino: 'La Cisterna',
      capacidad: '0/4'

    },
    {
      id:'2)',
      nombre: 'Marcelo',
      apellido: 'Rios',
      imgUrl: 'https://www.lacuarta.com/wp-content/uploads/2018/12/Imagen-MARCELO-RIOS244.jpg',
      destino: 'La Florida',
      capacidad: '2/4'
    },
    {
      id:'3)',
      nombre:'Rene',
      apellido:'Puente',
      imgUrl:'https://www.tiktok.com/api/img/?itemId=6980051109234740485&location=0&aid=1988',
      destino: 'Puente Alto',
      capacidad: '1/4'
    },
    {
      id:'4)',
      nombre:'Bill',
      apellido:'Gates',
      imgUrl:'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/TW5CHJTUY5B3DOS35VMOLZUVF4.jpg',
      destino: 'El Bosque',
      capacidad: '4/4'
    },
    {
      id:'5)',
      nombre:'Ronaldo',
      apellido:'de Assis',
      imgUrl:'https://i.pinimg.com/originals/1f/43/05/1f43054ff30734f0d090de15c5baee12.jpg',
      destino: 'La Granja',
      capacidad: '1/4'
    },
    {
      id:'6)',
      nombre:'Nayareth',
      apellido:'Easy',
      imgUrl:'https://www.lacuarta.com/wp-content/uploads/2021/04/Naya-Facil-web-900x600.jpeg',
      destino: 'Lo Espejo',
      capacidad: '2/4'
    },
    {
      id:'7)',
      nombre:'Tobey',
      apellido:'Maguire',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg',
      destino:'San Ramón',
      capacidad: '0/4'
    }

  ] */

  constructor(public alerta: AlertController, private servicios : ConductoresService, private us: UsuarioService) { }

  async alertaConductores(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Genial!',
      message: '¡Conductor seleccionado!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
    }

  ngOnInit() {
    this.cond = this.servicios.getConductores();


    this.us.cargarDatos().subscribe(data=>{
      this.users = data

    })

  }


}

