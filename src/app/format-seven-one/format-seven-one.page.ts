import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignatueModalComponent} from '../components/signatue-modal/signatue-modal.component';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
//import {Plugins} from '@capacitor/core';
//const { Camera, Filesystem } = Plugins;
import {Directory, Filesystem} from '@capacitor/filesystem';


/*import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
*/

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-format-seven-one',
  templateUrl: './format-seven-one.page.html',
  styleUrls: ['./format-seven-one.page.scss'],
})
export class FormatSevenOnePage implements OnInit {

  selectTabs= 'IOE';
  showPicker = false;
  dateValue = 'value';
  selectMode = 'date';
  //blockTime = format(new Date(), 'T09:00:00.00Z');
  pdfObj = null;
  constructor(
    private modalCtrl: ModalController,
    private fileOpener: FileOpener,
    private platform: Platform) { }

  ngOnInit() {
  }
  async mostrarModal(){

    const modal = await this.modalCtrl.create({
      component: SignatueModalComponent,
      cssClass: 'my-custom-class'
    });
    await modal.present();

  }
  createPDF(){
    const formValue = this.dateValue;
    const docDefinition = {
      watermark: { text: 'Hola Nat', color: 'blue', opacity: 0.2, bold: true },
      content: [{
        columns: [
          {
            text: this.dateValue,
            alignment: 'right'
          }
        ]
      },
        {
          text: 'Hellloo Nat', style: 'header'
        },
        {
          columns: [
            {
              width: '50%',
              text: 'From',
              style: 'subheader'
            },
            {
              width: '50%',
              text: 'To',
              style: 'subheader'
            },
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        }
      }
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);
    console.log(this.pdfObj);
  }
  downloadPDF(){
    if (this.platform.is('cordova')) {
      this.pdfObj.getBase64(async (data) => {
        try{
          let path = `pdf/filedoc_${Date.now()}.pdf`;
          const result = await Filesystem.writeFile({
            path,
            data,
            directory: Directory.Documents,
            recursive: true
          });
          this.fileOpener.open(`${result.uri}`,'application/pdf');

        }catch (e) {
          console.error('Unable to write file ', e);
        }
      });
      console.log('hejejejeje');
    }else{
      this.pdfObj.download();
    }
  }

}
