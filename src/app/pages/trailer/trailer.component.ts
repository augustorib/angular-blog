import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  
  id: string | null  = "0"
  movieId: string = ""
 
  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      
      this.getMovieId(this.id)
  }


    getMovieId(id:string | null){
    
      const result = dataFake.filter( value => value.id ==  id)[0]

       this.movieId = result.movieId

  }
}
