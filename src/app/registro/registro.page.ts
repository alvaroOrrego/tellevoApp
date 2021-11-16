import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, RouterLink } from '@angular/router';



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


  lista = [];



  constructor(private crud: CrudService, public alerta: AlertController, private storage: Storage, private router: Router) { }

  async agregar(txtRut:HTMLInputElement, txtNombres:HTMLInputElement,
    txtApellidos:HTMLInputElement, txtOcupacion:HTMLInputElement,
    txtEmail:HTMLInputElement, txtFono:HTMLInputElement) {

      if(txtRut.value.trim().length === 0 || txtNombres.value.trim().length === 0 || txtApellidos.value.trim().length === 0
      || txtOcupacion.value.trim().length === 0 || txtEmail.value.trim().length === 0 || txtFono.value.trim().length === 0){

        console.log("entro");
        this.alertaRegistroNA();
        this.router.navigateByUrl('/registro');

      }else{
        console.log("ola");
        this.alertaRegistro();


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
  }


  async actualizar(txtRut:HTMLInputElement, txtNombres:HTMLInputElement, 
    txtApellidos:HTMLInputElement, txtOcupacion:HTMLInputElement, 
    txtEmail:HTMLInputElement, txtFono:HTMLInputElement)
  {
    if(txtRut.value.trim().length === 0 || txtNombres.value.trim().length === 0 || txtApellidos.value.trim().length === 0
    || txtOcupacion.value.trim().length === 0 || txtEmail.value.trim().length === 0 || txtFono.value.trim().length === 0){

      console.log("entro");
      this.alertaRegistroNA();
      this.router.navigateByUrl('/registro');

    }else{
      this.alertaActualizar();

    const valor = await this.crud.buscar(txtRut.value);
    if (valor != null){
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
        else{ console.log("ta loco tio");

        }
      }
    }


  async eliminar(txtRut:HTMLInputElement)
  {
    if(txtRut.value.trim().length === 0){

      console.log("entro");
      this.alertaRegistroNA();
      this.router.navigateByUrl('/registro');

    }else{
      this.alertaEliminar();
    }

    await this.crud.eliminar(txtRut.value);

  }


  async listar()
  {
    let largo = await this.storage.length();

     if (largo == 0)
     {
      console.log("No hay elementos ")
     }else
     {
      this.lista =  this.crud.listar();
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


  async alertaEliminar(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Usuario Eliminado!',
      message: '¡Usuario eliminado correctamente!',
      buttons: [
        {
          text:'OK',

            }
        ]
      });

      await alert.present();
  }

  async alertaRegistroNA(){
    const alert = await this.alerta.create({
      cssClass:'my-custom-class',
      header:'¡Ups!',
      message: '¡Error, reingrese los datos en los campos!',
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
