//let counter1;
//
//function setup(){
////   createCanvas(600,400);
////   background(0);
////   let button=createButton('Press');
////    button.mousePressed(() =>background(random(255))); //Here we can define function without any name ,as it is define in its arguments oly it doesn't need any name
//    noCanvas();
//    counter1=new Counter(100,500);
//    counter1.start();
//}
//
////function draw(){
////    counter1.countIt();
////}
//class Counter{
//    constructor(start,wait){
//        this.count=start;
//        this.p=createP(' ');
//        this.wait=wait;
//    }
//    start(){
//        setInterval(() => {
//        this.countIt();
//      },this.wait)
//    }
//   
//    countIt(){
//        this.count++;
//        this.p.html(this.count);
//    }
//   
//}
//


let vals=[5,4,12,6,9];

//x=>(x%2==0)  //This is same as calling fucntion with arguments "x" and returning "x%2==0" as this is arrow function in ES6 
vals=vals.filter(x=> !(x%2==0));
console.log(vals);