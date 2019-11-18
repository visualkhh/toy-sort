import {fromEvent, timer} from "rxjs";
import {DrawStick} from "./gui/DrawStick";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
let drawStick = new DrawStick(canvas);

const data = new Array<number>();
for (let i = 0; i < 150; i++) {
    data.push(Math.floor(Math.random() * 10001));
}


drawStick.stickNumbers = data;
drawStick.tick();

let tick = 0;
for (let i = 0; i < data.length; i++) {
    const at = data[i];
    for (let j = i; j < data.length; j++) {
        if (data[i] > data[j]) {
            tick++;
            const t = data[i];
            data[i] = data[j];
            data[j] = t;
            const snapshot = data.slice();
            timer(5 * tick).subscribe(it => {
                drawStick.stickNumbers = snapshot;
                console.log('--', drawStick.stickNumbers)
                drawStick.tick();
            //
            })

        }
    }
}



// timer(1000).subscribe(it => {
//     drawStick.stickNumbers = [23,7,1,2,4,6,8,5,4,4];
//     drawStick.tick();
// })
// fromEvent(window, 'click').subscribe(it => {
//     alert(1222221441+ new DrawStick(canvas).toString());
// })
