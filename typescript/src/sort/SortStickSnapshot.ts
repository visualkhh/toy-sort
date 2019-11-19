import {Sort} from "./Sort";
import {Snaphot} from "./Snaphot";
import {Stick} from "../gui/DrawStick";

export abstract class SortStickSnapshot extends Sort implements Snaphot<number, Stick> {
    private _milliseconds: number;
    private _snapshot: Array<Array<number>>;

    constructor(data?: Array<number>) {
        super(data);
        const start = new Date().getTime();
        this.sort();
        this._milliseconds = new Date().getTime() - start;
    }


    get milliseconds(): number {
        return this._milliseconds;
    }

    pushSnapshot(input: Array<number>, fixIdx?: number) {
        if (!this._snapshot) {
            this._snapshot = new Array<Array<number>>();
        }
        const cpArray = input.slice();
        if (undefined != fixIdx) {
            cpArray['fixIndex'] = fixIdx;
        }
        this._snapshot.push(cpArray); //copy array
    }

    getSnapshot(): Array<Array<Stick>> {
        const snapshot = new Array<Array<Stick>>();
        for (let i = 0; this._snapshot && i < this._snapshot.length; i++) {
            const it = this._snapshot[i];
            const before = this._snapshot[i - 1]||it;

            const itSnapshot = Array<Stick>();
            for (let j = 0; j < before.length && j < it.length; j++) {
                const stick = new Stick(it[j]);
                if (before[j] != it[j]) {
                    stick.fillStyle = '#0F0';
                }

                if (it['fixIndex'] && it['fixIndex'] === j) {
                    stick.fillStyle = '#0015ff';
                }
                itSnapshot.push(stick);
            }
            snapshot.push(itSnapshot);
        }
        return snapshot;
    }
}
