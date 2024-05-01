export class OrderLog {

    private size = 0;

    private firstIndexValue = 1;

    private index;

    private log = new Map<number, number>

    constructor(size: number) {
        this.size = size;
        this.index = this.firstIndexValue;
    }

    record(id: number): boolean {

        this.log.set(this.index, id);
        if(this.index === this.size) {
            this.index = this.firstIndexValue;
        } else {
            this.index++;
        }

        console.log('Log', this.toString());
        return true;
    }

    get_last(i: number): number | undefined {
        return this.log.get(i);
    }

    private toString(): string {
        let result = ''

        for( let value of this.log.values() ) {
            if(result.length) {
                result = `${value} -> ${result}`;
            } else {
                result = `${value}`;
            }

        }

        return result;
    }
}
