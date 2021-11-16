import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  private vconductores = [
    {
      id: '1',
      nombre: 'Kike',
      apellido: ' Acuña',
      imgUrl: 'https://pbs.twimg.com/media/EXmhFzZUcAAilfL.jpg',
      destino: 'La Cisterna',
      capacidad: '0/4',
      valor: '$5.490'

    },
    {
      id:'2',
      nombre: 'Marcelo',
      apellido: ' Rios',
      imgUrl: 'https://www.lacuarta.com/wp-content/uploads/2018/12/Imagen-MARCELO-RIOS244.jpg',
      destino: 'La Florida',
      capacidad: '2/4',
      valor: '$3.490'
    },
    {
      id:'3',
      nombre:'Rene',
      apellido:' Puente',
      imgUrl:'https://www.tiktok.com/api/img/?itemId=6980051109234740485&location=0&aid=1988',
      destino: ' Puente Alto',
      capacidad: '1/4',
      valor: '$7.990'
    },
    {
      id:'4',
      nombre:'Bill',
      apellido:' Gates',
      imgUrl:'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/TW5CHJTUY5B3DOS35VMOLZUVF4.jpg',
      destino: 'El Bosque',
      capacidad: '3/4',
      valor: '$6.390'
    },
    {
      id:'5',
      nombre:'Ronaldo',
      apellido:' de Assis',
      imgUrl:'https://i.pinimg.com/originals/1f/43/05/1f43054ff30734f0d090de15c5baee12.jpg',
      destino: 'La Granja',
      capacidad: '1/4',
      valor: '$5.790'
    },
    {
      id:'6',
      nombre:'Nayareth',
      apellido:' Easy',
      imgUrl:'https://www.lacuarta.com/wp-content/uploads/2021/04/Naya-Facil-web-900x600.jpeg',
      destino: 'Lo Espejo',
      capacidad: '2/4',
      valor: '$6.790'
    },
    {
      id:'7',
      nombre:'Tobey',
      apellido:' Maguire',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg',
      destino:'San Ramón',
      capacidad: '0/4',
      valor: '$4.990'
    }
  ]
  constructor() { }
  getConductores(){
    return [...this.vconductores]
  }

  getConductor(conductorId: string){
    return{
      ...this.vconductores.find(conductores =>{
        return conductores.id === conductorId
      })
    }
  }
}
