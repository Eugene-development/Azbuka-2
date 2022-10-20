const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e3cc718e.js","imports":["_app/immutable/start-e3cc718e.js","_app/immutable/chunks/index-ff38dbb9.js","_app/immutable/chunks/singletons-73e446b9.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-88f8b50d.js'),
			() => import('./chunks/1-1e02dbe8.js'),
			() => import('./chunks/2-19ac685e.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "api/test",
				pattern: /^\/api\/test\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./chunks/_server-5ef162da.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
