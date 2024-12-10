// console.log(reduceFunc([1,2,2,3,3,3,4,4,6]))

// function reduceFunc(arr){
//     let refPointer = 0
//     let counter= 0
//     for(let i=0;i<arr.length;i++){
//         if(counter > 2){


//         }


//     }
// }

function reduceArray(arr, n) {
	let j = 0;
	for (let i = 0; i < n; i++) {

		if (i < n - 2
			&& arr[i] == arr[i + 1]
			&& arr[i] == arr[i + 2])
			continue;


		else {
			arr[j] = arr[i];
			j++;
		}
	}

	for (let i = 0; i < j; i++) {
		console.log(arr[i]);
	}

}

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 6];

let n = arr.length;

// console.log(first)
reduceArray(arr, n);