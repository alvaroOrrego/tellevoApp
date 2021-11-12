import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController,AlertController} from '@ionic/angular';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginconductor',
  templateUrl: './loginconductor.page.html',
  styleUrls: ['./loginconductor.page.scss'],
})
export class LoginconductorPage implements OnInit {

  constructor(private animationCtrl: AnimationController,
    private crud:CrudService,
    public alerta: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const animation = this.animationCtrl
  .create()
  .addElement(document.querySelector('#imgLoginConductor'))
  .duration(1500)
  .iterations(1)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.3)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

  animation.play();

  }

  async alertaLoginConductor(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Genial!',
      message: '¡Inicio de sesión exitoso!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
    }

    async alertaLoginNA(){
      const alert2 = await this.alerta.create({
        cssClass:'my-custom-class',
        header:'¡Ups!',
        message: '¡No existe ese usuario!',
        buttons: [
          {
            text:'OK',

              }
          ]

        });

        await alert2.present();

      }

      async alertaLoginIncorrecto(){
        const alert2 = await this.alerta.create({
          cssClass:'my-custom-class',
          header:'¡Ups!',
          message: '¡Datos incorrectos!',
          buttons: [
            {
              text:'OK',

                }
            ]

          });

          await alert2.present();

        }

    async conn(txtRut:HTMLInputElement, txtFono:HTMLInputElement){

      const valor = await this.crud.buscar(txtRut.value);
      if (valor !== null){
        if (valor[0].fono === txtFono.value){
          this.alertaLoginConductor();

          this.router.navigateByUrl("/home")

        }
        else{
          this.alertaLoginIncorrecto();
        }
      }
      else{
        console.log("No existe ese usuario")
        this.alertaLoginNA();
      }

    }



}
