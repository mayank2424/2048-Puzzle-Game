
///Power file for 2048 game//

var grid;

function blankGrid(){
   return [[0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]];
}


function setup(){
	createCanvas(400,400);
   grid=blankGrid();
    
    console.table(grid);
    addNumber();
    addNumber();
    console.table(grid);

} 


function addNumber(){
	var choice=[];
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
           if(grid[i][j]===0){
           	choice.push({
           		x:i,    //created an object
           		y:j
           	});
           }
		}
	} 
  if(choice.length>0);
  let spot=random(choice);
  let r=random(1);
  grid[spot.x][spot.y]=r>0.5 ? 2 : 4;
}


function compare(a,b){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
           if(a[i][j] !== b[i][j]){
               return true;
           }
        }
    }
    return false;
}


function copyGrid(){
    let extraGrid=blankGrid();
    
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            extraGrid[i][j]=grid[i][j];
        }
    }
    return extraGrid;
}

function flip(){
    for(let i=0;i<4;i++){
        grid[i].reverse();
    }
    return grid;
}

function rotateGrid(){
     
    let newGrid=blankGrid();
    for(let i=0;i<4;i++){
        for(j=0;j<4;j++){
            newGrid[i][j]=grid[j][i];
        }
    }
    return newGrid;
}
function keyPressed(){
    console.log(keyCode);
    let flipped=false;
    let rotated=false;  //Assuming at initial game is played
    let gamePlayed=true; //Assu
    if(keyCode===DOWN_ARROW){
        
    }
    else if(keyCode===UP_ARROW){
        flip(grid);
        flipped=true;
     }
    
    else if(keyCode==RIGHT_ARROW){
        grid =rotateGrid(grid);
        rotated=true;
    }
    else if(keyCode==LEFT_ARROW){
        grid=rotateGrid(grid);
        grid=flip(grid);
        rotated=true;
        flipped=true;
    } 
    else{
        gamePlayed=false;
    }
      
     if(gamePlayed){
        let past=copyGrid(grid);    //Here we have made copyGrid function to make new array equala to grid(main) array;
        for(let i=0;i<4;i++){
            grid[i]=slide(grid[i]);
            grid[i]=combineNumber(grid[i]);
            grid[i]=slide(grid[i]); 
        }
        let changed=compare(past, grid);   //Here we are comparig both array if arrays are not same means elemnts are changed and if changed then addNUmber
    
        if(flipped){
            flip(grid);
        }
    
        if(rotated){
//            console.log(grid);
            grid=rotateGrid(grid);
//            console.log(grid);
            grid=rotateGrid(grid);
//            console.log(grid);
            grid=rotateGrid(grid);
//             console.log(grid);
        }
    
        if(changed){    //It also meansif(changed==true)
            addNumber();
        }
     }
    
}
function draw(){
    background(255);
    Drawgrid();
}


function slide(row){ 
    let arr=row.filter(value => value);
    let missing=4-arr.length;
    let zeroes=Array(missing).fill(0);
    arr=zeroes.concat(arr);
    return arr;
}



function combineNumber(row){
    for(let i=3;i>=1;i--){
        let a=row[i];
        let b=row[i-1];
        if(a==b){
            row[i]=a+b;
            row[i-1]=0;
//            break;
        }
    }
    return row;
}


function Drawgrid(){
        let w=100;
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            noFill();
            stroke(0);
            strokeWeight(2);
            rect(i*w,j*w,w,w);
            
            let value=grid[i][j];
            if(grid[i][j]!==0){
                textAlign(CENTER,CENTER);
                textSize(64);
                fill(0);
                noStroke();
                text(value,i*w+w/2,j * w +w/2);
            }
        }
    }
}
