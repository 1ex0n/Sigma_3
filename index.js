
// -------------- Задача №1 --------------
function getDiffMinMax(arr) {
	if (arr.length < 2){
		return 0;
	}
	let min;
	let max;
	for (let i = 0; i < arr.length; i++) {
		if (min === undefined) {
			min = arr[i]
		}
		if (max === undefined) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
  }
	return max-min;
}
const arr = [6,-6,3,0,10,-15,8];
const result1 = getDiffMinMax(arr);
console.log (result1);

// -------------- Задача №2 --------------

function filterWords(str, num) {
	return str.split(' ').filter(word => word.length > num);
 }
 let str = 'Sigma Software provides top-quality custom software development, graphic design, testing, and support services.';
 let num = 6;
 
 let result2 = filterWords(str, num);
 console.log(result2);

// -------------- Задача №3 --------------

 function solution(str, ending) {
	return str.endsWith(ending);
 }

 console.log(solution('abc', 'bc')); // true
 console.log(solution('abc', 'd')); // false

// -------------- Задача №4 --------------


 function averages(arr) {
	let result4 = [];
	for (let i = 0; i < arr.length - 1; i++) {
	  result4.push((arr[i] + arr[i + 1]) / 2);
	}
	return result4;
 }
 console.log(averages([2,-2,2,-2,2])); 
 console.log(averages([1,3,5,1,-10])); 

// -------------- Задача №5 --------------

  function countVowels(str) {
	let count = 0;
	let vowels = 'aeiouyAEIOUY';
	for (let char of str) {
	  if (vowels.includes(char)) {
		 count++;
	  }
	}
	return count;
 }
 console.log(countVowels("Celebration"));
 console.log(countVowels("Palm"));
 console.log(countVowels("Yellow"));

// -------------- Задача №5.2 --------------

  function removeABC(str) {
	let newStr = str.replace(/[abc]/gi, '');
	return newStr === str ? null : newStr;
 }
 console.log(removeABC("This might be bit hard")); // "This might e it hrd"
 console.log(removeABC("hello world!")); // null

// -------------- Задача №6 --------------

  function difference(arr1, arr2) {
	let result = [];
	for (let el of arr1) {
	  if (!arr2.includes(el) && !result.includes(el)) {
		 result.push(el);
	  }
	}
	for (let el of arr2) {
	  if (!arr1.includes(el) && !result.includes(el)) {
		 result.push(el);
	  }
	}
	return result.sort((a, b) => a - b);
 }
 console.log(difference([8,1,2,3], [100,2,1,10])); 

// -------------- Задача №7 --------------

	function swap(obj) {
		let result = {};
		for (let key in obj) {
		  result[obj[key]] = key;
		}
		return result;
	 }
	 
	 let enter = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
	 let exit = swap(enter);
	 console.log(exit); 

// -------------- Задача №8 --------------

		function calculateDifference(obj, limit) {
			if (Object.keys(obj).length === 0) {
			  console.log("Object must contain elements");
			}
			let totalValue = Object.values(obj).reduce((acc, value) => acc + value, 0);
			if (totalValue <= limit) {
				console.log("Sum of elements must be greater than insurance limit");
			}
			return totalValue - limit;
		 }
		 
		 console.log(calculateDifference({ "baseball bat": 20 }, 5)); 
		 console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
		 console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); 

// -------------- Задача №9 --------------

		 function doesBrickFit(a, b, c, w, h) {
			return (a <= w && (b <= h || c <= h)) || (b <= w && (a <= h || c <= h)) || (c <= w && (a <= h || b <= h));
		 }
		 
		 console.log(doesBrickFit(1,1,1,1,1)); 
		 console.log(doesBrickFit(1,2,1,1,1)); 
		 console.log(doesBrickFit(1,2,2,1,1)); 

