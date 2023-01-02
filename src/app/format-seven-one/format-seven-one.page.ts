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
import {FormatSevenTwelve} from "../interfaces/format-seven-one";
import {Trainee} from "../interfaces/Trainee";
import {FormatCardOperationModel} from "../interfaces/model-format-operations";

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
  format712: FormatSevenTwelve;
  trainee = {
    fullName: 'Rogelio Bautista',
    crewID: 'Jejejeje',
    licenseN: 'jejejejejejenonsd',
    nickname: 'pillo'
  } as Trainee;
  cards: string[] = ["OPERACIONES NORMALES",
    "OPERACIONES ANORMALES", "OPERACIONES ESPECIALES",
    "FACTORES HUMANOS", "CRM"
  ];
  formatEvaluationsDate: FormatCardOperationModel;


  constructor(
    private modalCtrl: ModalController,
    private fileOpener: FileOpener,
    private platform: Platform) {
    this.format712 = {
      normalOperations: {},
      abnormalOperations: {},
      specialOperations: {},
      crm: {},
      humanFactors: {},
    } as FormatSevenTwelve;

  }

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
    pdfMake.fonts = {
      Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
      }
    };


    this.pdfObj = pdfMake.createPdf(this.makePdfFormat()).download();
    //console.log(this.pdfObj);
  }


  makePdfFormat(){
    this.format712.recordID = 'FR345HY';
    this.format712.formID = '087654ERTYUIJHGF';
    this.format712.traineeName = 'Rogelio BAutista Sánchez';
    this.format712.traineeLicenseNo = '346YRY789TYR30';
    this.format712.evaluatedPosition = 'DEsconocido';
    const operacionesNormales = { // tabla
      style: 'tableExample',
        table: {
      widths: [100, '*'],
        body: [
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}]
      ]
    }
    };
    const operacionesAnormales = { // tabla
      style: 'tableExample',
      table: {
        widths: [100, '*'],
        body: [
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}]
        ]
      }
    };
    const operacionesEspeciales = { // tabla
      style: 'tableExample',
      table: {
        widths: [100, '*'],
        body: [
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}]
        ]
      }
    };
    const factoresHumanos = { // tabla
      style: 'tableExample',
      table: {
        widths: [100, '*'],
        body: [
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}]
        ]
      }
    };
    const crm = { // tabla
      style: 'tableExample',
      table: {
        widths: [100, '*'],
        body: [
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}],
          ['Flight Preparation', {text: '08-Nov-2022', italics: true, color: 'gray'}]
        ]
      }
    };
    //console.log('elemento anidado ',this.formatEvaluationsDate.normal_operations[0]);
    return {
      watermark: { text: 'Docrew', color: 'blue', opacity: 0.2, bold: true },
      content: [
        {
          columns: [
            {
              text: new Date().toTimeString(),
              alignment: 'right',
              margin: [0, 0, 0, 12]
            }
          ]
        },
        {
          text: 'Evaluation Format',
          style: 'header',
          margin: [0, 0, 0, 20]
        },
        { // definiciòn de fila
          columns: [
            {
              width: 60,
              text: 'Form ID: ', style: 'subheader'
            },
            {
              width: '*',
              text: this.format712.formID, style: 'content'
            },
            {
              width: 80,
              text: 'Record ID: ', style: 'subheader'
            },
            {
              width: '20%',
              text: this.format712.recordID, style: 'content'
            }
          ]
        },
        { // fila
          text: 'Trainee Name: ', style: 'subheader'
        },
        { // fila
          text: this.format712.traineeName, style: 'contentLine'
        },
        /*{
          text: 'noBorders:', fontSize: 14, bold: true, margin: [0, 0, 0, 8]
        },*/
        {
          text: '',
          style: 'contentLine'
        },
        {
          style: 'tableExample',
          table: {
            widths: [180, '*'],
            headerRows: 1,
            body: [
              [{text: 'Trainee Licence No. :', style: 'tableHeader'},
                {text: 'Evaluated Position:', style: 'tableHeader'}],
              [this.format712.traineeLicenseNo, this.format712.evaluatedPosition],
            ]
          },
          layout: 'noBorders'
        },
        {text: this.cards[0], style: 'subheader'},
        operacionesNormales,
        {text: this.cards[1], style: 'subheader'},
        operacionesAnormales,
        {text: this.cards[2], style: 'subheader'},
        operacionesEspeciales,
        {text: this.cards[3], style: 'subheader'},
        factoresHumanos,
        {text: this.cards[4], style: 'subheader'},
        crm,
        /*{ // tabla
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ['width=100', 'star-sized', 'width=200', 'star-sized'],
              ['fixed-width cells have exactly the specified width',
                {text: 'nothing interesting here', italics: true, color: 'gray'},
                {text: 'nothing interesting here', italics: true, color: 'gray'},
                {text: 'nothing interesting here', italics: true, color: 'gray'}
              ]
            ]
          }
        },*/
        {
          columns:
            [
              {
                width: 160,
                text: 'Normal operations : ', style: 'subheader'
              },
              {
                width: '*',
                text: 'Contenido', style: 'content'
              }
            ],
        }
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        content: {
          fontSize: 12,
          bold: false,
          margin: [0, 15, 0, 0],
          font: 'Roboto'
        },
        contentLine: {
          fontSize: 12,
          bold: false,
          margin: [0, 10, 0, 0],
          font: 'Roboto'
        },
        rowSpace: {
          margin: [0, 10, 0, 0]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    };
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
