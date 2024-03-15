/*1. Напсиать ф-ию которая переворачивает строку*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("olleH")); // Hello - DONE

/*2.FizzBuzz: написатть функцию для чисел от 1 до n: если число делится на 3 возвращать Fizz, если число делится на 5 возвращать Bizz, если на 3 и на 5 возвращать FizzBizz */
function getFizzBuzz(num) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str += "FizzBuzz\n";
    } else if (i % 3 === 0) {
      str += "Fizz\n";
    } else if (i % 5 === 0) {
      str += "Buzz\n";
    } else {
      //если ничего не подходит возвращаем текущее число
      str += i + "\n";
    }
  }
  return str;
}

console.log(getFizzBuzz(10)); //FizzBuzz,1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz - DONE

/*3.дан массив элементов и число, указывающее размер чанка. Необходимо написать функцию, которая разобьёт исходный массив на подмассивы (чанки) таким образом, чтобы каждый подмассив содержал не более указанного количества элементов.*/
function chunkArray(arr, chunkSize) {
  let newArr = [];
  //значение i увеличиваем на chunkSize после каждой иттерации
  for (let i = 0; i < arr.length; i += chunkSize) {
    let subArr = arr.slice(i, i + chunkSize);
    newArr.push(subArr);
  }
  return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], 5] - DONE

//DEBOUNCE 
// функция f, которая задебаунсена с задержкой в 1000 миллисекунд. Это значит, что после её вызова она подождет 1 секунду, прежде чем действительно выполниться. Если вы вызовете f еще раз до истечения этой секунды, она сбросит предыдущий таймер и начнет отсчет заново.
const f = debounce(console.log, 1000);
// устанавливается на 1000 мс
f(1);
//Почти сразу после этого происходит вызов f(2). Поскольку таймер уже был установлен предыдущим вызовом, он сбрасывается, и устанавливается новый таймер для вызова console.log(2) через 1000 мс. Первый вызов так и не был выполнен.
f(2);
//f(3) вызывается через 100 мс: это снова сбрасывает предыдущий таймер и устанавливает новый для console.log(3) на 1000 мс.
setTimeout(() => f(3), 100);
//f(4) вызывается через 500 мс (после первого вызова): ситуация повторяется – таймер сбрасывается, устанавливается новый таймер для console.log(4).
setTimeout(() => f(4), 500);
//f(5) вызывается через 1100 мс (после первого вызова): на этот раз, поскольку прошло больше 1000 мс после последнего сброса таймера, вызов console.log(4) будет выполнен, а затем сразу устанавливается таймер для вызова console.log(5).
setTimeout(() => f(5), 1100);
function debounce(callback, delay) {
  let timer;
  return function (...args) {
    console.log(args)
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

//THROTTLE
const foo = throttle(console.log, 1000);
foo(1);
foo(2);
setTimeout(() => foo(3), 100);
setTimeout(() => foo(4), 500);
setTimeout(() => foo(5), 1100);

function throttle(callback, delay){
    let isWaiting = false;
    return function(...args){
        if(isWaiting){
            return
        }
        callback.apply(this, args);
        isWaiting = true
        setTimeout(()=>{
            isWaiting = false
        },delay)
    }
}
