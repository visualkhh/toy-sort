export abstract class Draw {
    private _context: CanvasRenderingContext2D;
    public tickCnt = 0;
    constructor(private _canvas: HTMLCanvasElement) {
        this._context = _canvas.getContext('2d');
        this.onCreate(this.context);
    }


    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }
    public get context(): CanvasRenderingContext2D {
        return this._context;
    }
    public clear() {
        const context = this.context;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.reset();
    }

    public reset() {
        this.context.restore();
        this.context.font = '30pt Calibri';
        this.context.textAlign = 'center';
        this.context.fillStyle = 'black';
        this.context.fillStyle = 'black';
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.save();
    }


    public tick() {
        this.tickCnt++;
        this.draw(this.context);
    }
    onCreate(context: CanvasRenderingContext2D){};
    abstract draw(context: CanvasRenderingContext2D);
    onDestroy(context: CanvasRenderingContext2D){};
}
