let prev=21;
let flag=0;
let time = 60;
let newArr = ['<img src="./Images/rocket.png">','<img src="./Images/mickey.png">','<img src="./Images/volcano.png">',
			'<img src="./Images/tabla.png">','<img src="./Images/thumb.png">','<img src="./Images/money.png">',
			'<img src="./Images/Ball.png">','<img src="./Images/tortoise.png">','<img src="./Images/dog.png">',
			'<img src="./Images/sun.png">','<img src="./Images/rocket.png">','<img src="./Images/mickey.png">',
			'<img src="./Images/volcano.png">','<img src="./Images/tabla.png">','<img src="./Images/thumb.png">',
			'<img src="./Images/money.png">','<img src="./Images/Ball.png">','<img src="./Images/tortoise.png">',
			'<img src="./Images/dog.png">','<img src="./Images/sun.png">'];
let counter = 0;
for(let i=0;i<4;i++){
	const newRowDiv = document.createElement("div");
	newRowDiv.setAttribute('class','rowDiv');
		for(let j=0;j<5;j++){
			const newDiv = document.createElement("div");
			newDiv.setAttribute("id",counter); 
			newDiv.setAttribute("class","block");
			newDiv.setAttribute("onclick",`divFlip(${counter})`);
			counter++;
			newRowDiv.appendChild(newDiv);
		}
	document.getElementById('container').appendChild(newRowDiv);	
}

newArr = shuffleArray(newArr);
let score = 0;

let divFlip = (i) => {
	if(flag>0){
		document.getElementById(i).innerHTML = newArr[i];
		
		if(prev!= 21 && prev != i){			
			let p  = prev;
			if( newArr[prev] === newArr[i] ){
				
				document.getElementById("score").innerHTML = ++score;
				document.getElementById(p).innerHTML = newArr[i];
				document.getElementById(p).onclick='';
				document.getElementById(i).onclick='';
				i=21;
				if(score==10){
					setTimeout(()=>{	
						alert("You completed in "+ (60-time) +"seconds.. Play Again!!!");
						location.reload();
					},500);
				}
			}	
			else{
				setTimeout(()=>{
					document.getElementById(p).innerHTML = "";
					document.getElementById(i).innerHTML = "";
					prev = 21;
				},500);
			}
		}		
		prev = i;
	}
}

let start = ()=>{
		++flag;
		document.getElementById("start").onclick = '';
		setInterval(demo,1000);


	function demo(){
			document.getElementById("timer").innerHTML = (--time) + "sec";
			if(time == 0){
				alert(`!!! Time's UP ... Your Score is :: ${score} ... Better LUCK Next Time !!!`);
				location.reload();
			}
	}
}

function shuffleArray(array){
	let currentIndex = array.length, temporaryValue, randomIndex;

	while(currentIndex>0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
	}
	return array;
}



