import {SortStickSnapshot} from "./SortStickSnapshot";

export class BubbleSort extends SortStickSnapshot {
    sort() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 1; j < this.data.length; j++) {
                if (this.data[j-1] > this.data[j]) {
                    this.swap(j-1, j);
                    this.pushSnapshot(this.data);
                }
            }
        }
    }

}
