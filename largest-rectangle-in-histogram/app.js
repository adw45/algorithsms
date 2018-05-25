// Find the largest rectangle in a histogram
// Histogram = [1,2,3,4,6,1,2,6] (values correspond to height, values are all > 0 & integers)
// Function Header: function getLargestRectangleInHistogram(histogram)

// 1. Return the area of the histogram

// 2. Return the start and end coordinates

console.log(getLargestRectangleInHistogram([1,2,3,4,100,4,3,2,1]));
console.log(getLargestRectangleInHistogram([1, 2, 5, 9, 5, 3, 3, 3, 3]));

function getLargestRectangleInHistogram(histogram) {
    let stack = []
    let max;

    let i = 0;
    while (i < histogram.length) {
        if (stack.length === 0 || _.max(stack) <= histogram[i]){
            stack.push(i);
            i++;
        }
        else {
            let currentMax = stack.pop();
            let area = list[currentMax] * (stack.length > 0 ? (i-1): (i - 1) - _.max(stack));
        }
    }
}
