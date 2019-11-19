import {SortStickSnapshot} from "./SortStickSnapshot";

export class InsertionSort extends SortStickSnapshot{
    sort() {
        for (let i = 1; i < this.data.length; i++) {
            let key = this.data[i];
            for (let j = i - 1 ; j >= 0; j--) {
                // console.log(key, this.data[j], i,  j);
                if (key < this.data[j]) {
                    this.swap(j, j+1);
                    this.pushSnapshot(this.data);
                }
            }

            // this.swap(i, choiseIdx);
            // this.pushSnapshot(this.data);
        }
    }

}
