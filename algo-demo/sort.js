const pingCanvas = document.getElementById("ping");
const context = pingCanvas.getContext("2d");
var inc = 10;
var framesPerSecond = 5;

var board = {
	x: 0,
	y: 0,
	width: pingCanvas.width,
	height: pingCanvas.height,
	colour: "black"
};

const SELECTION_SORT = "SELECTION_SORT";
const BUBBLE_SORT = "BUBBLE_SORT";
const INSERTION_SORT = "INSERTION_SORT";

var algo = SELECTION_SORT;

const size = board.width;
var nums = [];

for(i=1; i<= size; i+=6){
	let num = {
		x: i,
		y: board.height-i,
		width: 6,
		height: i,
		colour: "red"
	};
	nums.push(num);
}

shuffle();

var count  = 0;	
if(algo === SELECTION_SORT){
	count = 0;
}else if(algo === BUBBLE_SORT){
	count  = nums.length-1;	
}


setInterval(game,1000/framesPerSecond);

function init(selected){
	console.log(selected);
	algo = selected;
	shuffle();
	if(algo === SELECTION_SORT){
		count = 0;
	}else if(algo === BUBBLE_SORT){
		count  = nums.length-1;	
	}else if(algo === INSERTION_SORT){
		count = 0;
	}
	//location.reload();
}

function drawRect(x, y, width, height, colour){
	context.fillStyle = colour;
	context.fillRect(x, y, width, height);
}

function shuffle(){
	for(i=0; i<nums.length-1; i++){
		let idx = Math.floor(Math.random()*(nums.length-2-i)+i+1);
		// nums[idx].x <-> nums[i].x
	    let temp = nums[idx];
	    nums[idx] = nums[i];
	    nums[i] = temp;
	    temp = nums[idx].x;
	    nums[idx].x = nums[i].x;
	    nums[i].x = temp;
	}
}

function bubbleSort(){
	if(count >= 1){
		for(j=0; j<count; j++){
			if(nums[j].height > nums[count].height){
	    		exchange(count,j);			
			}
		}
		count--;
	}
}

function selectionSort(){
	if(count <= nums.length-2){
		for(j=count+1; j<nums.length; j++){
			if(nums[count].height > nums[j].height){
	    		exchange(count, j);
			}
		}
		count++;
	}
}

function insertionSort(){
	if(count <= nums.length-1){
		for(j=count; j > 0; j--){
			if(nums[j-1].height > nums[j].height){
	    		exchange(j-1,j)
			}else{
				break;
			}
		}
		count++;
	}	
}

function exchange(i, j){
	let temp = nums[j];
	nums[j] = nums[i];
	nums[i] = temp;
	temp = nums[j].x;
	nums[j].x = nums[i].x;
	nums[i].x = temp;
}


function render(){
	drawRect(board.x, board.y, board.width, board.height, board.colour);
	nums.forEach(num => drawRect(num.x, num.y, num.width, num.height, num.colour));
}

function game(){
	if(algo === SELECTION_SORT){
		console.log(algo);
		selectionSort();
		if(count > nums.length-2){
			count = 0;
			shuffle();
		}
	}else if(algo === BUBBLE_SORT){
		console.log(algo);
		bubbleSort();
		if(count < 1){
			count = nums.length-1;
			shuffle();
		}
	}else if(algo === INSERTION_SORT){
		console.log(algo);
		insertionSort();
		if(count > nums.length-1){
			count = 0;
			shuffle();
		}
	}
	render();
}