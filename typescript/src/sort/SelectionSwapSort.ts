import {SortStickSnapshot} from "./SortStickSnapshot";

export class SelectionSwapSort extends SortStickSnapshot{
    sort() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = i; j < this.data.length; j++) {
                if (this.data[i] > this.data[j]) {
                    this.swap(i, j);
                    this.pushSnapshot(this.data);
                }
            }
        }
    }

}
