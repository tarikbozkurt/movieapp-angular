import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?: number) {
        if (!value) return null;

        //limit değeri gönderilmediyse yoksa 20 yi kullan
        limit = limit ? limit : 20;

        // eğer limit gelen value den büyükse değeri dönder
        if (limit > value.length) {
            return value;
        } else {
            // Eğer gönderilen string ifadesi limitten fazla olduysa
            // gelen "value" nin içerisine gir "substring" 0. indexten başla limitinci indexe kadar git. ve sonunda 3 nokta koy..
            return value.substring(0, limit) + '...';
        }


    }

}