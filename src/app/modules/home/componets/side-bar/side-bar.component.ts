import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OcrService } from 'src/app/services/ocr/ocr.service';
import { recognize } from 'tesseract.js';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  @ViewChild('inputImage') inputImage: ElementRef;
  @ViewChild('outputImage') outputImage: ElementRef;
  public openSidebart = false;
  public listSubcribers: any = [];
  public image:any;
  public worker : any;
  public loading: any;

  constructor(private ocrService: OcrService) { }

  ngOnInit(): void {
    this.listObserver();
  }

  ngOnDestroy():void{
    this.listSubcribers.forEach(element => element.unsubscribe());
  }

  toggleMenu = () => {
    this.openSidebart = !this.openSidebart;
  }

  listObserver = () => {
    const observer1 = this.ocrService.cbImage.subscribe( ({src}) => {
      this.image = src;
      this.openSidebart = true;
    });
    this.listSubcribers = [observer1];
  }

  loadingProgress = (logger) =>{
    console.log(logger);
  }

  initialization = async () => {
    this.loading = true;
    const imagenElement = this.inputImage.nativeElement;
    const dataML = await recognize(imagenElement, 'spa', {
      logger:m => this.loadingProgress(m)
    });
    console.log('FINALIZI :::::::',dataML);
  }

  loadedImage = () => {
  this.initialization();

  }

}
