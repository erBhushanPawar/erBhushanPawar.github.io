declare var ga: any;
export class Utility {
    public static reportToGA(page, event) {
        ga('set', 'page', page);
        ga('send', event);
    }
}
