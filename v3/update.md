#### Number

- $y: number    *(返回timestamp年份)*
- $M: number    *(返回timestamp月份, 1-12)*
- $MM: string   *(返回timestamp月份, 01-12)*
- $D: number    *(返回timestamp日期, 1-31)*
- $DD: string   *(返回timestamp日期, 01-31)*
- $d: number    *(返回timestamp星期, 0-6)*
- $dd: string   *(返回timestamp星期, 星期一-星期日)*
- $h: number    *(返回timestamp時, 0-23)*
- $hh: string   *(返回timestamp時, 00-23)*
- $m: number    *(返回timestamp分, 0-59)*
- $mm: string   *(返回timestamp分, 00-59)*
- $s: number    *(返回timestamp秒, 0-59)*
- $ss: string   *(返回timestamp秒, 00-59)*

#### Element

- data_()
- _data()

#### dom

- 新增 LENGTH() 函式
    若值 `data.array = [1, 2, 3, 4];`
    則會 `<p>共有 {{ LENGTH(array) }} 項</p>`
    輸出 `<p>共有 4 項</p>`