import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-movie-screen',
  templateUrl: './movie-screen.component.html',
  styleUrls: ['./movie-screen.component.css']
})
export class MovieScreenComponent implements OnInit {

  @Input()
  id:string | null = "0"

  @Input()
  videoId: string =""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      this.getVideoId(this.id)
  }

  getVideoId(id: string | null){
    const result = dataFake.filter( value => value.id == id)[0]

    this.videoId = result.movieId;
  }
}
