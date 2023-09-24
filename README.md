# PDExtension (JavaScript Library)

PDExtension contains a lightweight front-end framework designed to separate the front-end user interface and data logic.<br>
Improving code maintainability and readability while reducing development complexity.

## Info

- ### Separation of UI and Data Logic: 
  Segregates front-end presentation from data logic, creating a clearer structure and simplifying maintenance tasks.

- ### Reduction of Repetitive Code:
  Provides tools and utilities to minimize repetitive code sections, improving code conciseness.

- ### Improved Code Readability:
  Modular design enhances code readability, making it easier to understand and collaborate on.

- ### Data Change Monitoring:
  Automatically updates the user interface in real-time based on data changes, reducing manual DOM manipulation steps.

- ### Automatic Rendering:
  Reduces manual DOM manipulation, allowing you to focus more on the core logic of your application.

- ### Lightweight: 
  Lightweight in nature, minimizing unnecessary complexity and providing greater flexibility, allowing you to use it freely without framework constraints.

## Example

- [Website Template 25](https://github.com/pardnchiu/website-template-25)
- [Website Template 26](https://github.com/pardnchiu/website-template-26)

## Interface  

- [String](./interface/string.ts)
- [Number](./interface/number.ts)
- [Array](./interface/array.ts)
- [Object](./interface/object.ts)
- [Map](./interface/map.ts)
- [Date](./interface/date.ts)
- [URL](./interface/url.ts)
- [Element](./interface/element.ts)
- [Image](./interface/image.ts)

## Include
```HTML
<script src="PDExtension.min.js" copyright="Pardn Ltd"></script>
```

## $dom

| tag | description |
| --- | --- |
| {{value}} | Insert text into HTML tag and update the value based on data changes. |
| :path | Load HTML fragments from external files into the current page. |
| :html | Replace innerHTML of an element with text. |
| :for | Iterate through a data collection and generate corresponding HTML elements for repetitive data display.<br>Supports item in items, (item, index) in items, (key, value) in object. |
| :if<br>:else-if<br>:else | Show or hide elements based on specified conditions, adding multiple options for implementing branching logic. |
| :model | Bind data to form elements (e.g., input), automatically updating the data when input changes. |
| :[attr] | Set element attributes such as ID, class, image source, etc.<br>For example: :id/:class/:src/:alt/:href... |
| @[event] | Add event listeners to execute specified actions when events are triggered.<br>For example: @click/@input/@mousedown... |
| :@[event] | Set event handlers for individual elements within a loop, allowing different event handling for each element. |

Auto Rendering: Load auto-rendering and automatically render data changes after detection.

- ### :path / :html
  *Make sure to disable local file restrictions in your browser or use a live server when you are testing ':path'.*

  test.html
  
  ```html
  <h1>path heading</h1>
  <p>path content</p>
  ```
  
  index.html
  ```html
  <body id="app">
      <section :path="./test.html"></section>
      <section :html="html"></section>
  </body>
  <script>
      const app = new $dom({
          id: "app",
          data: {
              html: "<b>innerHtml</b>"
          }
      });
  </script>
  ```
  
  - Result
  
    ```html
    <body id="app">
        <h1>path heading</h1>
        <p>path content</p>
        <section>
            <b>innerHtml</b>
        </section>
    </body>
    ```

- ### :for

  ```html
  <body id="app">
      <ul>
          <li :for="(item, index) in ary" :id="item" :index="index">{{ item }} {{ index + 1 }}</li>
      </ul>
  </body>
  <script>
      const app = new $dom({
          id: "app",
          data: {
              ary: ["test1", "test2", "test3"]
          }
      });
  </script>
  ```
  
  - Result
  
    ```html
    <body id="app">
        <li id="test1" index="0">test1 1</li>
        <li id="test2" index="1">test1 2</li>
        <li id="test3" index="2">test1 3</li>
    </body>
    ```

- ### :for (Multiple)

  ```html
  <body id="app">
  <ul>
      <li :for="(key, val) in obj">
          {{ key }}: {{ val.name }}
          <ul>
              <li :for="item in val.ary">
                  {{ item.name }}
                  <ul>
                      <li :for="(item1, index1) in item.ary1">
                          {{ index1 + 1 }}. {{ item1.name }} - {{ item1.price }}元
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
  </ul>
  </body>
  <script>
      const app = new $dom({
          id: "app",
          data: {
              obj: {
                  food: {
                      name: "食品",
                      ary: [
                          {
                              name: '零食',
                              ary1: [
                                  { name: '薯片', price: 10 },
                                  { name: '巧克力', price: 8 }
                              ]
                          },
                          {
                              name: '飲料',
                              ary1: [
                                  { name: '果汁', price: 5 },
                                  { name: '茶', price: 3 }
                              ]
                          }
                      ]
                  },
                  home: {
                      name: '家居',
                      ary: [
                          {
                              name: '家具',
                              ary1: [
                                  { name: '沙發', price: 300 },
                                  { name: '桌子', price: 150 }
                              ]
                          },
                          {
                              name: '裝飾',
                              ary1: [
                                  { name: '畫框', price: 20 },
                                  { name: '花瓶', price: 15 }
                              ]
                          }
                      ]
                  }
              }
          }
      });
  </script>
  ```
  
  - Result
  
    ```html
    <body id="app">
    <ul>
        <li>food: 食品
            <ul>
                <li>零食
                   <ul>
                        <li>1. 薯片 - 10元</li>
                        <li>2. 巧克力 - 8元</li>
                    </ul>
                    </li>
                <li>飲料
                    <ul>
                        <li>1. 果汁 - 5元</li>
                        <li>2. 茶 - 3元</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>home: 家居
            <ul>
                <li>家具
                    <ul>
                        <li>1. 沙發 - 300元</li>
                        <li>2. 桌子 - 150元</li>
                    </ul>
                </li>
                <li>裝飾
                    <ul>
                        <li>1. 畫框 - 20元</li>
                        <li>2. 花瓶 - 15元</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    </body>
    ```

- ### :if

  ```html
  <body id="app">
      <h1 :if="heading == 1">{{ title }} {{ heading }}</h1>
      <h2 :else-if="isH2">{{ title }} {{ heading }}</h2>
      <h3 :else-if="heading == 3">{{ title }} {{ heading }}</h3>
      <h4 :else>{{ title }} {{ heading }}</h4>
  </body>
  <script>
      const app = new $dom({
          id: "app",
          data: {
              heading: [Number|null],
              isH2: [Boolean|null],
              title: "test"
          }
      });
  </script>
  ```
  
  - heading = 1
  
    ```html
    <body id="app">
        <h1>test 1</h1>
    </body>
    ```
  
  - heading = null<br>
    isH2 = true
  
    ```html
    <body id="app">
        <h2>test </h2>
    </body>
    ```
  
  - heading = 3<br>
    isH2 = null
  
    ```html
    <body id="app">
        <h3>test 3</h3>
    </body>
    ```
  
  - heading = null<br>
    isH2 = null
  
    ```html
    <body id="app">
        <h4>test </h4>
    </body>
    ```

- ### @event

  ```html
  <body id="app">
      <button @click="test">test</button>
  </body>
  <script>
      const app = new $dom({
          id: "app",
          event: {
              test: function(){
                  console.log(this);
              }
          }
      });
  </script>
  ```

- ### Rendering completed

  ```html
  <body id="app"></body>
  <script>
      const app = new $dom({
          id: "app",
          next: function () {
              console.log("Rendering completed");
          }
      });
  </script>
  ```

## Element Extension

```javascript
let section = document.createElement("section");
section.id = "#test";
document.body.appendChild(section);

let button = document.createElement("button");
button.style.width = "10rem";
button.style.height = "2rem";
button.style.backgroundColor = "steelblue";
button.style.color = "fff";
button.onclick = function(){
    alert("test")
};
button.innerHTML = "<span>test</span> button";
section.appendChild(button);

let svg = document.createElement("span");
span.classList.add("svg");
span.setAttribute("path", "https://xxxxxx");
section.appendChild(span);

let img = document.createElement("img");
img.classList.add("lazyload");
img.dataset.src = "https://xxxxxx";
section.appendChild(img);

let input = document.createElement("input");
input.placeholder = "輸入你的內容";
input.type = "email";
section.appendChild(input);
```

```javascript
document.body._child(
    "section#test"._([
        "button"._({
            style: {
                width: "10rem",
                hright: "2rem",
                backgroundColor: "steelblue",
                color: "#fff"
            }
        })._click(function(){
            alert("test")
        }, [
            // or "<span>test</span> button"
            "span"._("test"),
            " button"
        ]),
        "span.svg:._({ path: "https://xxxxxx" }),
        // 無 Lazy Loading => "img"._("https://xxxxxx"),
        "img"._({ lazyload: "https://xxxxxx" }),
        "input@email 輸入你的內容"._()
    ])
);

// 添加 SVG Listener, 轉換 span.svg 至 svg 標籤
_SVGListener();

// 添加 Lazy Listener, Lazy Loading 圖片
_LazyListener();
```

### Get Element

```javascript
document.getElementById("test");
document.querySelector("div.test");
document.querySelectorAll("div.test");
document.querySelector("input[name='test']");
```

```javascript
"#test".$;
"div.test".$;
"div.test".$all;
"input[name='test']".$;
```

### Add Element

```html
<div class="test" style="width: 5rem; height: 80px;" test="test">
    <button>
        <img src="https://xxxxxx">
    </button>
</div>
```

```Javascript
"div.test"._({
    style: {
        width: "5rem",
        height: 80,
    },
    test: "test"
}, [
    "button"._([
        "img"._("https://xxxxxx")
    ])
]);
```

***

©️ 2023 [Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
