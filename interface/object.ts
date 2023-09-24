interface Object {
	// 返回一個Map物件，其中包含了對象的所有鍵和值。
	$map: Map<string, any>;
	//  返回一個包含對象所有鍵的陣列。
	$keys: string[];
	//  返回一個包含對象所有值的陣列。
	$vals: any[];

	// 根據給定的鍵返回對象中的值，如果未指定鍵，則返回整個物件。
	$: (key?: string) => any;
	// 遍歷對象的每個鍵/值對，並對它們執行指定的操作。
	$forEach: (value: (key: string, val: any) => void) => void;
};