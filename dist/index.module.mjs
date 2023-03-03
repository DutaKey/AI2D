import t from "fs";
import r from "axios";
import e from "socks-proxy-agent";
import n from "https-proxy-agent";
import a from "async-retry";
const o = new RegExp(
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi
	),
	i = { retries: 10, factor: 1 },
	s = (t) => {
		function r(t, r, n, a, o, i, s) {
			return e((r & n) | (~r & a), t, r, o, i, s);
		}
		function e(t, r, e, n, a, o) {
			return i(((s = i(i(r, t), i(n, o))) << (c = a)) | (s >>> (32 - c)), e);
			var s, c;
		}
		function n(t, r, n, a, o, i, s) {
			return e(n ^ (r | ~a), t, r, o, i, s);
		}
		function a(t, r, n, a, o, i, s) {
			return e(r ^ n ^ a, t, r, o, i, s);
		}
		function o(t, r, n, a, o, i, s) {
			return e((r & a) | (n & ~a), t, r, o, i, s);
		}
		function i(t, r) {
			var e = (65535 & t) + (65535 & r);
			return (((t >> 16) + (r >> 16) + (e >> 16)) << 16) | (65535 & e);
		}
		return (function (t) {
			var r,
				e,
				n = "0123456789abcdef",
				a = "";
			for (e = 0; e < t.length; e += 1)
				(r = t.charCodeAt(e)),
					(a += n.charAt((r >>> 4) & 15) + n.charAt(15 & r));
			return a;
		})(
			((s = `https://h5.tu.qq.com${((t = "") => {
				const r = encodeURIComponent(t).match(/%[89ABab]/g);
				return t.length + (r ? r.length : 0);
			})(JSON.stringify(t))}HQ31X02e`),
			(function (t) {
				return (function (t) {
					var r,
						e = "",
						n = 32 * t.length;
					for (r = 0; r < n; r += 8)
						e += String.fromCharCode((t[r >> 5] >>> r % 32) & 255);
					return e;
				})(
					(function (t, e) {
						var s, c, l, u, p;
						(t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
						var h = 1732584193,
							g = -271733879,
							d = -1732584194,
							f = 271733878;
						for (s = 0; s < t.length; s += 16)
							(c = h),
								(l = g),
								(u = d),
								(p = f),
								(h = r(h, g, d, f, t[s], 7, -680876936)),
								(f = r(f, h, g, d, t[s + 1], 12, -389564586)),
								(d = r(d, f, h, g, t[s + 2], 17, 606105819)),
								(g = r(g, d, f, h, t[s + 3], 22, -1044525330)),
								(h = r(h, g, d, f, t[s + 4], 7, -176418897)),
								(f = r(f, h, g, d, t[s + 5], 12, 1200080426)),
								(d = r(d, f, h, g, t[s + 6], 17, -1473231341)),
								(g = r(g, d, f, h, t[s + 7], 22, -45705983)),
								(h = r(h, g, d, f, t[s + 8], 7, 1770035416)),
								(f = r(f, h, g, d, t[s + 9], 12, -1958414417)),
								(d = r(d, f, h, g, t[s + 10], 17, -42063)),
								(g = r(g, d, f, h, t[s + 11], 22, -1990404162)),
								(h = r(h, g, d, f, t[s + 12], 7, 1804603682)),
								(f = r(f, h, g, d, t[s + 13], 12, -40341101)),
								(d = r(d, f, h, g, t[s + 14], 17, -1502002290)),
								(h = o(
									h,
									(g = r(g, d, f, h, t[s + 15], 22, 1236535329)),
									d,
									f,
									t[s + 1],
									5,
									-165796510
								)),
								(f = o(f, h, g, d, t[s + 6], 9, -1069501632)),
								(d = o(d, f, h, g, t[s + 11], 14, 643717713)),
								(g = o(g, d, f, h, t[s], 20, -373897302)),
								(h = o(h, g, d, f, t[s + 5], 5, -701558691)),
								(f = o(f, h, g, d, t[s + 10], 9, 38016083)),
								(d = o(d, f, h, g, t[s + 15], 14, -660478335)),
								(g = o(g, d, f, h, t[s + 4], 20, -405537848)),
								(h = o(h, g, d, f, t[s + 9], 5, 568446438)),
								(f = o(f, h, g, d, t[s + 14], 9, -1019803690)),
								(d = o(d, f, h, g, t[s + 3], 14, -187363961)),
								(g = o(g, d, f, h, t[s + 8], 20, 1163531501)),
								(h = o(h, g, d, f, t[s + 13], 5, -1444681467)),
								(f = o(f, h, g, d, t[s + 2], 9, -51403784)),
								(d = o(d, f, h, g, t[s + 7], 14, 1735328473)),
								(h = a(
									h,
									(g = o(g, d, f, h, t[s + 12], 20, -1926607734)),
									d,
									f,
									t[s + 5],
									4,
									-378558
								)),
								(f = a(f, h, g, d, t[s + 8], 11, -2022574463)),
								(d = a(d, f, h, g, t[s + 11], 16, 1839030562)),
								(g = a(g, d, f, h, t[s + 14], 23, -35309556)),
								(h = a(h, g, d, f, t[s + 1], 4, -1530992060)),
								(f = a(f, h, g, d, t[s + 4], 11, 1272893353)),
								(d = a(d, f, h, g, t[s + 7], 16, -155497632)),
								(g = a(g, d, f, h, t[s + 10], 23, -1094730640)),
								(h = a(h, g, d, f, t[s + 13], 4, 681279174)),
								(f = a(f, h, g, d, t[s], 11, -358537222)),
								(d = a(d, f, h, g, t[s + 3], 16, -722521979)),
								(g = a(g, d, f, h, t[s + 6], 23, 76029189)),
								(h = a(h, g, d, f, t[s + 9], 4, -640364487)),
								(f = a(f, h, g, d, t[s + 12], 11, -421815835)),
								(d = a(d, f, h, g, t[s + 15], 16, 530742520)),
								(h = n(
									h,
									(g = a(g, d, f, h, t[s + 2], 23, -995338651)),
									d,
									f,
									t[s],
									6,
									-198630844
								)),
								(f = n(f, h, g, d, t[s + 7], 10, 1126891415)),
								(d = n(d, f, h, g, t[s + 14], 15, -1416354905)),
								(g = n(g, d, f, h, t[s + 5], 21, -57434055)),
								(h = n(h, g, d, f, t[s + 12], 6, 1700485571)),
								(f = n(f, h, g, d, t[s + 3], 10, -1894986606)),
								(d = n(d, f, h, g, t[s + 10], 15, -1051523)),
								(g = n(g, d, f, h, t[s + 1], 21, -2054922799)),
								(h = n(h, g, d, f, t[s + 8], 6, 1873313359)),
								(f = n(f, h, g, d, t[s + 15], 10, -30611744)),
								(d = n(d, f, h, g, t[s + 6], 15, -1560198380)),
								(g = n(g, d, f, h, t[s + 13], 21, 1309151649)),
								(h = n(h, g, d, f, t[s + 4], 6, -145523070)),
								(f = n(f, h, g, d, t[s + 11], 10, -1120210379)),
								(d = n(d, f, h, g, t[s + 2], 15, 718787259)),
								(g = n(g, d, f, h, t[s + 9], 21, -343485551)),
								(h = i(h, c)),
								(g = i(g, l)),
								(d = i(d, u)),
								(f = i(f, p));
						return [h, g, d, f];
					})(
						(function (t) {
							var r,
								e = [];
							for (e[(t.length >> 2) - 1] = void 0, r = 0; r < e.length; r += 1)
								e[r] = 0;
							var n = 8 * t.length;
							for (r = 0; r < n; r += 8)
								e[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
							return e;
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
	c = async (e, n, i) => {
		let s;
		if ("string" == typeof e)
			if (e.match(o))
				try {
					s = await a(
						async () =>
							(
								await r.request({
									method: "GET",
									url: e,
									headers: {
										"User-Agent":
											"Mozilla/5.0 (X11; Linux x86_64; rv:108.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
									},
									responseType: "arraybuffer",
									...(n ? { httpsAgent: n } : {}),
								})
							).data,
						{ ...i }
					);
				} catch (t) {
					throw new Error(`Unable to download media: ${t.toString()}`);
				}
			else
				try {
					await t.promises.access(e, t.promises.constants.F_OK),
						(s = await t.promises.readFile(e));
				} catch {
					s = Buffer.from(e, "base64");
				}
		else s = e;
		return s;
	},
	l = async (t, r) => {
		var e, n;
		const a = await (async () => {
			const [t, r] = await Promise.all([
				(async () => await import("jimp").catch(() => {}))(),
				(async () => await import("sharp").catch(() => {}))(),
			]);
			if (r) return { sharp: r };
			const e = (null == t ? void 0 : t.default) || t;
			if (e) return { jimp: e };
			throw new Error(
				"No image processing library available, please install jimp or sharp as a dependency"
			);
		})();
		if (
			"sharp" in a &&
			"function" == typeof (null == (e = a.sharp) ? void 0 : e.default)
		) {
			const e = a.sharp.default(t),
				n = await e.metadata(),
				o = n.width || 0,
				i = n.height || 0;
			let s = 0,
				c = 0,
				l = o,
				u = i;
			const p = o > i;
			return (
				"COMPARED" === r &&
					((s = p ? 21 : 27),
					(c = p ? 25 : 30),
					(l = o - s - (p ? 22 : 30)),
					(u = i - c - (p ? 202 : 213))),
				"SINGLE" === r &&
					((s = p ? 509 : 27),
					(c = p ? 25 : 544),
					(l = o - s - (p ? 22 : 30)),
					(u = i - c - (p ? 202 : 213))),
				await e
					.extract({ left: s, top: c, width: l, height: u })
					.png()
					.toBuffer()
			);
		}
		if (
			"jimp" in a &&
			"function" == typeof (null == (n = a.jimp) ? void 0 : n.read)
		) {
			const e = await a.jimp.read(t),
				n = e.getWidth() || 0,
				o = e.getHeight() || 0;
			let i = 0,
				s = 0,
				c = n,
				l = o;
			const u = n > o;
			return (
				"COMPARED" === r &&
					((i = u ? 21 : 27),
					(s = u ? 25 : 30),
					(c = n - i - (u ? 22 : 30)),
					(l = o - s - (u ? 202 : 213))),
				"SINGLE" === r &&
					((i = u ? 509 : 27),
					(s = u ? 25 : 544),
					(c = n - i - (u ? 22 : 30)),
					(l = o - s - (u ? 202 : 213))),
				await e.crop(i, s, c, l).getBufferAsync(a.jimp.MIME_PNG)
			);
		}
		throw new Error(
			"No image processing library available, please install jimp or sharp as a dependency"
		);
	},
	u = async (t, o = i) => {
		var u, p, h;
		const g = !(null == (u = (o = Object.assign(i, o)).proxy) || !u.url),
			d = g && null != (p = o.proxy) && p.chinese ? "CHINA" : "WORLD";
		let f;
		var m, w, y;
		g &&
			((f = /^socks/.test(null == (m = o.proxy) ? void 0 : m.url)
				? new e.SocksProxyAgent(null == (w = o.proxy) ? void 0 : w.url)
				: new n.HttpsProxyAgent(null == (y = o.proxy) ? void 0 : y.url)),
			(f.timeout = 3e4));
		const v = await c(t, null != (h = o.proxy) && h.image ? f : void 0, o),
			b = {
				busiId:
					"WORLD" === d
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
		let x = { img_urls: [v.toString("base64")] };
		try {
			x = await a(
				async (t) => {
					const e = await r.request({
							method: "POST",
							url: "https://ai.tu.qq.com/overseas/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
							data: b,
							headers: {
								"Content-Type": "application/json",
								Origin: "https://h5.tu.qq.com",
								Referer: "https://h5.tu.qq.com/",
								"User-Agent":
									"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
								"x-sign-value": s(b),
								"x-sign-version": "v1",
							},
							timeout: 3e4,
							...(g ? { httpsAgent: f } : {}),
						}),
						n = null == e ? void 0 : e.data;
					if (!n) throw new Error("No data");
					if ("VOLUMN_LIMIT" === n.msg) throw new Error("QQ rate limit caught");
					if ("IMG_ILLEGAL" !== n.msg)
						if (1001 !== n.code)
							if (-2100 !== n.code) {
								if (2119 !== n.code && -2111 !== n.code) {
									if (!n.extra)
										throw new Error(
											"Got no data from QQ: " + JSON.stringify(n)
										);
									return JSON.parse(n.extra);
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
				{ ...o }
			);
		} catch (t) {
			throw new Error(
				`Unable to upload the photo: ${"string" == typeof t ? t : t.message}`
			);
		}
		const _ = x.img_urls[1] || x.img_urls[0];
		var A, S, E;
		return "COMPARED" === o.crop
			? await l(
					await c(_, null != (A = o.proxy) && A.image ? f : void 0, o),
					"COMPARED"
			  )
			: "SINGLE" === o.crop
			? await l(
					await c(_, null != (S = o.proxy) && S.image ? f : void 0, o),
					"SINGLE"
			  )
			: await l(await c(_, null != (E = o.proxy) && E.image ? f : void 0, o));
	};
export { u as default };
