console.log("Task_1");
for (let i = 1; i <= 50; i++) {
	console.log(i);
}
console.log("----------" + "\n");
for (let index = 35; index >= 8; index--) {
	console.log(index);
}

console.log("Task_2");
let i = 90;
while (i > 11) {
	i--;
	document.write (i + "<br>")
}

console.log("Task_3");
let sum = 0;
for (let index = 0 ; index <= 100; index++) {
	sum += index;
}
console.log("Сумма чисел:" + sum);

console.log("Task_4");
for (let i = 1; i <= 5; i++) {
	sum = 0;
	for (let h = 1; h <= i; h++) {
		sum += h;
	}
	console.log(sum);
}

console.log("Task_5");
for (let i = 8; i <= 56; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

let u = 7;
while (u <= 56) {
	u++;
	if (u % 2 == 0) {
		console.log(u);
	}
}

console.log("Task_6");
for (let i = 2; i <= 9; i++) {
	for (let j = 1; j <= 9; j++) {
		x = i * j;
		console.log(i + "*" + j + "=" + x);
	}
}

console.log("Task_7");
let n = 1000,
	num;
for (num = 1; ; num++) {
	n /= 2;
	if (n/2 <= 50) 
	break;
}
console.log(n);
console.log('Количество итераций =' + num);

console.log("Task_8");
let str;
sum = 0;
for (i = 1; ; i++) {
	str = prompt('8задание. Введите число:');
	sum += Number(str);
	if (str == 0 || str == null) {
		break;
	} else if (isNaN(str)) {
		alert('Ошибка, введите число:');
		break;
	}
}
if (!isNaN(str)) {
	alert('Сумма введённых чисел' + sum);
	alert('Cреднее арифметическое чисел' + sum / (i-1))
}

console.log("Task_9");
let s = '3 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arr = s.split(' '),
    max = arr[0],
    min = arr[0];
console.log(arr);
for (i = 0; i <= arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	} else if (arr[i] < min) {
		min = arr[i];
	}
}
console.log('минимальное значение' + min);
console.log('максимальное значение' + max);

console.log("Task_10");
let p = '';
n = prompt('10 заданиею ВВедите число:');
sum = 0;
if (isFinite(n)) {
	alert(n.split(''));
	alert('Количество цифр:' + n.length);
	while (n > 0) {
		sum += n % 10;
		p += n % 10;
		n = Math.floor(n / 10);
	}
	alert('Сумма цифр: ' + sum);
	alert('Обратный порядок цифр: ' + p);
} else {
	alert('Ошибка, введите число: ');
}

















