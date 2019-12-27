import {fromEvent, interval, Observable, of, Subscription, timer} from "rxjs";
import {DrawStick} from "./gui/DrawStick";
import {SelectionSwapSort} from "./sort/SelectionSwapSort";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import {SelectionSort} from "./sort/SelectionSort";
import {BubbleSort} from "./sort/BubbleSort";
import {InsertionSort} from "./sort/InsertionSort";
import {Sort} from "./sort/Sort";
import {SortStickSnapshot} from "./sort/SortStickSnapshot";


let subscription: Subscription;

const launcher = {
    run (type: string) {
        if (subscription) {
            subscription.unsubscribe();
        }
        const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
        let drawStick = new DrawStick(canvas);
        const randomData = Sort.getRandomData(200);
        drawStick.stickNumbers = randomData;
        drawStick.tick();
        let sort: SortStickSnapshot;
        switch (type) {
            case('Selection'): sort = new SelectionSort(randomData); break;
            case('SelectionSwap'): sort = new SelectionSwapSort(randomData); break;
            case('Bubble'): sort = new BubbleSort(randomData); break;
            case('Insertion'): sort = new InsertionSort(randomData); break;
        }

        const snapshot = sort.getSnapshot();
        // const intervalVal = 1000 / snapshot.length;
        const intervalVal = 1;
        console.log(type+' Sort milliseconds', sort.milliseconds);
        const start = new Date().getTime();
        subscription = interval(intervalVal).take(snapshot.length).map(idx => snapshot[idx]).subscribe(it => {
            drawStick.sticks = it;
            drawStick.tick();
        }, (e) => {}, () => console.log(type+' Complete', new Date().getTime() - start));
    }
}







launcher.run(document.querySelector("#sort")['value']);
fromEvent(document.querySelector("#sort") , 'change').subscribe((it: Event) => {
    launcher.run(it.target['value']);
});



