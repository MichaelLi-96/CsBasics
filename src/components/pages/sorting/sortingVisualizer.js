export default function sketch (p) {
	let numbers, columnWidth, millisecondsElapsed, lastSortedTime;
	let arraySize, delay, startSort, constructNewArray, sortType;
	let selectionSorter, insertionSorter, bubbleSorter, heapSorter, mergeSorter, quickSorter;

	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
		arraySize = props.arraySize;
		delay = props.delay;
		startSort = props.startSort;
		constructNewArray = props.constructNewArray;
		sortType = props.sortType;
	};

	p.setup = function() {
		p.fill("#011E13");
		p.createCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
		numbers = Array(20).fill().map(() => p.random(1));
		selectionSorter = p.selectionSort();
		insertionSorter = p.insertionSort();
		bubbleSorter = p.bubbleSort();
		heapSorter = p.heapSort();
		mergeSorter = p.mergeSort(numbers, 0, numbers.length - 1);
		quickSorter = p.quickSort();
		lastSortedTime = p.millis();
		p.fill("white");
	}

	p.constructNewArray = function() {
		if(constructNewArray) {
			numbers = Array(arraySize).fill().map(() => p.random(1));
			constructNewArray = false;
			if(sortType === "Selection Sort") {
				selectionSorter = p.selectionSort();
			}
			else if(sortType === "Insertion Sort"){
				insertionSorter = p.insertionSort();
			}
			else if(sortType === "Bubble Sort") {
				bubbleSorter = p.bubbleSort();
			}
			else if(sortType === "Heap Sort") {
				heapSorter = p.heapSort();
			}
			else if(sortType === "Merge Sort") {
				mergeSorter = p.mergeSort(numbers, 0, numbers.length - 1);
			}
			else if(sortType === "Quick Sort") {
				quickSorter = p.quickSort();
			}
		}
	}

	p.startSort = function() {
		if(startSort && (millisecondsElapsed - lastSortedTime) > delay) {
			if(sortType === "Selection Sort") {
				selectionSorter.next();
			}
			else if(sortType === "Insertion Sort"){
				insertionSorter.next();
			}
			else if(sortType === "Bubble Sort") {
				bubbleSorter.next();
			}
			else if(sortType === "Heap Sort") {
				heapSorter.next();
			}
			else if(sortType === "Merge Sort") {
				mergeSorter.next();
			}
			else if(sortType === "Quick Sort") {
				quickSorter.next();
			}
			lastSortedTime = p.millis();
		}
	}

	p.draw = function() {
		p.resizeCanvas(window.innerWidth * 0.5, window.innerHeight * 0.5);
		columnWidth = window.innerWidth * 0.5 / numbers.length;
		p.background("#011E13");

		millisecondsElapsed = p.millis();
		for (let i = 0; i < numbers.length; i++) {
			let height = p.map(numbers[i], 0, 1, 0, p.height);
			p.rect(i * columnWidth, p.height, columnWidth, -height);
		}

		p.constructNewArray();
		p.startSort();
	}

	p.selectionSort = function*() {
		for (let i = 0; i < numbers.length - 1; i++) {  
			let minValueIndex = i;  
			for (let j = i + 1; j < numbers.length; j++) {  
				if (numbers[j] < numbers[minValueIndex]){  
					minValueIndex = j;
				}
			}  

			let temp = numbers[minValueIndex];   
			numbers[minValueIndex] = numbers[i];  
			numbers[i] = temp;  
			yield;
		}  
		startSort = false;
	}

	p.insertionSort = function*() {
		for (let i = 1; i < numbers.length; i++) { 
	        let currentElementVal = numbers[i]; 
	        let j = i - 1; 
	        while (j >= 0 && numbers[j] > currentElementVal) { 
	            numbers[j + 1] = numbers[j]; 
	            j = j - 1; 
	            yield;
	        } 

	        numbers[j + 1] = currentElementVal;
	        yield;	        
	    } 
		startSort = false;
	}

	p.bubbleSort = function*() {
		for (let i = 0; i < numbers.length - 1; i++) {
			for (let j = 0; j < numbers.length - i - 1; j++) { 
				if (numbers[j] > numbers[j + 1]) { 
					let temp = numbers[j]; 
					numbers[j] = numbers[j + 1]; 
					numbers[j + 1] = temp; 
				}
				yield;
			} 
		}
		startSort = false;
	}

	p.heapSort = function*() {
		for (let i = Math.floor(numbers.length / 2) - 1; i >= 0; i--) {
			p.heapify(numbers, numbers.length, i); 
			yield;
		}

		for (let i = numbers.length - 1; i >= 0; i--) { 
			let temp = numbers[0]; 
			numbers[0] = numbers[i]; 
			numbers[i] = temp; 

			yield;
			p.heapify(numbers, i, 0); 
			yield;
		} 
		startSort = false;
	}

	p.heapify = function(arr, n, i) {
		let largestIndex = i; 
		let leftChildIndex = 2 * i + 1;
		let rightChildIndex = 2 * i + 2;

		if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
			largestIndex = leftChildIndex; 
		}

		if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
			largestIndex = rightChildIndex; 
		}

		if (largestIndex !== i) { 
			let temp = arr[i]; 
			arr[i] = arr[largestIndex];
			arr[largestIndex] = temp; 

			p.heapify(arr, n, largestIndex); 
		} 
	}

	p.mergeSort = function*(arr, left, right) {
		yield* p.sort(arr, left, right);
		startSort = false;
	}

	p.sort = function*(arr, left, right) {
		if (left < right) { 
			let mid = Math.floor(left + (right - left) / 2); 
			yield* p.sort(arr, left, mid); 
			yield* p.sort(arr , mid + 1, right); 
			yield* p.merge(arr, left, mid, right);
		} 
	}

	p.merge = function*(arr, left, mid, right) {
		let leftSubarrayLength = mid - left + 1; 
		let rightSubarrayLength = right - mid; 

		let leftSubarray = []; 
		let rightSubarray = []; 

		for (let i = 0; i < leftSubarrayLength; i++) {
			leftSubarray.push(arr[left + i]); 
		}
		for (let i = 0; i < rightSubarrayLength; i++) {
			rightSubarray.push(arr[mid + 1 + i]); 
		}

		let leftPointer = 0; 
		let rightPointer = 0; 

		let arrIndex = left; 

		while (leftPointer < leftSubarrayLength && rightPointer < rightSubarrayLength) { 
			if (leftSubarray[leftPointer] <= rightSubarray[rightPointer]) { 
				arr[arrIndex] = leftSubarray[leftPointer]; 
				leftPointer++; 
			} 
			else { 
				arr[arrIndex] = rightSubarray[rightPointer]; 
				rightPointer++; 
			} 
			arrIndex++;
			yield;
		} 

		while (leftPointer < leftSubarrayLength) { 
			arr[arrIndex] = leftSubarray[leftPointer]; 
			leftPointer++; 
			arrIndex++; 
			yield;
		} 

		while (rightPointer < rightSubarrayLength) { 
			arr[arrIndex] = rightSubarray[rightPointer]; 
			rightPointer++; 
			arrIndex++; 
			yield;
		} 
	}

	p.quickSort = function*() {
		for (let i = numbers.length - 1; i > 0; i--) {
			for (let j = 0; j < i; j++) {
				if (numbers[j] > numbers[j + 1]) {
					// swap
					let t = numbers[j];
					numbers[j] = numbers[j + 1];
					numbers[j + 1] = t;
				}
				yield;
			}
		}
		startSort = false;
	}
};