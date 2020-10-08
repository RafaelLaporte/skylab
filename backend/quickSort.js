//Merge sort algorithm
function quickSort(vector, fnComp, start = 0, end = vector.length -1) {
    if (end > start) {
        let pivotPos = end;
        let divPos = start - 1;

        for(let i = start; i < end; i++) {
            if (fnComp(vector[i], vector[pivotPos])) {
                divPos++
                [vector[i], vector[divPos]] = [vector[divPos], vector[i]];
            }
        }
    

        divPos++
        [vector[divPos], vector[pivotPos]] = [vector[pivotPos], vector[divPos]];

        quickSort(vector, fnComp, start, divPos - 1)
        quickSort(vector, fnComp, divPos + 1, end)
    }
}