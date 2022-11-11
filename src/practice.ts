
  let count = 0; //숫자
  count += 1;

  const messege: string = 'hello';

  const done: boolean = true;

  const numbers: number[] = [1, 2, 3];

  const messeges: string[] = ['hello', 'world'];

  messeges.push('typescript');

  let mightBeUndefined: string | undefined = undefined; //string 일수도 있고 undefined 일수도 있음

  let nullableNumber: number | null = null; //number 일수도 있고 null 일수도 있음

  let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
  color = 'yellow';
  // color = 'green'; // 에러 발생

  function sum(a: number, b: number): number {
    return a + b;
  }
  sum(1, 2);

  function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  const total = sumArray([1, 2, 3, 4, 5]);

  function returnNothing(): void {
    console.log('I am studing');
  }

  interface Shape{
    getArea(): number;
  }

  export{};
