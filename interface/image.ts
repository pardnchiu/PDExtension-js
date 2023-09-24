interface Image {
	// 產生 JPEG 圖片的 base64 編碼
	$jpg: (size: number) => string;
	// 產生 PNG 圖片的 base64 編碼
	$png: (size: number) => string;
	// 產生圖片的 base64 編碼（可以指定 MIME 類型，默認為 image/jpeg）
	$base64: (mime?: string) => string;
	// 產生圖片的 Blob 物件（可以指定 MIME 類型，默認為 image/jpeg）
	$blob: (mime?: string) => string;
	// 下載 JPEG 格式的圖片
	_downloadJPG: (filename?: string) => void;
	// 下載 PNG 格式的圖片
	_downloadPNG: (filename?: string) => void;
};