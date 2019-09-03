import { Component, OnInit ,Input, Pipe} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})




export class PostListComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: string;

  constructor() { 
    const date = new Date();
  }

  ngOnInit() {
  }

  getColor(){
    if (this.loveIts>0)
      return 'green'
    else if(this.loveIts <0)
      return 'red'
  }
  
  iLikeIt(){
    this.loveIts ++
  }
  iDontLikeIt(){
    this.loveIts --
  }
}
