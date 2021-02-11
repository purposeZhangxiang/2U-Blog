# leetcode刷题日记

## 小偷分赃

``` js
/**
 * 有五个人偷了一堆苹果
 * 晚上有一个人出来把所有的苹果分成5份,但是多了一个,他就把这个苹果给树上的猴，自己先拿1/5藏了起来
 * 结果其他四人也是这么想的，都如第一个人一样把苹果分成5份,把多的一个分给猴子,藏了1/5
 * 第二天，大伙分赃，也是分成5份多一个给猴，最后一人一份。
 * 
 * 问题：求共有多少苹果？ 
 */


function calcTotal() {
    let total = 0; // 假设总数为total
    while (true) {
        total++;
        if (total % 5 === 1) {
            let surplus1 = total - Math.floor(total / 5) - 1;
            if (surplus1 % 5 === 1) {
                let surplus2 = surplus1 - Math.floor(surplus1 / 5) - 1;
                if (surplus2 % 5 === 1) {
                    let surplus3 = surplus2 - Math.floor(surplus2 / 5) - 1;
                    if (surplus3 % 5 === 1) {
                        let surplus4 = surplus3 - Math.floor(surplus3 / 5) - 1;
                        if (surplus4 % 5 === 1) {
                            let surplus5 = surplus4 - Math.floor(surplus4 / 5) - 1;
                            if (surplus5 % 5 === 1) {
                                console.log(total);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return total;
}

```

