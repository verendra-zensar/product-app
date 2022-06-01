import { Component, OnInit ,OnChanges, SimpleChanges, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating:number=4;
  cropWidth:number=75;
  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>()



  constructor() { }
  ngOnChanges(): void {
  this.cropWidth= this.rating * 75/5

  }
  onRatingClick():void{
    this.ratingClicked.emit(`the rating ${this.rating} was clickedd`)
    console.log(`The rating ${this.rating} was called`)
  }
  ngOnInit(): void {
  }

  

}
