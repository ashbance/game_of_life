var lastClicked;
var matrix = [];
var MAX_COLS = 20;
var MAX_ROWS = 20;
var timer = null;

var grid = clickableGrid(MAX_ROWS,MAX_COLS,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;

    setAlive(row, col);
});

function setAlive (row, col) {
    console.log('set alive ' + row + ',' + col);

    if (row == -1 || col == -1)
        return;

    for (var j = 0; j < matrix.length; j++) {
        if (matrix[j].row == row && matrix[j].col == col) {
                matrix[j].alive = true;
        }
    }    

    updateAllCellCounts();
    refreshLiveCells();
}

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var td = document.createElement('td');
            var myId = 'row:' + r + ',col:' + c;

            td.id = myId;  
            var obj = {id:myId, row:r, col:c, alive:false, count:0};
            matrix.push(obj); 

            var cell = tr.appendChild(td);
            //cell.innerHTML = ++i;

            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

function reset() {
    for (var i =0; i< matrix.length; i++) {
        matrix[i].count = 0;
        matrix[i].alive = false;
    }

    updateAllCellCounts();
    refreshLiveCells();
}

function initPulsar() {

    for (var i =0; i< matrix.length; i++) {
        matrix[i].count = 0;
        matrix[i].alive = false;
    }

    for (var i = 0; i < matrix.length; i++) { 
       //pulsar period 3
       //rows
        if (matrix[i].id == 'row:2,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:2,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:2,col:6') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:2,col:10') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:2,col:11') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:2,col:12') {
            matrix[i].alive = true;
        }


        if (matrix[i].id == 'row:7,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:6') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:7,col:10') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:11') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:12') {
            matrix[i].alive = true;
        }


        if (matrix[i].id == 'row:9,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:6') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:9,col:10') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:11') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:12') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:14,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:14,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:14,col:6') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:14,col:10') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:14,col:11') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:14,col:12') {
            matrix[i].alive = true;
        }

        //verticals
        if (matrix[i].id == 'row:4,col:2') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:2') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:2') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:4,col:7') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:7') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:7') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:4,col:9') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:9') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:9') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:4,col:14') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:14') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:14') {
            matrix[i].alive = true;
        }

        //verticals 2
        if (matrix[i].id == 'row:10,col:2') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:11,col:2') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:12,col:2') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:10,col:7') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:11,col:7') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:12,col:7') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:10,col:9') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:11,col:9') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:12,col:9') {
            matrix[i].alive = true;
        }

        if (matrix[i].id == 'row:10,col:14') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:11,col:14') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:12,col:14') {
            matrix[i].alive = true;
        }
    }

    updateAllCellCounts();
    refreshLiveCells();

    
}

function startTimer() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    } 

    timer = setInterval(applyAllRules, 500);
}

function stopTimer() {
    clearInterval(timer);
}

function initBlinker() {

    for (var i =0; i< matrix.length; i++) {
        matrix[i].count = 0;
        matrix[i].alive = false;
    }

    for (var i =0; i< matrix.length; i++) {
        if (matrix[i].id == 'row:9,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:9,col:6') {
            matrix[i].alive = true;
        }
    }

    updateAllCellCounts();
    refreshLiveCells();
}

function initBeacon() {

    for (var i =0; i< matrix.length; i++) {
        matrix[i].count = 0;
        matrix[i].alive = false;
    }

    for (var i =0; i< matrix.length; i++) {
        if (matrix[i].id == 'row:4,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:4,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:4') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:5,col:5') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:6') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:6,col:7') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:6') {
            matrix[i].alive = true;
        }
        else if (matrix[i].id == 'row:7,col:7') {
            matrix[i].alive = true;
        }
    }
    updateAllCellCounts();
    refreshLiveCells();
}

