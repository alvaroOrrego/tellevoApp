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
  rut = "";
  nombres = "";
  apellidos: any;
  ocupacion: any;
  email: any;
  fono = "";
 
  
  
  

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
  
  
  async actualizar(txtRut:HTMLInputElement, txtNombres:HTMLInputElement, 
    txtApellidos:HTMLInputElement, txtOcupacion:HTMLInputElement, 
    txtEmail:HTMLInputElement, txtFono:HTMLInputElement)
  {
    const valor = await this.crud.buscar(txtRut.value);
    this.rut = valor[0].txtRut;
    this.nombres = valor[0].txtNombres;
    this.apellidos = valor[0].txtApellidos;
    this.ocupacion = valor[0].txtOcupacion;
    this.email = valor[0].txtEmail;
    this.fono = valor[0].txtFono;


    if (txtRut.value.trim().length != 0)
    {
      this.rut  = txtRut.value;
    }

    if (txtNombres.value.trim().length != 0)
    {
      this.nombres = txtNombres.value;
    }

    if (txtApellidos.value.trim().length != 0)
    {
      this.apellidos = txtApellidos.value; 
    }

    if (txtOcupacion.value.trim().length != 0)
    {
      this.ocupacion = txtOcupacion.value; 
    }

    if (txtEmail.value.trim().length != 0)
    {
      this.email = txtEmail.value; 
    }

    if (txtFono.value.trim().length != 0)
    {
      this.fono = txtFono.value; 
    }
   
    const datos = [{
                    "rut": txtRut.value,
                    "nombres": txtNombres.value,
                    "apellidos": txtApellidos.value,
                    "ocupacion": txtOcupacion.value,
                    "email": txtEmail.value,
                    "fono": txtFono.value

    
    }];
    await this.crud.agregarConKey(txtRut.value,datos);
    txtRut.value = "";
        txtNombres.value = "";
        txtApellidos.value = "";
        txtOcupacion.value = "";
        txtEmail.value = "";
        txtFono.value = "";
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


  async alertaActualizar(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Genial!',
      message: '¡Datos Actualizados Correctamente!',
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
