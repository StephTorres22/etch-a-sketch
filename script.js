/*
Need to create a 16x16 grid using js and css
a grid container is defined in the html file
Make it a parent node and append to it? 
Look over flex again */

const gridContainer = document.getElementById('#gridContainer');


/*function createGrid(rowNum, colNum){

    let cell = document.createElement('div');
    

    for (i = 0; i > (rowNum * colNum); i++){

        gridContainer.appendChild('cell');
        cell.classList.add('cell');
    
        cell.innerText = (i + 1);
        console.log(i);
       

    }

}
*/

function createOneCell(){

    let cell = document.createElement('div');
    gridContainer.appendChild('cell');
    cell.classList.add('cell');
}
createOneCell();


    

    

