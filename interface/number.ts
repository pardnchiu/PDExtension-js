interface Number {
	// 返回數字的字串表示形式。
	$str: string;
	// 返回了以秒為單位的數字的對應日期。
	$date: Date;
	/**
	 * 返回對應日期與當前時間的差距。
	 * 年/月/週/日/時/分/秒
	 * ex. 
	 * [NUMBER].$date;
	 * 若NUMBER小於當前時間一天, 則返回"還有1天"
	 * 若NUMBER大於當前時間一週, 則返回"1週前"
	 */
	$gone: string;

	// 用於從0到該數字之間的範圍內循環執行一個回調函數。
	$loop: (value: (i: number) => void) => void;
};