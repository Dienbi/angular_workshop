import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent {
  description!:String;

  constructor(private R: ActivatedRoute){}
    ngOnInit(){
      this.R.queryParamMap.subscribe(params => this.description=String(params.get('desc')));
    }
}
