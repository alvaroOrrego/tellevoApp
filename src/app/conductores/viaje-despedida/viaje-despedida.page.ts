import { Component, OnInit } from '@angular/core';
import {conductor} from '../conductor.model';
import {ActivatedRoute} from '@angular/router';
import {ConductoresService} from '../conductores.service';

@Component({
  selector: 'app-viaje-despedida',
  templateUrl: './viaje-despedida.page.html',
  styleUrls: ['./viaje-despedida.page.scss'],
})
export class ViajeDespedidaPage implements OnInit {
  conduct : conductor
  constructor(private rutas:ActivatedRoute, private servicio:ConductoresService) { }

  ngOnInit() {
    this.rutas.paramMap.subscribe(paraMap => {
      const idRecibida = paraMap.get('idConductor')
      this.conduct = this.servicio.getConductor(idRecibida);
      console.log(this.conduct)
    })
  }

}
