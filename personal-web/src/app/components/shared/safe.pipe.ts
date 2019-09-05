
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(d) {
    console.log(d)
    if (d.startsWith('<')) {
      return this.sanitizer.bypassSecurityTrustHtml(d);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(d);
  }

}