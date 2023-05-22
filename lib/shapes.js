class Triangle{
    render(color){
        const fill = color ? ` fill="${color}"` : '';
        return`<polygon points="150,10 25,190 275,190"${fill}/>`
    }
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
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    render(color){
        const fill = color ? ` fill="${color}"` : '';
        return`<rect x="${this.x}" y="${this.y}" width="150" height="150"${fill}/>`
    }
}


module.exports = {Triangle, Circle, Square}