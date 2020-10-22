import { Pipe, PipeTransform } from "@angular/core";

// pipes must return something
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
 }


