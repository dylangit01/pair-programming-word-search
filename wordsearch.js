const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    let reversedW = word.split('').reverse().join('');
    const transposed = transpose(letters);
    //console.log(transposed);
    
    const horizontalJoin = letters.map((ls) => ls.join(''));
    const verticalJoin = transposed.map((ls) => ls.join(''));

    for (const line of horizontalJoin) {
        if (line.includes(word) || line.includes(reversedW)) return true;
    }

    for (const line of verticalJoin) {
      if (line.includes(word)|| line.includes(reversedW)) return true;
    }
    

    return false;

};

const transpose = function (matrix) {
  let resArr = [];
  for (let i in matrix[0]) {
    resArr.push([]);
    };
  for (let i in matrix) {
    for (let j in matrix[i]) {
      resArr[j].push(matrix[i][j]);
    }
  }
  return resArr;
};


module.exports = wordSearch;
