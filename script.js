function DCanvas(el) {
    const ctx = el.getContext('2d');
    const pixel =20;

    let is_mouse_down = false;

    canvasOl.weight = 500;
    canvasOl.height = 500;

    this.drawLine = function (x1, y1, x2, y2, color =  'grey') {
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    this.drawCell = function (x, y, w, h) {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'blue';
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    this.clear = function(){
        ctx.clearRect(0, 0, canvasOl.weight, canvasOl.height);
    }

    this.drawGrid = function () {
        const w = canvasOl.weight;
        const h = canvasOl.height;
        const p = w / pixel;

        const xStep = w / p;
        const yStep = h / p;

            for (let x= 0; x < w; x += xStep)
            {
                this.drawLine(x, 0, x, h);
            }
            for (let y=0; y<yStep; y+= yStep){
                this.drawLine(0, y, w, y);
            }

    }
    // calculate place
    this.calclulate = function (draw = false) {
        const w =  canvasOl.weight;
        const h = canvasOl.height;
        const p = w / pixel;

        const xStep = w / p;
        const yStep = h / p;

        const vector  = [];
        let __draw = [];

        for (let x= 0; x < w; x += xStep) {
            for (let y = 0; y < yStep; y += yStep) {

                const data = ctx.getImageData(x, y, xStep, yStep);
            }
        }
    }
}