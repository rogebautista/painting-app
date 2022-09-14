import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignatueModalComponent} from '../components/signatue-modal/signatue-modal.component';

@Component({
  selector: 'app-format-seven-one',
  templateUrl: './format-seven-one.page.html',
  styleUrls: ['./format-seven-one.page.scss'],
})
export class FormatSevenOnePage implements OnInit {

  selectTabs= 'IOE';
  showPicker = false;
  selectMode = 'date';
  //blockTime = format(new Date(), 'T09:00:00.00Z');
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async mostrarModal(){

    const modal = await this.modalCtrl.create({
      component: SignatueModalComponent,
      cssClass: 'my-custom-class'
    });
    await modal.present();

  }

}
