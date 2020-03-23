/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  stack.push(-1);
  let maxarea = 0;
  for (let i = 0; i < heights.length; i++) {
    console.log(heights[stack[stack.length - 1]]);
    console.log(heights[i]);
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      console.log(
        heights[stack[stack.length - 1]] * (i - stack[stack.length - 2] - 1)
      );
      maxarea = Math.max(
        maxarea,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      );
    }
    stack.push(i);
  }

  while (stack[stack.length - 1] !== -1) {
    console.log(
      heights[stack[stack.length - 1]] *
        (heights.length - stack[stack.length - 1] - 1)
    );
    maxarea = Math.max(
      maxarea,
      heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
    );
  }

  return maxarea;
};

largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]);
