class Item {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    writeLn() {
        return (`${this.name}: ${this.price} Toman <br /> `);
    }

}


class Iterator {

    constructor(items=[]) {
        this.index = 0;
        this.items = items;
    }

    first() {
        this.index = 0;
        var [first] = this.items;
        //var first = this.items[0];
        return first
    }

    last() {
        this.index = this.items.length - 1;
        var [last] = [...this.items].reverse();
        return last;
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    current() {
        return this.items[this.index];
    }

    next() {
        if (this.hasNext()){
            this.index += 1;
        }
        return this.current();
    }

    prev(){
        if(this.index !==0){
            this.index -= 1;
        }
        return this.current();
    }
}



var myItems = new Iterator([
    new Item("Shirt", 100000),
    new Item("Hat", 20000),
    new Item("Jeans", 150000),
    new Item("Shoes", 250000)
]);


document.write(myItems.first().writeLn());
document.write(myItems.next().writeLn());
document.write(myItems.next().writeLn());
document.write(myItems.next().writeLn());
document.write(myItems.next().writeLn());
document.write(myItems.prev().writeLn());
document.write(myItems.first().writeLn());
document.write(myItems.prev().writeLn());
document.write(myItems.last().writeLn());
document.write(myItems.next().writeLn());
