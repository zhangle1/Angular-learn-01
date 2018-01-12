import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {


  @Input()
  private rating = 0;


  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter<number>();

  private stars: boolean[];

  @Input()
  private readonly = true;

  constructor() {
  }

  ngOnInit() {

    this.initStarComponent();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.initStarComponent();
  }


  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.initStarComponent();
      this.ratingChange.emit(this.rating);
    }
  }


  initStarComponent() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
