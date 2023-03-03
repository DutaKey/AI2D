"use strict";
var t = require("fs"),
	e = require("axios"),
	r = require("socks-proxy-agent"),
	n = require("https-proxy-agent"),
	a = require("async-retry");
function o(t) {
	return t && "object" == typeof t && "default" in t ? t : { default: t };
}
function i(t) {
	if (t && t.__esModule) return t;
	var e = Object.create(null);
	return (
		t &&
			Object.keys(t).forEach(function (r) {
				if ("default" !== r) {
					var n = Object.getOwnPropertyDescriptor(t, r);
					Object.defineProperty(
						e,
						r,
						n.get
							? n
							: {
									enumerable: !0,
									get: function () {
										return t[r];
									},
							  }
					);
				}
			}),
		(e.default = t),
		e
	);
}
var s = /*#__PURE__*/ o(t),
	u = /*#__PURE__*/ o(e),
	l = /*#__PURE__*/ o(r),
	c = /*#__PURE__*/ o(n),
	f = /*#__PURE__*/ o(a);
const h = new RegExp(
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi
	),
	d = { retries: 10, factor: 1 },
	p = (t) => {
		function e(t, e, n, a, o, i, s) {
			return r((e & n) | (~e & a), t, e, o, i, s);
		}
		function r(t, e, r, n, a, o) {
			return i(((s = i(i(e, t), i(n, o))) << (u = a)) | (s >>> (32 - u)), r);
			var s, u;
		}
		function n(t, e, n, a, o, i, s) {
			return r(n ^ (e | ~a), t, e, o, i, s);
		}
		function a(t, e, n, a, o, i, s) {
			return r(e ^ n ^ a, t, e, o, i, s);
		}
		function o(t, e, n, a, o, i, s) {
			return r((e & a) | (n & ~a), t, e, o, i, s);
		}
		function i(t, e) {
			var r = (65535 & t) + (65535 & e);
			return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
		}
		return (function (t) {
			var e,
				r,
				n = "0123456789abcdef",
				a = "";
			for (r = 0; r < t.length; r += 1)
				(e = t.charCodeAt(r)),
					(a += n.charAt((e >>> 4) & 15) + n.charAt(15 & e));
			return a;
		})(
			((s = `https://h5.tu.qq.com${((t = "") => {
				const e = encodeURIComponent(t).match(/%[89ABab]/g);
				return t.length + (e ? e.length : 0);
			})(JSON.stringify(t))}HQ31X02e`),
			(function (t) {
				return (function (t) {
					var e,
						r = "",
						n = 32 * t.length;
					for (e = 0; e < n; e += 8)
						r += String.fromCharCode((t[e >> 5] >>> e % 32) & 255);
					return r;
				})(
					(function (t, r) {
						var s, u, l, c, f;
						(t[r >> 5] |= 128 << r % 32), (t[14 + (((r + 64) >>> 9) << 4)] = r);
						var h = 1732584193,
							d = -271733879,
							p = -1732584194,
							g = 271733878;
						for (s = 0; s < t.length; s += 16)
							(u = h),
								(l = d),
								(c = p),
								(f = g),
								(h = e(h, d, p, g, t[s], 7, -680876936)),
								(g = e(g, h, d, p, t[s + 1], 12, -389564586)),
								(p = e(p, g, h, d, t[s + 2], 17, 606105819)),
								(d = e(d, p, g, h, t[s + 3], 22, -1044525330)),
								(h = e(h, d, p, g, t[s + 4], 7, -176418897)),
								(g = e(g, h, d, p, t[s + 5], 12, 1200080426)),
								(p = e(p, g, h, d, t[s + 6], 17, -1473231341)),
								(d = e(d, p, g, h, t[s + 7], 22, -45705983)),
								(h = e(h, d, p, g, t[s + 8], 7, 1770035416)),
								(g = e(g, h, d, p, t[s + 9], 12, -1958414417)),
								(p = e(p, g, h, d, t[s + 10], 17, -42063)),
								(d = e(d, p, g, h, t[s + 11], 22, -1990404162)),
								(h = e(h, d, p, g, t[s + 12], 7, 1804603682)),
								(g = e(g, h, d, p, t[s + 13], 12, -40341101)),
								(p = e(p, g, h, d, t[s + 14], 17, -1502002290)),
								(h = o(
									h,
									(d = e(d, p, g, h, t[s + 15], 22, 1236535329)),
									p,
									g,
									t[s + 1],
									5,
									-165796510
								)),
								(g = o(g, h, d, p, t[s + 6], 9, -1069501632)),
								(p = o(p, g, h, d, t[s + 11], 14, 643717713)),
								(d = o(d, p, g, h, t[s], 20, -373897302)),
								(h = o(h, d, p, g, t[s + 5], 5, -701558691)),
								(g = o(g, h, d, p, t[s + 10], 9, 38016083)),
								(p = o(p, g, h, d, t[s + 15], 14, -660478335)),
								(d = o(d, p, g, h, t[s + 4], 20, -405537848)),
								(h = o(h, d, p, g, t[s + 9], 5, 568446438)),
								(g = o(g, h, d, p, t[s + 14], 9, -1019803690)),
								(p = o(p, g, h, d, t[s + 3], 14, -187363961)),
								(d = o(d, p, g, h, t[s + 8], 20, 1163531501)),
								(h = o(h, d, p, g, t[s + 13], 5, -1444681467)),
								(g = o(g, h, d, p, t[s + 2], 9, -51403784)),
								(p = o(p, g, h, d, t[s + 7], 14, 1735328473)),
								(h = a(
									h,
									(d = o(d, p, g, h, t[s + 12], 20, -1926607734)),
									p,
									g,
									t[s + 5],
									4,
									-378558
								)),
								(g = a(g, h, d, p, t[s + 8], 11, -2022574463)),
								(p = a(p, g, h, d, t[s + 11], 16, 1839030562)),
								(d = a(d, p, g, h, t[s + 14], 23, -35309556)),
								(h = a(h, d, p, g, t[s + 1], 4, -1530992060)),
								(g = a(g, h, d, p, t[s + 4], 11, 1272893353)),
								(p = a(p, g, h, d, t[s + 7], 16, -155497632)),
								(d = a(d, p, g, h, t[s + 10], 23, -1094730640)),
								(h = a(h, d, p, g, t[s + 13], 4, 681279174)),
								(g = a(g, h, d, p, t[s], 11, -358537222)),
								(p = a(p, g, h, d, t[s + 3], 16, -722521979)),
								(d = a(d, p, g, h, t[s + 6], 23, 76029189)),
								(h = a(h, d, p, g, t[s + 9], 4, -640364487)),
								(g = a(g, h, d, p, t[s + 12], 11, -421815835)),
								(p = a(p, g, h, d, t[s + 15], 16, 530742520)),
								(h = n(
									h,
									(d = a(d, p, g, h, t[s + 2], 23, -995338651)),
									p,
									g,
									t[s],
									6,
									-198630844
								)),
								(g = n(g, h, d, p, t[s + 7], 10, 1126891415)),
								(p = n(p, g, h, d, t[s + 14], 15, -1416354905)),
								(d = n(d, p, g, h, t[s + 5], 21, -57434055)),
								(h = n(h, d, p, g, t[s + 12], 6, 1700485571)),
								(g = n(g, h, d, p, t[s + 3], 10, -1894986606)),
								(p = n(p, g, h, d, t[s + 10], 15, -1051523)),
								(d = n(d, p, g, h, t[s + 1], 21, -2054922799)),
								(h = n(h, d, p, g, t[s + 8], 6, 1873313359)),
								(g = n(g, h, d, p, t[s + 15], 10, -30611744)),
								(p = n(p, g, h, d, t[s + 6], 15, -1560198380)),
								(d = n(d, p, g, h, t[s + 13], 21, 1309151649)),
								(h = n(h, d, p, g, t[s + 4], 6, -145523070)),
								(g = n(g, h, d, p, t[s + 11], 10, -1120210379)),
								(p = n(p, g, h, d, t[s + 2], 15, 718787259)),
								(d = n(d, p, g, h, t[s + 9], 21, -343485551)),
								(h = i(h, u)),
								(d = i(d, l)),
								(p = i(p, c)),
								(g = i(g, f));
						return [h, d, p, g];
					})(
						(function (t) {
							var e,
								r = [];
							for (r[(t.length >> 2) - 1] = void 0, e = 0; e < r.length; e += 1)
								r[e] = 0;
							var n = 8 * t.length;
							for (e = 0; e < n; e += 8)
								r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
							return r;
						})(t),
						8 * t.length
					)
				);
			})(
				(function (t) {
					return decodeURIComponent(encodeURIComponent(t));
				})(s)
			))
		);
		var s;
	},
	g = async (t, e, r) => {
		let n;
		if ("string" == typeof t)
			if (t.match(h))
				try {
					n = await f.default(
						async () =>
							(
								await u.default.request({
									method: "GET",
									url: t,
									headers: {
										"User-Agent":
											"Mozilla/5.0 (X11; Linux x86_64; rv:108.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
									},
									responseType: "arraybuffer",
									...(e ? { httpsAgent: e } : {}),
								})
							).data,
						{ ...r }
					);
				} catch (t) {
					throw new Error(`Unable to download media: ${t.toString()}`);
				}
			else
				try {
					await s.default.promises.access(t, s.default.promises.constants.F_OK),
						(n = await s.default.promises.readFile(t));
				} catch {
					n = Buffer.from(t, "base64");
				}
		else n = t;
		return n;
	},
	m = async (t, e) => {
		var r, n;
		const a = await (async () => {
			const [t, e] = await Promise.all([
				(async () =>
					await Promise.resolve()
						.then(function () {
							/*#__PURE__*/ return i(require("jimp"));
						})
						.catch(() => {}))(),
				(async () =>
					await Promise.resolve()
						.then(function () {
							/*#__PURE__*/ return i(require("sharp"));
						})
						.catch(() => {}))(),
			]);
			if (e) return { sharp: e };
			const r = (null == t ? void 0 : t.default) || t;
			if (r) return { jimp: r };
			throw new Error(
				"No image processing library available, please install jimp or sharp as a dependency"
			);
		})();
		if (
			"sharp" in a &&
			"function" == typeof (null == (r = a.sharp) ? void 0 : r.default)
		) {
			const r = a.sharp.default(t),
				n = await r.metadata(),
				o = n.width || 0,
				i = n.height || 0;
			let s = 0,
				u = 0,
				l = o,
				c = i;
			const f = o > i;
			return (
				"COMPARED" === e &&
					((s = f ? 21 : 27),
					(u = f ? 25 : 30),
					(l = o - s - (f ? 22 : 30)),
					(c = i - u - (f ? 202 : 213))),
				"SINGLE" === e &&
					((s = f ? 509 : 27),
					(u = f ? 25 : 544),
					(l = o - s - (f ? 22 : 30)),
					(c = i - u - (f ? 202 : 213))),
				await r
					.extract({ left: s, top: u, width: l, height: c })
					.png()
					.toBuffer()
			);
		}
		if (
			"jimp" in a &&
			"function" == typeof (null == (n = a.jimp) ? void 0 : n.read)
		) {
			const r = await a.jimp.read(t),
				n = r.getWidth() || 0,
				o = r.getHeight() || 0;
			let i = 0,
				s = 0,
				u = n,
				l = o;
			const c = n > o;
			return (
				"COMPARED" === e &&
					((i = c ? 21 : 27),
					(s = c ? 25 : 30),
					(u = n - i - (c ? 22 : 30)),
					(l = o - s - (c ? 202 : 213))),
				"SINGLE" === e &&
					((i = c ? 509 : 27),
					(s = c ? 25 : 544),
					(u = n - i - (c ? 22 : 30)),
					(l = o - s - (c ? 202 : 213))),
				await r.crop(i, s, u, l).getBufferAsync(a.jimp.MIME_PNG)
			);
		}
		throw new Error(
			"No image processing library available, please install jimp or sharp as a dependency"
		);
	};
