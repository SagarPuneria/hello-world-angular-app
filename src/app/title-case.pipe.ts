import { Pipe, PipeTransform } from '@angular/core';
// import { worker } from 'cluster';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word.toLowerCase())
  }
}
/*
hello-world-angular-app sagar.puneria$ ng g p title-case
CREATE src/app/title-case.pipe.spec.ts (200 bytes)
CREATE src/app/title-case.pipe.ts (211 bytes)
UPDATE src/app/app.module.ts (1357 bytes)

hello-world-angular-app sagar.puneria$ ng serve
*/