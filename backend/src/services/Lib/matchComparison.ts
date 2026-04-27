import { wordcounterType } from './wordCounter';
/**
 * @typed {word: "collaborate",values: {source:1,target:0},match: true} ComparisonType
 */
/**

/**
 *this function loops through the target object literal, it checks the source object to see if source contains the keys from target, if it does a temp object with word, the count values from each object and whether they match are created as key value pairs. if they value (which is the count) for each word is the same number match is assigned true, otherwise it is assigned false. if the word from the target object is not in the source object the count value for source is set to 0 and match is assigned false by default. 
 * @param {Source, target} 'wordcounterType' - the result value from the wordCounter function.
 * @returns {ComparisonType[]} comparisonsArr - an array of containing many objects of type comparisonsArr
 */

type WordCounts = {
  source: number;
  target: number;
};
type ComparisonType = {
  word: string;
  counts: WordCounts;
  match: boolean;
};

export const matchComparison = (source: wordcounterType, target: wordcounterType) => {
  const comparisonsArr: ComparisonType[] = [];

  for (const [key, value] of Object.entries(target)) {
    let tempObj: ComparisonType;
    //if the source array has the word from the target array
    if (Object.hasOwn(source, key)) {
      //if the value from source array matches the value from the target array set match to true else to false
      const match: boolean = value === source[key];

      tempObj = { word: key, counts: { source: source[key], target: value }, match: match };
      comparisonsArr.push(tempObj);
    } else {
      //the source array doesn't have the word from the target array so set the source value to 0 and match false by default;
      tempObj = { word: key, counts: { source: 0, target: value }, match: false };
      comparisonsArr.push(tempObj);
    }
  }
  return comparisonsArr;
};
