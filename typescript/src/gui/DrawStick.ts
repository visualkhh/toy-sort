import {Draw} from "./Draw";
export class Stick {
    constructor(public value: number, public fillStyle= '#000000', public strokeStyle= '#f00', public lineWidth= 0.5){}
}
export class DrawStick extends Draw {

    private _sticks: Array<Stick>;
    private _sticksMin: number;
    private _sticksMax: number;

    public get sticks(): Array<Stick> {
        return this._sticks;
    }
    public set sticks(sticks: Array<Stick>) {
        this._sticks = sticks;
        this.reSetMax();
        this.reSetMin();
    }
    public set stickNumbers(sticks: Array<number>) {
        const sticksContain = new Array<Stick>();
        sticks.forEach(it => sticksContain.push(new Stick(it)));
        this.sticks = sticksContain;
    }
    public get sticksMin(): number {
        return this._sticksMin;
    }
    public get sticksMax(): number {
        return this._sticksMax;
    }
    private reSetMax() {
        this._sticksMax = this.sticks.reduce((previous, current) => previous.value > current.value ? previous:current).value;
    }
    private reSetMin() {
        this._sticksMin = this.sticks.reduce((previous, current) => previous.value > current.value ? current:previous).value;
    }


    getStartStickX(index: number) {
        return index * this.getStickWidth();
    }
    getStartStickY(value: number) {
        return this.canvas.height - this.getStickHeight(value);
    }
    getStickWidth() {
        return this.canvas.width / this.sticks.length;
    }
    getStickHeight(value: number) {
        /*
            ◇비례식을 풀어서□의 값을 구해 보시오. 16
            <풀이> 8 : 3=□: 6    ⇨    8×6 = 3×□,□=16
         */
        // this.canvas.height : this.sticksMax  = ? : value;
        // this.canvas.height * value == this.sticksMax * ?;
        let a = this.canvas.height * value;
        return a / this.sticksMax;
    }

    draw(context: CanvasRenderingContext2D) {
        this.clear();
        for (let i = 0; i < this.sticks.length; i++) {
            const stick = this.sticks[i];
            context.strokeStyle = stick.strokeStyle;
            context.fillStyle = stick.fillStyle;
            context.lineWidth = stick.lineWidth;
            context.beginPath();
            context.rect(this.getStartStickX(i), this.getStartStickY(stick.value), this.getStickWidth(), this.canvas.height);
            context.fill();
            context.stroke();
        }

        // timer(100).subscribe(it => this.clear());

    }
    
}
