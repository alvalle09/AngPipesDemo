import { Pipe, PipeTransform } from "@angular/core";

// pipes must return something
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 10) {
            return value.substr(0, 10) + '...';
        }
        return value;
    }
 }


