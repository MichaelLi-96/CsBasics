export default function sketch (p) {
	let numbers, columnWidth, columnHeight, sorter, millisecondsElapsed, lastSortedTime;
	let arraySize, delay, startSort, constructNewArray;

	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
		arraySize = props.arraySize;
		delay = props.delay;
		startSort = props.startSort;
		constructNewArray = props.constructNewArray;
	};

	p.setup = function() {
		p.fill("#011E13");
		p.createCanvas(p.windowWidth * 0.5, p.windowHeight * 0.5);
		numbers = Array(10).fill().map(() => p.random(1));
		sorter = p.selectionSort();
		lastSortedTime = p.millis();
		p.fill("white");
	}

	p.constructNewArray = function() {
		if(constructNewArray) {
			numbers = Array(arraySize).fill().map(() => p.random(1));
			sorter = p.selectionSort();
			constructNewArray = false;
		}
	}

	p.startSort = function() {
		if(startSort && (millisecondsElapsed - lastSortedTime) > delay) {
			sorter.next();
			lastSortedTime = p.millis();
		}
	}

	p.draw = function() {
		p.resizeCanvas(p.windowWidth * 0.5, p.windowHeight * 0.5);
		columnWidth = p.windowWidth * 0.5 / numbers.length;
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