import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationController, MenuController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController, private menuCtrl: MenuController, public alerta: AlertController) {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  ngAfterViewInit(){
    const animation = this.animationCtrl
  .create()
  .addElement(document.querySelector('#imgTaxi'))
  .duration(1500)
  .iterations(1)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.3)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

  animation.play();

  const animation2 = this.animationCtrl
  .create()
  .addElement(document.querySelector('#saludoHome'))
  .duration(1500)
  .iterations(1)
  .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
  .fromTo('opacity', '0.2', '1');


  animation2.play();

  }


}