function reverseArray(xs) {
	var ys = [], count = 0;
	for (var count = 0; count < xs.length; count++)
		ys.unshift(xs[count]);
	return ys;
}

xs = [];
for (count = 0; count < 10000; count++)
	xs.push(count);
reverseArray(xs);
// Slower than 'reverseArrayInPlace', but doesn't blow up the stack.
// real	0m1.744s
// user	0m1.734s
// sys	0m0.010s

