import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("GithubProfileComponent OnInit");

    // If user want to stay away from the page(i.e., Non SPA)
    /* let id = this.route.snapshot.paramMap.get('id');
    console.log(id) */

    // If user want to stay on same page(i.e.,SPA - Single Page Application)
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        let username = params.get('username');
        console.log('id:', id, 'username:', username)
      })
  }

}
