import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'safeHtmlPipe',
    pure: true
})
export class SafeHtmlPipe implements PipeTransform {
    constructor (private sanitizer: DomSanitizer) { }

    transform (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}