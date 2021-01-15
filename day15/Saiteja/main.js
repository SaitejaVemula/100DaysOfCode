// you're given an array of size N, and number X, capacity C, and position P... you have to create functions for insertion
// and delete on array.

// Note: Array size is fixed, if capacity is full you can not insert into it. and for delete function you can't use
// position.

// Note: Don't use inbuilt methods

// eg: input: arr -> [10,20,30,40,50,60] X->70 Capactiy-->7 and position is 3
// output: [10,20,70,30,40,50,60]

function insertIntoArray(arr, insertNumber, capacity, position) {
    if(arr.length >= capacity) {
        console.log('Cannot insert any values into the array. Array is already full');
    } else {
        let tempArr = [];
        for(let i = 0; i < arr.length; i++)  {
            if(i === position - 1) {
                tempArr.push(insertNumber);
            }
            tempArr.push(arr[i]);
        }
        // console.log(arr, tempArr);
        arr = tempArr;
    }

    return arr;
}

function deleteFromArray() {

}