function reverseArrayInPlace(xs) {
	if (xs.length <= 1)
		return xs;
	else {
		var newFirst = xs.pop();
		var newLast  = xs.shift();
		reverseArrayInPlace(xs);
		xs.unshift(newFirst);
		xs.push(newLast);
		return xs;
	}
}

xs = [];
for (count = 0; count < 10000; count++)
	xs.push(count);
reverseArrayInPlace(xs);
// Faster than 'reverseArray', but exceeds the call stack size after certain limit.
// real	0m0.055s
// user	0m0.048s
// sys	0m0.006s

