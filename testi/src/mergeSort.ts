interface FrequencyCounterProps {
  [key: string]: number;
}

type Collection<T> = T[] | string;

const toFrequencyCounter = <T = void>(
  data: Collection<T>
): FrequencyCounterProps => {
  let frequencyCounter = {} as FrequencyCounterProps;

  for (let val of data) {
    frequencyCounter[val as string] =
      (frequencyCounter[val as string] || 0) + 1;
  }

  return frequencyCounter;
};

console.log(toFrequencyCounter<number>([10, 20, 30, 20]));
console.log(toFrequencyCounter('Lassi Viitakoski'));
console.log(toFrequencyCounter(['10', 'll', 10, 'dsff', 'll']));
