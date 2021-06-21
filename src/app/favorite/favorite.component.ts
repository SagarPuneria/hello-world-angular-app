import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
/*
hello-world-angular-app sagar.puneria$ ng g c favorite

hello-world-angular-app sagar.puneria$ npm install font-awesome --save

hello-world-angular-app sagar.puneria$ git status -s
 M angular.json
 M package-lock.json
 M package.json

hello-world-angular-app sagar.puneria$ git diff package.json
diff --git a/package.json b/package.json
index 6baad15..43a9e2e 100644
--- a/package.json
+++ b/package.json
@@ -20,6 +20,7 @@
     "@angular/platform-browser-dynamic": "~8.1.0",
     "@angular/router": "~8.1.0",
     "bootstrap": "^5.0.1",
+    "font-awesome": "^4.7.0",
     "rxjs": "~6.4.0",
     "tslib": "^1.9.0",
     "zone.js": "~0.9.1"

hello-world-angular-app sagar.puneria$ git diff package-lock.json
diff --git a/package-lock.json b/package-lock.json
index e43d39f..d6cb164 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -3617,6 +3617,11 @@
       "integrity": "sha512-HWqDgT7ZEkqRzBvc2s64vSZ/hfOceEol3ac/7tKwzuvEyWx3/4UegXh5oBOIotkGsObyk3xznnSRVADBgWSQVg==",
       "dev": true
     },
+    "font-awesome": {
+      "version": "4.7.0",
+      "resolved": "https://registry.npmjs.org/font-awesome/-/font-awesome-4.7.0.tgz",
+      "integrity": "sha1-j6jPBBGhoxr9B7BtKQK7n8gVoTM="
+    },
     "for-in": {
       "version": "1.0.2",
       "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",

hello-world-angular-app sagar.puneria$ ng serve
*/