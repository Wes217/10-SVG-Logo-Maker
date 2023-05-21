class Triangle{
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
    }
    render(color){}

}



class Circle{
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render(color) {
        const fill = color ? ` fill="${color}"` : '';
        return`<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"${fill}/>`
    };
    
}



class Square {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
    }
}


module.exports = {Triangle, Circle, Square}