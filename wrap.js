const wrap = (line, maxLen) => {
  let finalLine = "";
  let lineArr = line.split("");

  for (let i = 0; i < lineArr.length; i++) {
    console.log(lineArr[i], i, i % maxLen);
    console.log(finalLine);
    if (i % maxLen !== 0 || i === 0) finalLine += lineArr[i];
    else if (i % maxLen === 0 && lineArr[i] !== " ") {
      console.log(`we split on this char ${lineArr[i]}, right?`);
      finalLine += "\n" + lineArr[i];
    } else if (i % maxLen === 0 && lineArr[i] === " ") finalLine += "\n";

    //finalLine += line.slice(0, lastSlice);
  }

  return finalLine;
};

module.exports = wrap;
