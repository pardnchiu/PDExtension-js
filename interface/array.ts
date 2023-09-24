interface Array<T> {
    // 返回陣列的長度。
    $len: number;
    // 將陣列轉換為 Map 並返回，其中 Map 的鍵是陣列的元素，值是元素的索引。
    $map: Map<any, number>;
    // 返回隨機排序的陣列，將陣列中的元素隨機排列。
    $random: any[];
    // 檢查陣列是否為空，返回布林值。
    $$mt: boolean;

    /**
     * 將值添加到陣列中，可以是單個值或陣列。
     * 例如：[123]._("123"); 返回 [123, "123"];
     * 例如：[123]._([456, 789]); 返回 [123, 456, 789];
     */
    _: (value?: any | any[]) => any[];
    /**
     * 根據提供的函數對陣列中的每個元素進行轉換，並返回轉換後的新陣列。
     * 例如：["test1", "test2", "test3"]._$((e, i) => { name: e, index: i });
     * 返回 [
     * 		{ name: "test1", index: 0 },
     * 		{ name: "test2", index: 1 },
     * 		{ name: "test3", index: 2 }
     * ];
     */
    _$: (value?: (e: any, i: number) => any) => any[];
    /**
     * 按索引返回陣列中的元素。如果索引為負數，則從末尾開始計算。
     * 例如：["test1", "test2", "test3"].$(0); 返回 "test1";
     * 例如：["test1", "test2", "test3"].$(-1); 返回 "test3";
     */
    $: (index?: number) => any;
    // 返回指定值在陣列中的第一個出現的索引，如果沒有找到則返回 -1。
    $i: (value?: any) => number;
    // 將陣列中的元素連接成一個字串，可指定連接字元。
    $str: (char?: string) => string;
    // 將陣列轉換為 URL 並根據提供的配置發送 HTTP 請求。 
    $req: (body: { [key: string]: string }) => void;
    // 根據索引從陣列中刪除元素，並返回修改後的陣列。
    $_: (index?: number) => any[];
    // 檢查陣列中是否包含指定的值，返回布林值。
    $$: (value: any) => boolean;
};