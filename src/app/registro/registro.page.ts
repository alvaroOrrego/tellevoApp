import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre = "";
  fono = "";
  rut = "";

  constructor(private crud: CrudService, public alerta: AlertController) { }

  async agregar(txtRut:HTMLInputElement, txtNombres:HTMLInputElement, 
    txtApellidos:HTMLInputElement, txtOcupacion:HTMLInputElement, 
    txtEmail:HTMLInputElement, txtFono:HTMLInputElement) {

      const valor = await this.crud.buscar(txtRut.value);
      console.log(valor)
      if (valor == null){

        const datos =[{"rut": txtRut.value,
                    "nombres": txtNombres.value,
                    "apellidos": txtApellidos.value,
                    "ocupacion": txtOcupacion.value,
                    "email": txtEmail.value,
                    "fono": txtFono.value

                    }];

        await this.crud.agregarConKey(txtRut.value, datos);
        txtRut.value = "";
        txtNombres.value = "";
        txtApellidos.value = "";
        txtOcupacion.value = "";
        txtEmail.value = "";
        txtFono.value = "";

      }
      else{
        console.log("Ya existe este usuario")
      }

  }

  async alertaRegistro(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Genial!',
      message: '¡Registro Exitoso!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
    }

  ngOnInit() {
  }

}
