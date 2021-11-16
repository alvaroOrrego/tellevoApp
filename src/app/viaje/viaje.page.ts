import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, LoadingController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';

declare var google;

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  id;
  nombres;
  mapRef = null;
  constructor(private animationCtrl: AnimationController, private geolocation: Geolocation, 
    private loadingCtrl: LoadingController, public alerta: AlertController, public activateRoute: ActivatedRoute, private crudService: CrudService) { }

  /* Geolocalización inicio */
  ngOnInit() {
    this.loadMap();

    var nombres = null;
    var id = null;
    this.id= this.activateRoute.snapshot.paramMap.get('nombres')
  }

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(myLatLng.lat, myLatLng.lng);
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Aqui estas.'
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  /* Geolocalización final */


  /* animación inicio */
  ngAfterViewInit(){
    const animation = this.animationCtrl
  .create()
  .addElement(document.querySelector('#imgViaje'))
  .duration(1500)
  .iterations(1)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.3)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

  animation.play();

  }

  async alertaViaje(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Listo!',
      message: '¡Viaje programado!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
    }

  /* animación final */

}
