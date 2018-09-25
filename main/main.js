module.exports = function main(s) {
	// inout = '123';
	var sum = 0;
	for (var i = 0; i <= s.length; i++) {
		sum += Number(s.charAt(i));
	}
	return sum;
}