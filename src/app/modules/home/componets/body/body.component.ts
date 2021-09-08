import { Component, OnInit } from '@angular/core';
import { OcrService } from 'src/app/services/ocr/ocr.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  listImages = [
    {
      src: 'vino.jpg'
    },
    {
      src: 'panda.jpg'
    },
    {
      src: 'movistar.PNG'
    }
  ]

  constructor(private ocrService: OcrService) { }

  ngOnInit(): void {
  }

  clickImage = (image) => {
    this.ocrService.cbImage.emit(image);
  }
}