module.exports = async (t, e = d) => {
	var r, n, a;
	const o = !(null == (r = (e = Object.assign(d, e)).proxy) || !r.url),
		i = o && null != (n = e.proxy) && n.chinese ? "CHINA" : "WORLD";
	let s;
	var h, w, y;
	o &&
		((s = /^socks/.test(null == (h = e.proxy) ? void 0 : h.url)
			? new l.default.SocksProxyAgent(null == (w = e.proxy) ? void 0 : w.url)
			: new c.default.HttpsProxyAgent(null == (y = e.proxy) ? void 0 : y.url)),
		(s.timeout = 3e4));
	const v = await g(t, null != (a = e.proxy) && a.image ? s : void 0, e),
		b = {
			busiId:
				"WORLD" === i
					? "different_dimension_me_img_entry"
					: "ai_painting_anime_entry",
			images: [v.toString("base64")],
			extra: JSON.stringify({
				face_rects: [],
				version: 2,
				language: "en",
				platform: "web",
				data_report: {
					parent_trace_id: `${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}-${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}-${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}-${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}-${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}${((65536 * (1 + Math.random())) | 0)
						.toString(16)
						.substring(1)}`,
					root_channel: "",
					level: 0,
				},
			}),
		};
	let _ = { img_urls: [v.toString("base64")] };
	try {
		_ = await f.default(
			async (t) => {
				const e = await u.default.request({
						method: "POST",
						url: "https://ai.tu.qq.com/overseas/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
						data: b,
						headers: {
							"Content-Type": "application/json",
							Origin: "https://h5.tu.qq.com",
							Referer: "https://h5.tu.qq.com/",
							"User-Agent":
								"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
							"x-sign-value": p(b),
							"x-sign-version": "v1",
						},
						timeout: 3e4,
						...(o ? { httpsAgent: s } : {}),
					}),
					r = null == e ? void 0 : e.data;
				if (!r) throw new Error("No data");
				if ("VOLUMN_LIMIT" === r.msg) throw new Error("QQ rate limit caught");
				if ("IMG_ILLEGAL" !== r.msg)
					if (1001 !== r.code)
						if (-2100 !== r.code) {
							if (2119 !== r.code && -2111 !== r.code) {
								if (!r.extra)
									throw new Error("Got no data from QQ: " + JSON.stringify(r));
								return JSON.parse(r.extra);
							}
							t(
								new Error(
									"Auth failed, the Chinese website has blocked this ip address."
								)
							);
						} else t(new Error("Try another photo."));
					else t(new Error("Face not found. Try another photo."));
				else t(new Error("Couldn't pass the censorship. Try another photo."));
			},
			{ ...e }
		);
	} catch (t) {
		throw new Error(
			`Unable to upload the photo: ${"string" == typeof t ? t : t.message}`
		);
	}
	const x = _.img_urls[1] || _.img_urls[0];
	var A, E, S;
	return "COMPARED" === e.crop
		? await m(
				await g(x, null != (A = e.proxy) && A.image ? s : void 0, e),
				"COMPARED"
		  )
		: "SINGLE" === e.crop
		? await m(
				await g(x, null != (E = e.proxy) && E.image ? s : void 0, e),
				"SINGLE"
		  )
		: await m(await g(x, null != (S = e.proxy) && S.image ? s : void 0, e));
};
