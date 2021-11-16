import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController} from '@ionic/angular';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-olvipassc',
  templateUrl: './olvipassc.page.html',
  styleUrls: ['./olvipassc.page.scss'],
})
export class OlvipasscPage implements OnInit {

  rut = "";
  fono = "";

  constructor(private animationCtrl: AnimationController, public alerta: AlertController,
    private router: Router, private crud: CrudService,) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
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

  async actualizarPass(txtRut:HTMLInputElement, txtFono:HTMLInputElement)
  {
    if(txtRut.value.trim().length === 0 || txtFono.value.trim().length === 0){

      console.log("entro");
  
      this.router.navigateByUrl('/loginconductor');

    }else{
      console.log("ola");

    const valor = await this.crud.buscar(txtRut.value);
    if (valor != null){
      this.rut = valor[0].txtRut;
      this.fono = valor[0].txtFono;


    if (txtRut.value.trim().length != 0)
    {
      this.rut  = txtRut.value;
    }

    if (txtFono.value.trim().length != 0)
    {
      this.fono = txtFono.value;
    }

    const datos = [{
                    "rut": txtRut.value,
                    "fono": txtFono.value

    }];
    await this.crud.agregarConKey(txtRut.value,datos);
        txtRut.value = "";
        txtFono.value = "";

        }
        else{ console.log("ta loco tio");

        }
      }
    }

}