// -------------- Задача №10 --------------

		  function extractFileName(path) {
			let fileName = path.split('\\').pop();
			return fileName.split('.').slice(0, -1).join('.');
		 }
		 
		 console.log(extractFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt')); 

// -------------- Задача №11 --------------

		  function CyclicShift(s1, s2) {
			if (s1.length !== s2.length) {
			  return false;
			}
			return (s2 + s2).includes(s1);
		 }
		 
		 console.log(CyclicShift("abc", "cab")); 
		 console.log(CyclicShift("abc", "cba")); 

// -------------- Задача №12 --------------

		 function splitArray(a) {
			let b = [];
			let c = [];
			while (a.length > 0) {
			  let minDiff = Infinity;
			  let minPair = [];
			  for (let i = 0; i < a.length; i++) {
				 for (let j = i + 1; j < a.length; j++) {
					if (Math.abs(a[i] - a[j]) < minDiff) {
					  minDiff = Math.abs(a[i] - a[j]);
					  minPair = [a[i], a[j]];
					}
				 }
			  }
			  b.push(Math.min(...minPair));
			  c.push(Math.max(...minPair));
			  a = a.filter(x => !minPair.includes(x));
			}
			return [b, c];
		 }
		 
		 console.log(splitArray([1,5,6,2])); 
		 console.log(splitArray([1,4,5,3,6,2])); 

// -------------- Задача №13 --------------

function processString(str) {
	let newStr = str.split(' ').map(word => {
		 if (word.match(/^http/)) {
			  return '[посилання заборонено]';
		 } else if (word.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			  return '[контакти заборонені]';
		 } else if (word.length > 3 && word.match(/^[0-9]+$/)) {
			  return '';
		 } else {
			  return word.toLowerCase();
		 }
	}).join(' ');
	newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
	if (newStr.length > str.length) {
		 setInterval(() => {
			  alert('Чи потрібна вам допомога?');
		 }, 5000);
	}
	return newStr;
}

let input = 'Це приклад рядка з посиланням http://example.com та email@example.com';
let output = processString(input);
console.log(output); 

// -------------- Задача №14 --------------

function checkBracketsBalance(text) {
	let balance = 0;
	for (let i = 0; i < text.length; i++) {
		 if (text[i] === '(') {
			  balance++;
		 } else if (text[i] === ')') {
			  balance--;
		 }
		 if (balance < 0) {
			  return false;
		 }
	}
	return balance === 0;
}

let text = 'Текст з (дужками)';
if (checkBracketsBalance(text)) {
    document.body.innerHTML = text;
} else {
    document.body.innerHTML = 'Баланс дужок не дотримується';
}

document.addEventListener('contextmenu', event => event.preventDefault());

// -------------- Задача №15 --------------

function generatePassword() {
  let password = "";
  let uppercaseCount = 0;
  let digitCount = 0;
  let underscoreAdded = false;
  let length = Math.floor(Math.random() * (20 - 6 + 1)) + 6;

  while (password.length < length) {
    let charType = Math.floor(Math.random() * 4);

    if (charType === 0 && !underscoreAdded) {
      password += "_";
      underscoreAdded = true;
    } else if (charType === 1 && uppercaseCount < 2) {
      password += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
      uppercaseCount++;
    } else if (charType === 2 && digitCount < 5 && !(password.length > 0 && /\d/.test(password[password.length - 1]))) {
      password += Math.floor(Math.random() * 10);
      digitCount++;
    } else {
      password += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
    }
  }

  return password;
}

let password = generatePassword();
console.log(password);

// -------------- Задача №16 --------------

function rearrangeArray(arr) {
	let result = [];
	let start = 0;
	let end = arr.length - 1;
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		 if (i % 2 === 0) {
			  result[start] = arr[i];
			  start++;
		 } else {
			  result[end] = arr[i];
			  end--;
		 }
	}
	return result;
}

let exampleArray = [1,2,3,4,5,6,7,8,9,10];
console.log(rearrangeArray(exampleArray));

// -------------- Задача №17 --------------

function sortByFrequency(str) {
	let frequency = {};
	for (let char of str) {
		 if (frequency[char]) {
			  frequency[char]++;
		 } else {
			  frequency[char] = 1;
		 }
	}
	let sortedChars = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
	let result = "";
	for (let char of sortedChars) {
		 result += char.repeat(frequency[char]);
	}
	return result;
}

