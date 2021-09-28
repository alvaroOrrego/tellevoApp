import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-olvipassc',
  templateUrl: './olvipassc.page.html',
  styleUrls: ['./olvipassc.page.scss'],
})
export class OlvipasscPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

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

}
