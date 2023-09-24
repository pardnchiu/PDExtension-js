interface Element {
	// 返回元素的 innerHTML。
    $: string;
    // 返回元素的 scrollLeft。
    $x: number;
    // 返回元素的 scrollTop。
    $y: number;
    // 返回元素的 clientWidth。
    $w: number;
    // 返回元素的 clientHeight。
    $h: number;
    // 返回元素的 scrollWidth。
    $sw: number;
    // 返回元素的 scrollHeight。
    $sh: number;
    // 返回元素的 naturalWidth。
    $nw: number;
    // 返回元素的 naturalHeight。
    $nh: number;
    // 返回子元素的數量。
    $len: number;
    // 返回在父元素中的索引。
    $i: number;
    // 返回元素的 classList 的陣列。
    $classAll: string[];
    // 返回元素的 attributes 的陣列。
    $attrAll: { [key: string]: string };
    // 返回子元素的陣列。
    $childAll: Element[];
    // 返回子節點的陣列。
    $nodeAll: ChildNode[];
    // 返回純文字的內容。
    $text: string;

    // 添加內容至元素的 innerHTML。
    _: (innerHTML?: string) => Element;
    // 覆蓋元素的 innerHTML 內容。
    __: (innerHTML?: string) => Element;
    // 複製元素。
    _$: (deep?: boolean) => Element;
    // 更新元素的 scrollLeft。
    _x: (value?: number) => Element;
    // 更新元素的 scrollTop。
    _y: (value?: number) => Element;
    // 更新元素的 style.width
    _w: (value?: number | string) => Element;
    // 更新元素的 style.height。
    _h: (value?: number | string) => Element;
    // 更新元素的內邊距: 上。
    _pt: (value?: number | string) => Element;
    // 更新元素的內邊距: 左。
    _pl: (value?: number | string) => Element;
    // 更新元素的內邊距: 下。
    _pb: (value?: number | string) => Element;
    // 更新元素的內邊距: 右。
    _pr: (value?: number | string) => Element;
    // 更新元素的外邊距: 上。
    _mt: (value?: number | string) => Element;
    // 更新元素的外邊距: 左。
    _ml: (value?: number | string) => Element;
    // 更新元素的外邊距: 下。
    _mb: (value?: number | string) => Element;
    // 更新元素的外邊距: 右。
    _mr: (value?: number | string) => Element;

    // 移除 class
    class_: (value?: string | string[]) => Element;
    // 清除 class
    class__: () => Element;
    /**
     * 添加 class
     * 例如：dom._class("test"); 設置 dom.classList.add("test");
     * 例如：dom._class("test1.test2"); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     * 例如：dom._class("test1 test2"); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     * 例如：dom._class(["test1", "test2"]); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     */
    _class: (value?: string | string[]) => Element;
    // 覆蓋 class
    __class: (value?: string | string[]) => Element;
    // 判斷 class 是否存在
    $$class: (value?: string) => boolean;
    // 假如 true 則移除 class
    $$class_: (bool?: boolean, value?: string | string[]) => Element;
    // 假如 true 則添加 class
    $$_class: (bool?: boolean, value?: string | string[]) => Element;

    // 移除 style
    style_: (key?: string | string[]) => Element;
    /**
     * 添加 style
     * 例如：dom._style({ backgroundColor: "red" }); 設置 dom.style.backgroundColor = "red";
     * 例如：dom._style({ backgroundColor: "red", color: "#fff" }); 設置 dom.style.backgroundColor = "red", dom.style.color = "#fff";
     */
    _style: (value?: { [key: string]: string }) => Element;
    // 取得 style
    $style: (key?: string) => string | undefined;

    // 移除 attribute
    attr_: (key?: string | string[]) => Element;
    /**
     * 添加 attribute
     * 例如：dom._attr({ test: 1 }); 設置 dom.setAttribute("test", "1");
     * 例如：dom._attr({ test1: 1, test2: 2 }); 設置 dom.setAttribute("test1", "1"), dom.setAttribute("test2", "2");
     */
    _attr: (value?: { [key: string]: string | number }) => Element;
    // 取得 attribute
    $attr: (key?: string) => string;
    // 判斷 attribute 是否存在
    $$attr: (key?: string) => boolean;

    // 添加元素
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before?: ChildNode | Element | number) => Element;
    // 覆蓋內容
    __child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => Element;
	/**
     * 取得子元素
     * 例如：dom.$child(0); // 取得第一個子元素;
     * 例如：dom.$child([0, 1]); // 取得第一個子元素中的第二個子元素;
     * 例如：dom.$child("button.add"); // 取得子元素中符合 button.add 的元素;
     * 例如：dom.$child([0, 1, "button.add"]); // 取得第一個子元素中的第二個子元素中符合 button.add 的元素;
     */
    $child: (value?: string | number | (string | number)[]) => Element | undefined;
    /**
     * 取得父元素
     * 例如：dom.$parent(); // 取得 dom.parentElement;
     * 例如：dom.$parent(1); // 取得 dom.parentElement.parentElement;
     */
    $parent: (layer?: number) => Element | undefined;
    /**
     * 取得前元素
     * 例如：dom.$pre(0); // 取得 dom.previousElementSibling;
     * 例如：dom.$pre(1); // 取得 dom.previousElementSibling.previousElementSibling;
     */
    $pre: (index?: number) => Element | undefined;
    /**
     * 取得後元素
     * 例如：dom.$next(0); // 取得 dom.nextElementSibling;
     * 例如：dom.$next(1); // 取得 dom.nextElementSibling.nextElementSibling;
     */
    $next: (index?: number) => Element | undefined;

    // 移除元素
    $rm: () => void;
    
    // 選擇器 querySelector
    $sel: (filter?: string) => Element | undefined;
    // 選擇器 querySelectorAll
    $selAll: (filter?: string) => Element[];

    /**
     * 設定 video 屬性
     * preload: "" | "none" | "metadata" | "auto";
     * loop: true | false;
     * muted: true | false;
     * controls: true | false;
     * playsinline: true | false;
     * download: true | false;
     * remote: true | false;
     */
    _video: (value: { [key: string]: any }) => Element;
    
    // 擴展 style
    _display: (value: string) => Element;
};