(cur / 60).toString().padStart(2, '0')
String(single_digit).padStart(2, '0'); 

function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}