let exampleString = "hello world";
console.log(sortByFrequency(exampleString));

// -------------- Задача №18 --------------

function longestCommonSubstring(str1, str2) {
	let result = "";
	let matrix = [];
	for (let i = 0; i <= str1.length; i++) {
		 matrix[i] = new Array(str2.length + 1).fill(0);
	}
	for (let i = 1; i <= str1.length; i++) {
		 for (let j = 1; j <= str2.length; j++) {
			  if (str1[i - 1] === str2[j - 1]) {
					matrix[i][j] = matrix[i - 1][j - 1] + 1;
					if (matrix[i][j] > result.length) {
						 result = str1.slice(i - matrix[i][j], i);
					}
			  }
		 }
	}
	return result;
}

let examString1 = "hello";
let examString2 = "world";
console.log(longestCommonSubstring(examString1, examString2)); 

// -------------- Задача №19 --------------

function caesarCipher(str, shift) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	for (let char of str) {
		 let index = alphabet.indexOf(char.toLowerCase());
		 if (index === -1) {
			  result += char;
		 } else {
			  let newIndex = (index + shift) % alphabet.length;
			  if (newIndex < 0) {
					newIndex += alphabet.length;
			  }
			  let newChar = alphabet[newIndex];
			  if (char === char.toUpperCase()) {
					newChar = newChar.toUpperCase();
			  }
			  result += newChar;
		 }
	}
	return result;
}

let exampleString19 = "Hello, World!";
let exampleShift = 3;
console.log(caesarCipher(exampleString19, exampleShift));

// -------------- Задача №20 --------------

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		 return false;
	}
	let frequency1 = {};
	let frequency2 = {};
	for (let char of str1) {
		 frequency1[char] = (frequency1[char] || 0) + 1;
	}
	for (let char of str2) {
		 frequency2[char] = (frequency2[char] || 0) + 1;
	}
	return Object.keys(frequency1).every(key => frequency1[key] === frequency2[key]);
}

let exampString1 = "listen";
let exampString2 = "silent";
console.log(isAnagram(exampString1, exampString2));


// -------------- Задача №21 --------------

class University {
	constructor() {
		 this.students = [];
	}

	addStudent(student) {
		 this.students.push(student);
	}

	removeStudent(id) {
		 this.students = this.students.filter(student => student.id !== id);
	}

	getStudentById(id) {
		 return this.students.find(student => student.id === id);
	}

	getStudentsByCourse(course) {
		 return this.students.filter(student => student.course === course);
	}

	getStudentsByFaculty(faculty) {
		 return this.students.filter(student => student.faculty === faculty);
	}
}

let university = new University();
university.addStudent({id: 1, name: "Alex", course: 1, faculty: "Computer Science"});
university.addStudent({id: 2, name: "Sem", course: 2, faculty: "Mathematics"});
university.addStudent({id: 3, name: "Charlie", course: 1, faculty: "Computer Science"});
console.log(university.getStudentById(1));
console.log(university.getStudentsByCourse(2));
console.log(university.getStudentsByFaculty("Computer Science")); 
university.removeStudent(1);
console.log(university.getStudentById(1)); 

// -------------- Задача №22 --------------

function analyzeText(text) {
	let wordCount = text.match(/\b\w+\b/g).length;
	let sentenceCount = text.match(/\b[^.!?]+\b[.!?]/g).length;
	let characterCount = text.length;
	let frequency = {};
	for (let word of text.match(/\b\w+\b/g)) {
		 if (frequency[word]) {
			  frequency[word]++;
		 } else {
			  frequency[word] = 1;
		 }
	}
	let mostFrequentWords = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]).slice(0, 3);
	return {
		 wordCount,
		 sentenceCount,
		 characterCount,
		 mostFrequentWords
	};
}

let exampleText = "Since its inception, Sigma Software has been focused on delivering the solutions that address our clients business needs in full, on time, and on budget. We constantly extend our offers, optimize delivery processes, and master new cutting-edge technologies to reach this end.";
console.log(analyzeText(exampleText));

