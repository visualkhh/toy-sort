export abstract class Sort {

    constructor(private _data?: Array<number>) {
        if (!this._data) {
            this._data = Sort.getRandomData();
        }
    }

    get data(): Array<number> {
        return this._data;
    }

    abstract sort();

    public swap(fromIdx: number, toIdx: number) {
        const t = this.data[fromIdx];
        this.data[fromIdx] = this.data[toIdx];
        this.data[toIdx] = t;
    }
    public static getRandomData(size = 100) {
        const data = new Array<number>();
        for (let i = 0; i < size; i++) {
            data.push(Math.floor(Math.random() * 10001));
        }
        return data;
    }

}
