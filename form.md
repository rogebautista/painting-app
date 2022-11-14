# Formulario para Nat

##Primera sección ```createpdf```

```typescript
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
```

## Segunda sección buildSegments

```typescript
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
              [{text: 'Comments: \n', style: 'tableHeader', alignment: 'left'}, {text: 'Departure', style: 'tableHeader', alignment: 'center'}, {text: 'Arrival', style: 'tableHeader', alignment: 'center'}],
              [{rowSpan: 7, text: element.comments}, element.departure, element.arrival],
              ['', {text:'Diurno', style: 'tableHeader', alignment: 'center'}, {text:'Nocturno', style: 'tableHeader', alignment: 'center'}],
              ['', element.diurno, element.nocturno],
              ['', {text:'PF', style: 'tableHeader', alignment: 'center'}, {text:'PNF', style: 'tableHeader', alignment: 'center'}],
              ['', element.pf, element.pnf],
              ['', {text:'Accumulated', style: 'tableHeader', alignment: 'center'}, {text:'Total', style: 'tableHeader', alignment: 'center'}],
              ['', element.accumulated, element.total],
              //['Sample value 1', 'Sample value 2', 'Sample value 3'],
              //['Acumulated: '+ element.accumulated, {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
              //['Total: '+element.total, '', ''],
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

```

## Tercera sección makePdfFormat

```typescript
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
            width: 150,
            text: 'Evaluated position: ', style: 'subheader'
          },
          {
            width: '*',
            text: this.form713.evaluatedPosition, style: 'content'
          },
          {
            width: 150,
            text: 'Tipo de habitación: ', style: 'subheader'
          },
          {
            width: '20%',
            text: this.form713.enablingType, style: 'content'
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
```
