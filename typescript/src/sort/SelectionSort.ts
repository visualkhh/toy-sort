import {SortStickSnapshot} from "./SortStickSnapshot";

export class SelectionSort extends SortStickSnapshot {
    sort() {
        for (let i = 0; i < this.data.length; i++) {
            const at = this.data[i];
            let choiseIdx = i;
            for (let j = i; j < this.data.length; j++) {
                if (this.data[choiseIdx] > this.data[j]) {
                    choiseIdx = j;
                }
            }
            this.swap(i, choiseIdx);
            this.pushSnapshot(this.data);
        }
    }

}
