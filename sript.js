/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

const utopianTree = (n) =>{
    let height = 1;
    for(let i = 1; i <= n; i++) {
        const isEvenCycle = i % 2 === 0;
        if(isEvenCycle) {
            height ++;
            console.log(i, 'growthCycle =', height);
        } else {
            height *= 2;
            console.log(i, 'growthCycle =', height);
        }
    }
    
    console.log(height);
    return height;
}
