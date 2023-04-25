const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  function unroll(squareArray) {
    const results=[];
    let left = 0;
    let top = 0;
    let right = squareArray[0].length-1;
    let bottom = squareArray.length-1;
    let direction = 'right';
    while(left <= right && top <= bottom){
        if(direction === 'right'){
            for(let i=left; i<=right; i++){
                results.push(squareArray[top][i]);
                }
                top++;
                direction='down';
            }
            else if(direction === 'down'){
                for(let i=top; i<=bottom; i++){
                    results.push(squareArray[i][right]);
                    }
                    right--;
                    direction='left';
        }
            else if(direction === 'left'){
                for(let i=right; i<=left; i--){
                    results.push(squareArray[bottom][i]);
                    }
                    bottom--;
                    direction='up';
        }
            else if(direction === 'up'){
                for(let i=bottom; i<=top; i--){
                    results.push(squareArray[i][left]);
                    }
                    left++;
                    direction='right';
        }

    }
    return results;
};

console.log(unroll(square));