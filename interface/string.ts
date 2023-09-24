interface String {
	// 返回字符串長度。
	$len: number;
	/**
	 * 將字符串轉換為數字並返回結果。
	 * ex. '1,000'.$num; 返回 1000;
	 * ex. 'test'.$num; 返回 0;
	 */
	$num: number;
	/**
	 * 將字符串轉換為JSON對象並返回結果。
	 * ex. '{ "test": "1" }'.$json; 返回 { test: "1" };
	 * 如果字符串不是有效的JSON，則返回空對象。
	 * ex. 'test'.$json; 返回 {};
	 */
	$json: JSON;
	/**
	 * 將字符串轉換為HTML字符。
	 * ex. '<div>test</div>'.$html; 返回 &lt;div&gt;test&lt;/div&gt;
	 */
	$img: Promise<any>;
	$html: string;
	// 檢查字符串是否可以解析為有效的JSON，返回布林值。
	$$json: boolean;
	// 檢查字符串是否為空。
	$$mt: boolean;

	// 使用提供的目標（字符串或正則表達式）替換字符串的內容。
	__: (target?: string | RegExp, replace?: string) => string;
	/**
	 * 使用指定的分隔符（字符串或正則表達式）將字符串拆分為數組。
	 * ex. "test1,test2,test3".$ary(","); 返回 ["test1", "test2", "test3"];
	 * ex. "text1, test2.test3".$ary(/[\,\.\s]+/); 返回 ["text1", "test2", "test3"];
	 */
	$ary: (char?: string | RegExp) => string[];
	// 將字符串轉換為正則表達式。
	$regexp: (flags?: string) => RegExp;
	/**
	 * 將字符串轉換為URL並根據提供的配置發送HTTP請求。 
	 * ex. 
	 * "URL".$req({
	 * 		method: "POST",
	 * 		json: { test: "test" },
	 * 		header: {
	 * 			"Content-Type": "application/json;charset=UTF-8"
	 * 		}
	 * }).then(res => {
	 * 		console.log("Success:", res);
	 * }).catch(err => {
	 * 		console.error("Error:", err);
	 * });
	 * 
	 * "URL".$req({
	 * 		method: "POST",
	 * 		json: { test: "test" },
	 * 		files: [FILES],
	 * 		tag: "files[]"
	 * }).then(res => {
	 * 		console.log("Success:", res);
	 * }).catch(err => {
	 * 		console.error("Error:", err);
	 * });
	 */
	$req: (body: { [key: string]: string }) => void;
	/**
	 * 比較字符串與目標（字符串或正則表達式）或檢查字符串是否為空。返回布林值。
	 * ex. "test".$$("test"); 返回 true;
	 * ex. "test".$$(/\./); 返回 false;
	 * ex. "test".$$(); 返回 true;
	 */
	$$: (equalTo?: String | RegExp) => boolean;
	// 將字符串轉換為URL並檢查是否可以成功連接。
	$$200: () => Promise<any>;

	/**
	 * 將字符串轉換為URL對象。
	 * ex. "https://joball.tw".$url; 等於 URL("https://joball.tw");
	 * ex. "/test".$url; 等於 URL("location.origin/test");
	 */
	$url: URL;
	// 以對象形式返回URL的搜索參數。
	$queryAll: { [key: string]: string };
	// 歷史記錄中添加新條目。
	_history: (title?: string) => URL;
	// 歷史記錄中替換當前條目。
	__history: (title?: string) => URL;
	// 從URL的查詢參數中刪除特定值。
	query_: (value?: string | string[]) => URL;
	// 清除URL的所有查詢參數。
	query__: (value?: string | string[]) => URL;
	// URL中添加或更新查詢參數。
	_query: (value?: { [key: string]: string }) => URL;
	// 替換URL中的查詢參數。
	__query: (value?: { [key: string]: string }) => URL;
	// 從URL中獲取特定查詢參數的值。
	$query: (key?: string) => string;

	/**
	 * 將字符串轉換為Font Awesome圖標元素。
	 * "fa-brands fa-font-awesome".$fa; 返回 <i class="fa-brands fa-font-awesome"></i>
	 */
	_fa: Element;
	/**
	 * 使用ID或CSS選擇器選擇單個DOM元素。
	 * "#test".$; 等於 document.getElementById("test");
	 * "div.test".$; 等於 document.querySelector("div.test");
	 */
	$: Element;
	/**
	 * 使用CSS選擇器選擇多個DOM元素。
	 * "div.test".$all; 等於 document.querySelectorAll("div.test");
	 */
	$all: Element[];
	/**
	 * 創建帶有可選屬性和子元素的新DOM元素。
	 * ex.
	 * document.body._child(
	 * 		"div#test"._({
	 * 			// setAttribute("test", "1")
	 * 			test: 1,
	 * 			onclick: function(){ 
	 * 				alert("test")
	 * 			},
	 * 			style: {
	 * 				backgroundColor: "red";
	 * 			}
	 * 		}, [
	 * 			"p.test"._({
	 * 				style: {
	 * 					color: "#fff"
	 * 				}
	 * 			}, "這是一個 id 為 test, 且背景為紅色, 文字為白色且文字 class 為 test 的可點選範例")
	 * 		]);
	 * );
	 */
	_: (val0?: any, val1?: any) => Element;
};
