import { Component } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
date = new Date();

POSTS = [
  {
    title: "Mon Premier Post",
    content: "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".  Chaque post aura la forme suivante : ",
    loveIts: 3,
    created_at: this.date
  },
  {
    title: "Mon Deuxiéme Post",
    content: "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".  Chaque post aura la forme suivante : ",
    loveIts: -1,
    created_at: this.date
  },
  {
    title: "Encore Un Post",
    content: "Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de \"love it\" ou de \"don\'t love it\".  Chaque post aura la forme suivante : ",
    loveIts: 0,
    created_at: this.date
  },
];
constructor() { }
}
