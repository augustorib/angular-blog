import { Component, OnInit } from '@angular/core';
import { comments } from 'src/app/data/comments';


@Component({
  selector: 'app-comments-area',
  templateUrl: './comments-area.component.html',
  styleUrls: ['./comments-area.component.css']
})
export class CommentsAreaComponent implements OnInit {

  profileImg: string = "";
  comment: string = ""

  constructor() { }

  ngOnInit(): void {
    this.profileImg = comments[0].profileImg
    this.comment = comments[0].comment
  }

}
