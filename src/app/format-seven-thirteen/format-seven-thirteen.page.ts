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
      instructorSignature: 'data:image/png;base64,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'
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
    },
    {
      "data": [
        {
          "enablingType": "ioe",
          "segmentB": {
            "nocturno": "1:30",
            "departure": "CUN",
            "totalHrs": "1:30",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "segmentNo": "2",
            "landingPNF": "0",
            "instructorName": "John Doe",
            "instructorLicenseNo": 123456789,
            "landingPF": "2",
            "sDate": "2022-10-13",
            "arrival": "MEX",
            "instructorSignature": 1667493129,
            "diurno": "00:00",
            "accumulated": "6:30"
          },
          "traineeLicenseNo": 293857601,
          "segmentA": {
            "landingPNF": "0",
            "sDate": "2022-10-13",
            "landingPF": "1",
            "nocturno": "2:00",
            "departure": "MEX",
            "instructorName": "John Doe",
            "segmentNo": "1",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "instructorSignature": 1667493129,
            "instructorLicenseNo": 123456789,
            "totalHrs": "5:00",
            "accumulated": "5:00",
            "diurno": "3:00",
            "arrival": "CUN"
          },
          "recordID": 1665600362,
          "traineeID": "D00001",
          "formID": 1665780201,
          "evaluatedPosition": "FO",
          "traineeName": "Humberto Huerta"
        },
        {
          "segmentB": {
            "nocturno": "0",
            "departure": "CUN",
            "totalHrs": "0",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "segmentNo": "4",
            "landingPNF": "0",
            "instructorName": "John Doe",
            "instructorLicenseNo": 1,
            "landingPF": "2",
            "sDate": "2022-10-13",
            "arrival": "MEX",
            "diurno": "0",
            "accumulated": "0"
          },
          "traineeLicenseNo": 2,
          "segmentA": {
            "landingPNF": "0",
            "sDate": "2022-10-13",
            "landingPF": "1",
            "nocturno": "0",
            "departure": "MEX",
            "instructorName": "John Doe",
            "segmentNo": "3",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "instructorLicenseNo": 1,
            "totalHrs": "0",
            "accumulated": "0",
            "diurno": "0",
            "arrival": "CUN"
          },
          "recordID": 1665600362,
          "traineeID": "D00001",
          "revision": 28,
          "formID": 1666981828,
          "traineeName": "Humberto Huerta"
        },
        {
          "segmentB": {
            "nocturno": "0",
            "departure": "CUN",
            "totalHrs": "0",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "segmentNo": "6",
            "landingPNF": "0",
            "instructorName": "John Doe",
            "instructorLicenseNo": 1,
            "landingPF": "2",
            "sDate": "2022-10-13",
            "arrival": "MEX",
            "diurno": "0",
            "accumulated": "0"
          },
          "traineeLicenseNo": 2,
          "segmentA": {
            "landingPNF": "0",
            "sDate": "2022-10-13",
            "landingPF": "1",
            "nocturno": "0",
            "departure": "MEX",
            "instructorName": "John Doe",
            "segmentNo": "5",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "instructorLicenseNo": 1,
            "totalHrs": "0",
            "accumulated": "0",
            "diurno": "0",
            "arrival": "CUN"
          },
          "recordID": 1665600362,
          "traineeID": "D00001",
          "revision": 28,
          "formID": 1666981842,
          "traineeName": "Humberto Huerta"
        },
        {
          "segmentB": {
            "nocturno": "0",
            "departure": "CUN",
            "totalHrs": "0",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "segmentNo": "8",
            "landingPNF": "0",
            "instructorName": "John Doe",
            "instructorLicenseNo": 1,
            "landingPF": "2",
            "sDate": "2022-10-13",
            "arrival": "MEX",
            "diurno": "0",
            "accumulated": "0"
          },
          "traineeLicenseNo": 2,
          "segmentA": {
            "landingPNF": "0",
            "sDate": "2022-10-13",
            "landingPF": "1",
            "nocturno": "0",
            "departure": "MEX",
            "instructorName": "John Doe",
            "segmentNo": "7",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "instructorLicenseNo": 1,
            "totalHrs": "0",
            "accumulated": "0",
            "diurno": "0",
            "arrival": "CUN"
          },
          "recordID": 1665600362,
          "traineeID": "D00001",
          "revision": 28,
          "formID": 1666981852,
          "traineeName": "Humberto Huerta"
        },
        {
          "segmentB": {
            "nocturno": "0",
            "departure": "CUN",
            "totalHrs": "0",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "segmentNo": "10",
            "landingPNF": "0",
            "instructorName": "John Doe",
            "instructorLicenseNo": 1,
            "landingPF": "2",
            "sDate": "2022-10-13",
            "arrival": "MEX",
            "diurno": "0",
            "accumulated": "0"
          },
          "traineeLicenseNo": 2,
          "segmentA": {
            "landingPNF": "0",
            "sDate": "2022-10-13",
            "landingPF": "1",
            "nocturno": "0",
            "departure": "MEX",
            "instructorName": "John Doe",
            "segmentNo": "9",
            "comments": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni animi nulla nesciunt id velit. Sunt voluptates aperiam saepe illo eaque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, assumenda!.",
            "instructorLicenseNo": 1,
            "totalHrs": "0",
            "accumulated": "0",
            "diurno": "0",
            "arrival": "CUN"
          },
          "recordID": 1665600362,
          "traineeID": "D00001",
          "revision": 28,
          "formID": 1666981865,
          "traineeName": "Humberto Huerta"
        }
      ],
      "success": true
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
            widths: [200, 'auto', 'auto'],
            heights: 10,
            body: [
              [{text: 'Segment '+ element.number, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: element.date, style: 'tableHeader', alignment: 'center'}],
              [{text: 'Landing Selection', style: 'tableHeader', alignment: 'center'}, {text: 'Departure', style: 'tableHeader', alignment: 'center'}, {text: 'Arrival', style: 'tableHeader', alignment: 'center'}],
              [element.landingSelection, element.departure, element.arrival],
              [{rowSpan: 4, text: 'Comments: \n'+ element.comments}, {text:'Diurno', style: 'tableHeader', alignment: 'center'}, {text:'Nocturno', style: 'tableHeader', alignment: 'center'}],
              ['', element.diurno, element.nocturno],
              ['', {text:'PF', style: 'tableHeader', alignment: 'center'}, {text:'PNF', style: 'tableHeader', alignment: 'center'}],
              ['', element.pf, element.pnf],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Acumulated: '+ element.accumulated, {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
              ['Total: '+element.total, '', ''],
            ]
          }
        }
      );
      this.sectionSegmentsArray.push(
        {
          text: '',
          style: 'contentLine'
        }
      );
    });
    //console.info(this.sectionSegmentsArray);
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
            width: 60,w
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
              {text: 'Instructor License:', style: 'tableHeader'}],
            [this.trainee.licenseN, this.instructor.licenseN],
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
