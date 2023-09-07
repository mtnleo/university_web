class Cursor {

    // CONSTRUCTOR ---------------------------------

    constructor() {
        this.row = 1;
        this.column = 1;
    }

    // GETTERS AND SETTERS ---------------------------------

    getRow() {
        return this.row;
    }

    getColumn() {
        return this.column;
    }

    setColumn(position) {
        this.column = position;
    }

    // METHODS ---------------------------------------

    increaseRow() {
        if(this.row < 6) {
            this.row++;
        }
    }

    increaseColumn() {
        if (this.column < 5) {
            this.column++;
        } 
    }

    decreaseRow() {
        if (this.row > 0) {
            this.row--;
        }
    }

    decreaseColumn() {
        if (this.column > 0) {
            this.column--;
        }
    }

}