// Event Filtering concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- <input (keyup)="onKeyUp($event)"/> -->

        <!-- Event Filtering -->
        <input (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent {
    /* onKeyUp($event) {
        if ($event.keyCode === 13) console.log("ENTER was pressed", $event);
    } */
    onKeyUp() {
        console.log("ENTER was pressed");
    }
}

/*
hello-world-angular-app sagar.puneria$ ng serve
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]

// install bootstrap
hello-world-angular-app sagar.puneria$ npm install bootstrap --save

hello-world-angular-app sagar.puneria$ git status -s
 M package-lock.json
 M package.json

hello-world-angular-app sagar.puneria$ git diff package.json
diff --git a/package.json b/package.json
index 3c07b30..6baad15 100644
--- a/package.json
+++ b/package.json
@@ -19,6 +19,7 @@
     "@angular/platform-browser": "~8.1.0",
     "@angular/platform-browser-dynamic": "~8.1.0",
     "@angular/router": "~8.1.0",
+    "bootstrap": "^5.0.1",
     "rxjs": "~6.4.0",
     "tslib": "^1.9.0",
     "zone.js": "~0.9.1"

hello-world-angular-app sagar.puneria$ git diff package-lock.json
diff --git a/package-lock.json b/package-lock.json
index 78d4537..e43d39f 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -1673,6 +1673,11 @@
         "multicast-dns-service-types": "^1.1.0"
       }
     },
+    "bootstrap": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-5.0.1.tgz",
+      "integrity": "sha512-Fl79+wsLOZKoiU345KeEaWD0ik8WKRI5zm0YSPj2oF1Qr+BO7z0fco6GbUtqjoG1h4VI89PeKJnMsMMVQdKKTw=="
+    },
     "brace-expansion": {
       "version": "1.1.11",
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",

hello-world-angular-app sagar.puneria$ npm install
npm WARN bootstrap@5.0.1 requires a peer of @popperjs/core@^2.9.2 but none is installed. You must install peer dependencies yourself.
npm WARN karma-jasmine-html-reporter@1.6.0 requires a peer of jasmine-core@>=3.7.1 but none is installed. You must install peer dependencies yourself.

// import bootstrap Style Sheets into src/styles.css file
// like => @import "~bootstrap/dist/css/bootstrap.css";

hello-world-angular-app sagar.puneria$ ng serve
chunk {styles} styles.js, styles.js.map (styles) 914 kB [initial] [rendered]
*/