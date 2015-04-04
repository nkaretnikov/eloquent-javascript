xs = [];
for (count = 0; count < 10000; count++)
	xs.push(count);
xs.reverse();
// The fastest and doesn't blow up the stack on the same input as
// 'reverseArrayInPlace'.
// real	0m0.040s
// user	0m0.034s
// sys	0m0.006s

