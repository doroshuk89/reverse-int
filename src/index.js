module.exports = function reverse (n) {
    
        //Function defactory
        const format = (data) => {
            // Get array in input data
            const arr = String(data).split('');
                if (arr[arr.length - 1] === '0') {
                    arr.pop();
                }
                if(arr[0] === '-') {
                    arr.shift();
                }
            return arr.reverse().join('');
        }

        const result = format(n);
    return result;
}
