interface Map<K, V> {
	// 返回 Map 物件的 JavaScript 物件表示。
	$obj: { [key: string]: any };
	// 返回 Map 物件的數量。
	$len: number;
	// 檢查 Map 物件是否為空，返回布林值。
	$mt: boolean;

	// 用於將新的鍵值對添加到 Map 中。
	_: (key?: any, value?: any) => Map<any, any>;
	// 用於根據鍵檢索 Map 中的值。
	$: (key?: any) => any;
};