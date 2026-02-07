import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers$: Observable<any>;

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.followers$ = this.service.getAll();
  }

}
/*
$ ng g c github-followers
CREATE src/app/github-followers/github-followers.component.css (0 bytes)
CREATE src/app/github-followers/github-followers.component.html (31 bytes)
CREATE src/app/github-followers/github-followers.component.spec.ts (692 bytes)
CREATE src/app/github-followers/github-followers.component.ts (308 bytes)
UPDATE src/app/app.module.ts (883 bytes)

$ ng g s github-followers
CREATE src/app/github-followers.service.spec.ts (379 bytes)
CREATE src/app/github-followers.service.ts (144 bytes)

https://getbootstrap.com/
*/