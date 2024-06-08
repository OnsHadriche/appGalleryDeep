import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // @Input result
  results :any
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('results'))
      this.results = params.get('results');
    });
  }
}
