function unroll(squareArray) {
    const result=[];
    let left = 0;
    let top = 0;
    let right = squareArray[0].length-1;
    let bottom = squareArray.length-1;
    let direction = 'right';
    while(left <= right && top <= bottom){
        if(direction === 'right'){
            for(let i=left; i<=right; i++){
                result.push(squareArray[top][i]);
                }
                top++;
                direction='down';
            }
            else if(direction === 'down'){
                for(let i=top; i<=bottom; i++){
                    result.push(squareArray[i][right]);
                    }
                    right--;
                    direction='left';
        }
            else if(direction === 'left'){
                for(let i=right; i<=left; i--){
                    result.push(squareArray[bottom][i]);
                    }
                    bottom--;
                    direction='up';
        }
            else if(direction === 'up'){
                for(let i=bottom; i<=top; i--){
                    result.push(squareArray[i][left]);
                    }
                    left++;
                    direction='right';
        }

    }
    return result;
};