function refreshLiveCells() {
    console.log('sweep grid ' + matrix.length );

    for (i = 0; i < matrix.length; i++) { 
        document.getElementById(matrix[i].id).innerHTML = matrix[i].count;

        if (matrix[i].alive == true) {
            console.log(matrix[i].id + " " + matrix[i].alive);
            document.getElementById(matrix[i].id).style.backgroundColor = "rgb(255,0,0)";
            document.getElementById(matrix[i].id).style.color = "rgb(0,0,0)";
        }
        else {
            document.getElementById(matrix[i].id).style.backgroundColor = "rgb(200,200,200)";
            document.getElementById(matrix[i].id).style.color = "rgb(255,255,255)";
        }
    }
}


 function updateAllCellCounts() {
    for (i =0; i< matrix.length; i++) {
        matrix[i].count = 0;
    }

    for (var i = 0; i< matrix.length; i++) {
        if (matrix[i].alive == true) {
            console.log('found live cell ' + matrix[i].id);
            countAdjoiningLiveCells(matrix[i].row, matrix[i].col);
        }
    }
}

 function countAdjoiningLiveCells(row, col) {

        var top = -1;
        var bottom = -1;
        var left = -1;
        var right = -1;

        if (col > 0) { left = col - 1; }
        if (col < MAX_COLS - 1) { right = col + 1; }
        if (row > 0) { top = row - 1; }
        if (row < MAX_ROWS -1){ bottom = row + 1; }


        incCountIfNotNull(top, left);      //top left
        incCountIfNotNull(top, col);    //top
        incCountIfNotNull(top, right);     //top right
        incCountIfNotNull(row, left);   //left
        incCountIfNotNull(row, right);  //right
        incCountIfNotNull(bottom, left);   //bottom left
        incCountIfNotNull(bottom, col); //bottom middle
        incCountIfNotNull(bottom, right);  //bottom right
    }

    function incCountIfNotNull (row, col) {
        console.log('increment count:' + row + ',' + col);

        if (row == -1 || col == -1)
            return;

        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j].row == row && matrix[j].col == col) {
                 matrix[j].count = matrix[j].count + 1;
            }
        }    
    }


    /**
     * Note. Apply all 4 rules at once, not one at a time. So do it on the current grid state, then
     * recalculate the numbers after all the rules have been applied.
     */
    function applyAllRules() {
        console.log("apply rules");
        applyRule1();
        applyRule2();
        applyRule3();
        applyRule4();

        updateAllCellCounts();
        refreshLiveCells();

    }

    /**
     * Rule 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
     */
    function applyRule1() {
        console.log("apply rule 1");
        for (var i=0; i<matrix.length; i++) {
            if (matrix[i].alive == true) {
                if (matrix[i].count < 2) {
                    matrix[i].alive = false;
                    console.log('#1 setting false:' + matrix[i].id);
                }
            }
        }
    }

    /**
     * Rule 2. Any live cell with two or three live neighbours lives on to the next generation.
     */
    function applyRule2() {
        console.log("apply rule 2");
        for (var i=0; i<matrix.length; i++) {
            if (matrix[i].alive == true) {
                if (matrix[i].count == 2 || matrix[i].count == 3) {
                    matrix[i].alive = true;
                    console.log('#2 Stays Alive:' + matrix[i].id);
                }
            }
        }
    }

   //Rule 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
    function applyRule3() {
        console.log("apply rule 3");
        for (var i=0; i<matrix.length; i++) {
            if (matrix[i].alive == true) {
                if (matrix[i].count > 3) {
                    matrix[i].alive = false;
                    console.log('#3 Overpopulated:' + matrix[i].id);
                }
            }
        }
    }

    /**
     * Rule 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
     */
    function applyRule4() {
        console.log("apply rule 4");
        for (var i=0; i<matrix.length; i++) {
            if (matrix[i].alive == false) {
                if (matrix[i].count  == 3) {
                    matrix[i].alive = true;
                    console.log('#4 Dead cell comes alive:' + matrix[i].id);
                }
            }
        }
    }

