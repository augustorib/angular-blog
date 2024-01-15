import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-comments-area',
  templateUrl: './comments-area.component.html',
  styleUrls: ['./comments-area.component.css']
})
export class CommentsAreaComponent implements OnInit {

  @Input()
  profileImg: string = "";

  @Input()
  comment: string = ""

  @Input()
  commentPassedTime: string = ""

  constructor() { }

  ngOnInit(): void {

  }

}
