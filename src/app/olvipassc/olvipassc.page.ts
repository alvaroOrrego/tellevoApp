import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-olvipassc',
  templateUrl: './olvipassc.page.html',
  styleUrls: ['./olvipassc.page.scss'],
})
export class OlvipasscPage implements OnInit {

  rut = "";
  nombres = "";
  apellidos: any;
  ocupacion: any;
  email: any;
  fono = "";

  constructor(private animationCtrl: AnimationController, public alerta: AlertController,
    private router: Router, private crud: CrudService,) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelector('#imgChofer'))
      .duration(1500)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.3)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);

    animation.play();

  }

  async actualizarPass(txtRut: HTMLInputElement, txtNombres: HTMLInputElement,
    txtApellidos: HTMLInputElement, txtOcupacion: HTMLInputElement,
    txtEmail: HTMLInputElement, txtFono: HTMLInputElement) {

    this.router.navigateByUrl('/loginconductor');
    this,this.alertaCambioContra();

    const valor = await this.crud.buscar(txtRut.value);
    if (valor != null) {
      this.rut = valor[0].rut;
      this.nombres = valor[0].nombres;
      this.apellidos = valor[0].apellidos;
      this.ocupacion = valor[0].ocupacion;
      this.email = valor[0].email;
      this.fono = valor[0].fono;


      if (txtRut.value.trim().length != 0) {
        this.rut = txtRut.value;
      }

     /*  if (txtNombres.value.trim().length != 0) {
        this.nombres = txtNombres.value;
      }

      if (txtApellidos.value.trim().length != 0) {
        this.apellidos = txtApellidos.value;
      }

      if (txtOcupacion.value.trim().length != 0) {
        this.ocupacion = txtOcupacion.value;
      }

      if (txtEmail.value.trim().length != 0) {
        this.email = txtEmail.value;
      } */

      if (txtFono.value.trim().length != 0) {
        this.fono = txtFono.value;
      }

      const datos = [{
        "rut": this.rut,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "ocupacion": this.ocupacion,
        "email": this.email,
        "fono": this.fono

      }];
      await this.crud.agregarConKey(txtRut.value, datos);
      txtRut.value = "";
      txtNombres.value = "";
      txtApellidos.value = "";
      txtOcupacion.value = "";
      txtEmail.value = "";
      txtFono.value = "";

    }
    else {
      console.log("ta loco tio");

    }
  }



  async alertaCambioContra(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Contraseña Actualizada!',
      message: '¡Contraseña actualizada correctamente, por favor verifique su correo para confirmar el cambio!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
  }
}
