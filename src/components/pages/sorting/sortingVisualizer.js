export default function sketch (p) {
	let numbers, columnWidth, millisecondsElapsed, lastSortedTime;
	let arraySize, delay, startSort, constructNewArray, sortType, currentIndex;
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
		quickSorter = p.quickSort(numbers, 0, numbers.length - 1);
		lastSortedTime = p.millis();
		p.strokeWeight(2);
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
				quickSorter = p.quickSort(numbers, 0, numbers.length - 1);
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
			if(i === currentIndex) {
				p.fill("#1ED761");
			}
			p.rect(i * columnWidth, p.height, columnWidth, -height);
			if(i === currentIndex) {
				p.fill("white");
			}
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
				currentIndex = j;
				yield;
			}  

			let temp = numbers[minValueIndex];   
			numbers[minValueIndex] = numbers[i];  
			numbers[i] = temp;  
			currentIndex = i;
			yield;
		}  
		startSort = false;
	}

	p.insertionSort = function*() {
		for (let i = 1; i < numbers.length; i++) { 
	        let currentElementVal = numbers[i]; 
	        currentIndex = i;
	        yield;

	        let j = i - 1; 
	        while (j >= 0 && numbers[j] > currentElementVal) { 
	        	currentIndex = j;
	            yield;
	            numbers[j + 1] = numbers[j]; 
	            j = j - 1; 
	        } 

	        numbers[j + 1] = currentElementVal;
	        currentIndex = j + 1;
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
					currentIndex = j + 1;
					yield;
				}
				currentIndex = j;
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
			currentIndex = i;
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
			currentIndex = i;
		} 
	}

	p.mergeSort = function*(arr, left, right) {
		yield* p.mSort(arr, left, right);
		startSort = false;
	}

	p.mSort = function*(arr, left, right) {
		if (left < right) { 
			let mid = Math.floor(left + (right - left) / 2); 
			yield* p.mSort(arr, left, mid); 
			yield* p.mSort(arr , mid + 1, right); 
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
			currentIndex = arrIndex;
			arrIndex++;
			yield;
		} 

		while (leftPointer < leftSubarrayLength) { 
			arr[arrIndex] = leftSubarray[leftPointer]; 
			leftPointer++; 
			currentIndex = arrIndex;
			arrIndex++; 
			yield;
		} 

		while (rightPointer < rightSubarrayLength) { 
			arr[arrIndex] = rightSubarray[rightPointer]; 
			rightPointer++; 
			currentIndex = arrIndex;
			arrIndex++; 
			yield;
		} 
	}

	p.quickSort = function*(arr, start, end) {
		yield* p.qSort(arr, start, end);
		startSort = false;
	}

	p.qSort = function*(arr, start, end) {
		let generator = p.partition(arr, start, end);
		let generatorNext = generator.next();
		while(!generatorNext.done) {
			yield generator;
			generatorNext = generator.next();
		}
		let partition = generatorNext.value;

		if(partition - 1 > start) {
			yield* p.qSort(arr, start, partition - 1);
		}

		if(partition + 1 < end) {
			yield* p.qSort(arr, partition, end);
		}
	}

	p.partition = function*(arr, start, end) {
		let pivot = arr[end];
		
		for(let i = start; i < end; i++){
			if(arr[i] < pivot){
				let temp = arr[start];
				arr[start] = arr[i];
				arr[i] = temp;
				start++;
			}
			currentIndex = i;
			yield;
			
		}
		let temp = arr[start];
		arr[start] = pivot;
		arr[end] = temp;
		currentIndex = end;
		yield;

		return start;
	}
};