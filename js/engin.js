export function colisionShape(x1, x2, y1, y2, width1, width2, height1, height2 ) {
    if ((x1 >= x2 && x1 <= x2+width2 || x2 >= x1 && x2 <= x1+width1) && (y1 >= y2 && y1 <= y2+height2 || y2 >= y1 && y2 <= y1+height1) ){
        return true
    }
    else return false
}