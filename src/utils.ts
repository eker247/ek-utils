export function invert(arr: any[], inName: string, inArray: string, outName: string, outArray: string) {
  const inverted: any[] = [];
  arr.forEach(ob => {
    ob[inArray].forEach((letter: any) => {
      // console.log('Value', ob[inName]);
      if (inverted[letter]) {
        if (!inverted[letter][outArray].find((it: Object) => it === ob[inName])) {
          inverted[letter] = { [outName]: letter, [outArray]: [...inverted[letter][outArray], ob[inName]] };
        }
      } else {
        inverted[letter] = { [outName]: letter, [outArray]: [ob[inName]] };
      }
    });
  });
  return inverted;
}


// const arr = [
//   { word: 'home', letters: ['h', 'o', 'm', 'e']},
//   { word: 'enterprise', letters: ['e', 'n', 't', 'e', 'r', 'p', 'r', 'i', 's', 'e']},
//   { word: 'henter', letters: ['h', 'e', 'n', 't', 'e', 'r']}
// ];

// const inverted = invert(arr, 'word', 'letters', 'letter', 'words');
// console.log('inverted', inverted);
