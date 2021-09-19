import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    console.log("GithubFollowersComponent OnInit");

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      let page = +combined[1].get('page');
      console.log('id:', id, 'page:', page)

      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    })

    // this.route.paramMap.subscribe(params => {});
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe(params => {});
    // let page = this.route.snapshot.queryParamMap.get('page');

    /* this.service.getAll()
      .subscribe(followers => this.followers = followers); */
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