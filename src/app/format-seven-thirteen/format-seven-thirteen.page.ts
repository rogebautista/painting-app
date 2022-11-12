import { Component, OnInit } from '@angular/core';


import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-format-seven-thirteen',
  templateUrl: './format-seven-thirteen.page.html',
  styleUrls: ['./format-seven-thirteen.page.scss'],
})
export class FormatSevenThirteenPage implements OnInit {

  pdfObj = null;
  trainee = {
    fullName:'Roger'
  };
  form713= {
    formID: '6T57UT',
    recordID:'R49IR58TU'
  };
  sectionSegmentsArray = [];
  segments = [
    {
      date: '2022-11-09',
      number: 1,
      departure: 'ACA',
      arrival: 'GDL',
      diurno: '15:00',
      nocturno: '00:00',
      total: '15:00',
      accumulated: '15:00',
      landingSelection: 'PF',
      pf: 1,
      pnf: 0,
      comments: 'There is no comment',
      status: true,
      traineeName: 'Jane Doe',
      traineeLicense: 4,
      traineeSignature: 'data:image/png;base64,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',
      instructorName: 'Humberto Huerta',
      instructorLicense: 2,
      instructorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAADICAYAAADcHyqdAAAAAXNSR0IArs4c6QAACW1JREFUeF7t1jERAAAMArHi33Rt/JAq4EIHdo4AAQIECBAgEBFYJIcYBAgQIECAAIEzTDwBAQIECBAgkBEwTDJVCEKAAAECBAgYJn6AAAECBAgQyAgYJpkqBCFAgAABAgQMEz9AgAABAgQIZAQMk0wVghAgQIAAAQKGiR8gQIAAAQIEMgKGSaYKQQgQIECAAAHDxA8QIECAAAECGQHDJFOFIAQIECBAgIBh4gcIECBAgACBjIBhkqlCEAIECBAgQMAw8QMECBAgQIBARsAwyVQhCAECBAgQIGCY+AECBAgQIEAgI2CYZKoQhAABAgQIEDBM/AABAgQIECCQETBMMlUIQoAAAQIECBgmfoAAAQIECBDICBgmmSoEIUCAAAECBAwTP0CAAAECBAhkBAyTTBWCECBAgAABAoaJHyBAgAABAgQyAoZJpgpBCBAgQIAAAcPEDxAgQIAAAQIZAcMkU4UgBAgQIECAgGHiBwgQIECAAIGMgGGSqUIQAgQIECBAwDDxAwQIECBAgEBGwDDJVCEIAQIECBAgYJj4AQIECBAgQCAjYJhkqhCEAAECBAgQMEz8AAECBAgQIJARMEwyVQhCgAABAgQIGCZ+gAABAgQIEMgIGCaZKgQhQIAAAQIEDBM/QIAAAQIECGQEDJNMFYIQIECAAAEChokfIECAAAECBDIChkmmCkEIECBAgAABw8QPECBAgAABAhkBwyRThSAECBAgQICAYeIHCBAgQIAAgYyAYZKpQhACBAgQIEDAMPEDBAgQIECAQEbAMMlUIQgBAgQIECBgmPgBAgQIECBAICNgmGSqEIQAAQIECBAwTPwAAQIECBAgkBEwTDJVCEKAAAECBAgYJn6AAAECBAgQyAgYJpkqBCFAgAABAgQMEz9AgAABAgQIZAQMk0wVghAgQIAAAQKGiR8gQIAAAQIEMgKGSaYKQQgQIECAAAHDxA8QIECAAAECGQHDJFOFIAQIECBAgIBh4gcIECBAgACBjIBhkqlCEAIECBAgQMAw8QMECBAgQIBARsAwyVQhCAECBAgQIGCY+AECBAgQIEAgI2CYZKoQhAABAgQIEDBM/AABAgQIECCQETBMMlUIQoAAAQIECBgmfoAAAQIECBDICBgmmSoEIUCAAAECBAwTP0CAAAECBAhkBAyTTBWCECBAgAABAoaJHyBAgAABAgQyAoZJpgpBCBAgQIAAAcPEDxAgQIAAAQIZAcMkU4UgBAgQIECAgGHiBwgQIECAAIGMgGGSqUIQAgQIECBAwDDxAwQIECBAgEBGwDDJVCEIAQIECBAgYJj4AQIECBAgQCAjYJhkqhCEAAECBAgQMEz8AAECBAgQIJARMEwyVQhCgAABAgQIGCZ+gAABAgQIEMgIGCaZKgQhQIAAAQIEDBM/QIAAAQIECGQEDJNMFYIQIECAAAEChokfIECAAAECBDIChkmmCkEIECBAgAABw8QPECBAgAABAhkBwyRThSAECBAgQICAYeIHCBAgQIAAgYyAYZKpQhACBAgQIEDAMPEDBAgQIECAQEbAMMlUIQgBAgQIECBgmPgBAgQIECBAICNgmGSqEIQAAQIECBAwTPwAAQIECBAgkBEwTDJVCEKAAAECBAgYJn6AAAECBAgQyAgYJpkqBCFAgAABAgQMEz9AgAABAgQIZAQMk0wVghAgQIAAAQKGiR8gQIAAAQIEMgKGSaYKQQgQIECAAAHDxA8QIECAAAECGQHDJFOFIAQIECBAgIBh4gcIECBAgACBjIBhkqlCEAIECBAgQMAw8QMECBAgQIBARsAwyVQhCAECBAgQIGCY+AECBAgQIEAgI2CYZKoQhAABAgQIEDBM/AABAgQIECCQETBMMlUIQoAAAQIECBgmfoAAAQIECBDICBgmmSoEIUCAAAECBAwTP0CAAAECBAhkBAyTTBWCECBAgAABAoaJHyBAgAABAgQyAoZJpgpBCBAgQIAAAcPEDxAgQIAAAQIZAcMkU4UgBAgQIECAgGHiBwgQIECAAIGMgGGSqUIQAgQIECBAwDDxAwQIECBAgEBGwDDJVCEIAQIECBAgYJj4AQIECBAgQCAjYJhkqhCEAAECBAgQMEz8AAECBAgQIJARMEwyVQhCgAABAgQIGCZ+gAABAgQIEMgIGCaZKgQhQIAAAQIEDBM/QIAAAQIECGQEDJNMFYIQIECAAAEChokfIECAAAECBDIChkmmCkEIECBAgAABw8QPECBAgAABAhkBwyRThSAECBAgQICAYeIHCBAgQIAAgYyAYZKpQhACBAgQIEDAMPEDBAgQIECAQEbAMMlUIQgBAgQIECBgmPgBAgQIECBAICNgmGSqEIQAAQIECBAwTPwAAQIECBAgkBEwTDJVCEKAAAECBAgYJn6AAAECBAgQyAgYJpkqBCFAgAABAgQMEz9AgAABAgQIZAQMk0wVghAgQIAAAQKGiR8gQIAAAQIEMgKGSaYKQQgQIECAAAHDxA8QIECAAAECGQHDJFOFIAQIECBAgIBh4gcIECBAgACBjIBhkqlCEAIECBAgQMAw8QMECBAgQIBARsAwyVQhCAECBAgQIGCY+AECBAgQIEAgI2CYZKoQhAABAgQIEDBM/AABAgQIECCQETBMMlUIQoAAAQIECBgmfoAAAQIECBDICBgmmSoEIUCAAAECBAwTP0CAAAECBAhkBAyTTBWCECBAgAABAoaJHyBAgAABAgQyAoZJpgpBCBAgQIAAAcPEDxAgQIAAAQIZAcMkU4UgBAgQIECAgGHiBwgQIECAAIGMgGGSqUIQAgQIECBAwDDxAwQIECBAgEBGwDDJVCEIAQIECBAgYJj4AQIECBAgQCAjYJhkqhCEAAECBAgQMEz8AAECBAgQIJARMEwyVQhCgAABAgQIGCZ+gAABAgQIEMgIGCaZKgQhQIAAAQIEDBM/QIAAAQIECGQEDJNMFYIQIECAAAEChokfIECAAAECBDIChkmmCkEIECBAgAABw8QPECBAgAABAhkBwyRThSAECBAgQICAYeIHCBAgQIAAgYyAYZKpQhACBAgQIEDAMPEDBAgQIECAQEbAMMlUIQgBAgQIECBgmPgBAgQIECBAICNgmGSqEIQAAQIECBAwTPwAAQIECBAgkBEwTDJVCEKAAAECBAgYJn6AAAECBAgQyAgYJpkqBCFAgAABAgQMEz9AgAABAgQIZAQMk0wVghAgQIAAAQIP7FMAyYPSkIYAAAAASUVORK5CYII='
    },
    {
      number: 2,
      date: '2022-11-09',
      departure: 'CJS',
      arrival: 'ACA',
      diurno: '00:00',
      nocturno: '00:02',
      total: '00:02',
      accumulated: '15:02',
      landingSelection: 'PF',
      pf: 2,
      pnf: 0,
      comments: "",
      status: false,
      traineeName: 'Jane Doe',
      traineeLicense: 4,
      traineeSignature: '',
      instructorName: 'Humberto Huerta',
      instructorLicense: 2,
      instructorSignature: ''
    },
    {
      number: 3,
      date: '2022-11-09',
      departure: 'CJS2',
      arrival: 'ACA',
      diurno: '00:00',
      nocturno: '00:02',
      total: '00:02',
      accumulated: '15:02',
      landingSelection: 'PF',
      pf: 3,
      pnf: 0,
      comments: "",
      status: false,
      traineeName: 'Jane Doe',
      traineeLicense: 4,
      traineeSignature: '',
      instructorName: 'Humberto Huerta',
      instructorLicense: 2,
      instructorSignature: ''
    },
    {
      number: 4,
      date: '2022-11-09',
      departure: 'CJS3',
      arrival: 'ACA',
      diurno: '00:00',
      nocturno: '00:02',
      total: '00:02',
      accumulated: '15:02',
      landingSelection: 'PF',
      pf: 4,
      pnf: 0,
      comments: "",
      status: false,
      traineeName: 'Jane Doe',
      traineeLicense: 4,
      traineeSignature: '',
      instructorName: 'Humberto Huerta',
      instructorLicense: 2,
      instructorSignature: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  createPDF(){
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

  buildSegments(){
    this.segments.forEach(element => {
      this.sectionSegmentsArray.push(
        {
          style: 'tableExampleList',
          table: {
            widths: [180, 100],
            heights: 10,
            body: [

              [{text:'This is a dummy text', style: 'contentList' },
                {text: 'This is another text', style: 'contentList', italics: true, color: 'gray'}],
              //[{text:this.formatEvaluationsDate['FACTORES HUMANOS'][1].label, style: 'contentList' },
              // {text: this.formatEvaluationsDate['FACTORES HUMANOS'][1].value, style: 'contentList', italics: true, color: 'gray'}],
              //[{text:this.formatEvaluationsDate['FACTORES HUMANOS'][2].label, style: 'contentList' },
              // {text: this.formatEvaluationsDate['FACTORES HUMANOS'][2].value, style: 'contentList', italics: true, color: 'gray'}],
              //[{text:this.formatEvaluationsDate['FACTORES HUMANOS'][3].label, style: 'contentList' },
              // {text: this.formatEvaluationsDate['FACTORES HUMANOS'][3].value, style: 'contentList', italics: true, color: 'gray'}],
            ]
          }
        }
      );
    });
    console.info(this.sectionSegmentsArray);
    return this.sectionSegmentsArray;
  }
  makePdfFormat(){
    this.buildSegments();
    let content = [
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
            text: this.form713.formID, style: 'content'
          },
          {
            width: 80,
            text: 'Record ID: ', style: 'subheader'
          },
          {
            width: '20%',
            text: this.form713.recordID, style: 'content'
          }
        ]
      },
      { // fila
        text: 'Trainee Name: ', style: 'subheader'
      },
      { // fila
        text: this.trainee.fullName, style: 'contentLine'
      },
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
            //[this.trainee.licenseN, this.format712.evaluatedPosition],
          ]
        },
        layout: 'noBorders'
      },
      {
        text: 'Segments',
        style: 'contentLine'
      },
      this.sectionSegmentsArray
    ];
    //Array.prototype.push.apply(content,this.buildSegments());
    //content.concat(this.buildSegments());
    console.info(content);
    return {
      watermark: { text: 'Docrew', color: 'blue', opacity: 0.2, bold: true },
      content,
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
        contentList: {
          fontSize: 10,
          bold: false,
          margin: [0, 0, 0, 0],
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
        tableExampleList: {
          margin: [0, 0, 0, 0]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    };
  }
}
