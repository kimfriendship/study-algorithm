// 문제 요약
// nums 배열 중 두 개의 요소 값을 더해서 합이 target이 되는 index를 배열에 담아 반환해야 한다.
// 이 때, 단 한 쌍의 조합만이 답이 될 수 있다고 가정한다.
// 같은 요소를 두 번 사용할 수 없다.
// 반환하는 배열 안의 index 순서는 상관 없다.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const solution1 = function (nums, target) {
  // pointer를 start, end 두 개 만든다.
  // start는 0번 째를, end는 1번 째를 가리킨다.
  // while문은 start가 (nums.length - 2)번 째 요소를 가리킬 때까지 돈다.
  // end가 오른쪽으로 한 칸씩 움직이며 start와의 합이 target인지 확인한다.
  // end는 마지막 요소에 다다르면, start는 자신의 다음 요소를 가리키고 end는 (start + 1)번 째를 가리키게 된다.

  let start = 0;
  let end = 1;

  while (start < nums.length - 1) {
    if (nums[start] + nums[end] === target) break;
    if (end === nums.length - 1) {
      start++;
      end = start + 1;
    } else {
      end++;
    }
  }

  return [start, end];
  // Runtime: 76 ms, faster than 82.52% of JavaScript online submissions for Two Sum.
  // Memory Usage: 38.8 MB, less than 38.23% of JavaScript online submissions for Two Sum.
};

const solution2 = function (nums, target) {
  // map을 사용한다.
  // for문을 i가 nums.length - 1일 때까지 돈다.
  // map에 target - nums[i] 값이 있는지 확인한다.
  // 있으면 반환하고, 없으면 i 값을 map에 추가한다.

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }

  // Runtime: 72 ms, faster than 93.91% of JavaScript online submissions for Two Sum.
  // Memory Usage: 38.8 MB, less than 52.01% of JavaScript online submissions for Two Sum.
};

const solution3 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  // Runtime: 76 ms, faster than 82.52% of JavaScript online submissions for Two Sum.
  // Memory Usage: 38.8 MB, less than 52.01% of JavaScript online submissions for Two Sum.
};
