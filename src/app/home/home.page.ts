import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController, private menuCtrl: MenuController) {}

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
  
  }

}