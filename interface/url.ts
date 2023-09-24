interface URL {
	$queryAll: { [key: string]: string };

	_history: (title?: string) => URL;
	__history: (title?: string) => URL;
	query_: (value?: string | string[]) => URL;
	query__: (value?: string | string[]) => URL;
	_query: (value?: { [key: string]: string }) => URL;
	__query: (value?: { [key: string]: string }) => URL;
	$query: (key?: string) => string | null;
};