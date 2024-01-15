import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import { comments, TypeComments } from 'src/app/data/comments'


@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  
  id: string | null  = "0"
  movieId: string = ""
  comments: TypeComments[] = [
      {
        id: "",
        profileImg: "",
        comment: "",
        movieId: "",
        commentPassedTime: ""
      }
  ]

  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      
      this.getMovieId(this.id);

      this.getMovieComments(this.movieId);

  }


  getMovieId(id:string | null){
    
      const result = dataFake.filter( value => value.id ==  id)[0]

       this.movieId = result.movieId

  }

  getMovieComments(movieId: string) {
    const result =  comments.filter( value => value.movieId == movieId)

    this.comments = result;
  }

}
