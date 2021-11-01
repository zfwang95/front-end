let line
while (line = readline()) {
    const [N, M] = line.trim().split(" ").map(Number) //trim()去除字符串首尾空格
    const arr = []
    for (let i = 0; i < N; i++) {
        arr[i] = readline().trim().split(" ").map(Number)
    }

    let res = []
    judge(0, 0)

    function judge(row, column) {
        // 走到边界
        if ((row === N) || (column === M) || (row === -1) || (column === -1)) {
            return false
        }

        // 走到墙壁
        if (arr[row][column] === 1) {
            return false
        }

        // 走回头路
        if (res.includes(`(${row},${column})`)) {
            return false
        }

        // 走到终点
        if ((row === N - 1) && (column === M - 1)) {
            res.push(`(${row},${column})`)
            return true
        }

        res.push(`(${row},${column})`)

        // 下右上左
        if (judge(row + 1, column) || judge(row, column + 1) || judge(row - 1, column) || judge(row, column - 1)) {
            return true
        } else {
            res.pop()
            return false
        }
    }

    for (const x of res) {
        console.log(x);
    }
}

while (line = readline()) {
  let [r, c] = line.split(' ').map(Number);
  let maze = [];
  for (let i = 0; i < r; i++) {
      let row = readline();
      maze.push(row.split(' '));
  }
  let res = [];
  judge(0, 0);
  
  function judge(row, column) {
      if (row >= r || row < 0 || column >=c || column < 0) {
          return false;
      }
      if (maze[row][column] === '1') {
          return false;
      }
      let move = `(${row},${column})`;
      if (res.includes(move)) {
          return false;
      }
      if (row === r && column === c) {
          res.push(move);
          return true;
      }
      res.push(move);
      if (judge(row - 1, column) || judge(row + 1, column) || judge(row, column + 1) || judge(row, column - 1)) {
          return true;
      } else {
          return false;
      }
  }
  for (let i = 0; i < res.length; i++) {
      console.log(res[i]);
  }
}






//////////////////////////////////////
let first = 'ixfkieaaocalmxhfifyadnouljtezrnpnfoenespcaenyvzcjtppsaxegmeytqrkvdwugvouskcnnqnmhepquncvyvgkansquaotkgvlvplktrabaikeuubfupunpztpvvzdqaqgfmtzxlcxsipltzwjegpqjzclclvjsmqbmiyzvcujpvhupyhvhhjq';
let second = 'ganxioafstgdpceecubqrngumbpjvwxdpzmragsunvfnmejbcvsoydtbbewybygpsmmyjuvezn';
let count = 0;
manage(first, second);
function manage(s1, s2) {
    let maxSub = '';
    let maxLen = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = i + 1; j <= s1.length; j++) {
            let subStr = s1.slice(i, j);
            if (s2.includes(subStr) && subStr.length > maxLen) {
                maxSub = subStr;
                maxLen = subStr.length;
            }
        }
    }
    if (maxLen === 0) {
        console.log('count:', count)
        count += Math.max(s1.length, s2.length);
//         return null;
    } else {
        console.log(maxSub);
        let left1 = s1.slice(0, s1.indexOf(maxSub));
        let left2 = s2.slice(0, s2.indexOf(maxSub));
        let right1 = s1.slice(s1.indexOf(maxSub) + maxLen, s1.length);
        let right2 = s2.slice(s2.indexOf(maxSub) + maxLen, s2.length);
        manage(left1, left2);
        manage(right1, right2);
    }
}
console.log(count);