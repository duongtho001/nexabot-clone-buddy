"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[625], {
    625: (e, t, n) => {
        n.d(t, {
            rc: () => es,
            bm: () => eu,
            VY: () => ea,
            Kq: () => er,
            bL: () => ei,
            hE: () => el,
            LM: () => eo
        });
        var r, o = n(2115), i = n(7650), l = n(5185), a = n(6101), s = n(6589), u = n(6081), c = n(3540), d = n(9033), f = n(5155), p = "dismissableLayer.update", m = o.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }), v = o.forwardRef( (e, t) => {
            var n, i;
            let {disableOutsidePointerEvents: s=!1, onEscapeKeyDown: u, onPointerDownOutside: v, onFocusOutside: w, onInteractOutside: h, onDismiss: g, ...x} = e
              , b = o.useContext(m)
              , [C,T] = o.useState(null)
              , N = null != (i = null == C ? void 0 : C.ownerDocument) ? i : null == (n = globalThis) ? void 0 : n.document
              , [,R] = o.useState({})
              , P = (0,
            a.s)(t, e => T(e))
              , L = Array.from(b.layers)
              , [j] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1)
              , D = L.indexOf(j)
              , O = C ? L.indexOf(C) : -1
              , S = b.layersWithOutsidePointerEventsDisabled.size > 0
              , M = O >= D
              , A = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document
                  , r = (0,
                d.c)(e)
                  , i = o.useRef(!1)
                  , l = o.useRef( () => {}
                );
                return o.useEffect( () => {
                    let e = e => {
                        if (e.target && !i.current) {
                            let t = function() {
                                E("dismissableLayer.pointerDownOutside", r, o, {
                                    discrete: !0
                                })
                            }
                              , o = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (n.removeEventListener("click", l.current),
                            l.current = t,
                            n.addEventListener("click", l.current, {
                                once: !0
                            })) : t()
                        } else
                            n.removeEventListener("click", l.current);
                        i.current = !1
                    }
                      , t = window.setTimeout( () => {
                        n.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(t),
                        n.removeEventListener("pointerdown", e),
                        n.removeEventListener("click", l.current)
                    }
                }
                , [n, r]),
                {
                    onPointerDownCapture: () => i.current = !0
                }
            }(e => {
                let t = e.target
                  , n = [...b.branches].some(e => e.contains(t));
                M && !n && (null == v || v(e),
                null == h || h(e),
                e.defaultPrevented || null == g || g())
            }
            , N)
              , F = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document
                  , r = (0,
                d.c)(e)
                  , i = o.useRef(!1);
                return o.useEffect( () => {
                    let e = e => {
                        e.target && !i.current && E("dismissableLayer.focusOutside", r, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                }
                , [n, r]),
                {
                    onFocusCapture: () => i.current = !0,
                    onBlurCapture: () => i.current = !1
                }
            }(e => {
                let t = e.target;
                ![...b.branches].some(e => e.contains(t)) && (null == w || w(e),
                null == h || h(e),
                e.defaultPrevented || null == g || g())
            }
            , N);
            return !function(e, t=globalThis?.document) {
                let n = (0,
                d.c)(e);
                o.useEffect( () => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
                , [n, t])
            }(e => {
                O === b.layers.size - 1 && (null == u || u(e),
                !e.defaultPrevented && g && (e.preventDefault(),
                g()))
            }
            , N),
            o.useEffect( () => {
                if (C)
                    return s && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents,
                    N.body.style.pointerEvents = "none"),
                    b.layersWithOutsidePointerEventsDisabled.add(C)),
                    b.layers.add(C),
                    y(),
                    () => {
                        s && 1 === b.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r)
                    }
            }
            , [C, N, s, b]),
            o.useEffect( () => () => {
                C && (b.layers.delete(C),
                b.layersWithOutsidePointerEventsDisabled.delete(C),
                y())
            }
            , [C, b]),
            o.useEffect( () => {
                let e = () => R({});
                return document.addEventListener(p, e),
                () => document.removeEventListener(p, e)
            }
            , []),
            (0,
            f.jsx)(c.sG.div, {
                ...x,
                ref: P,
                style: {
                    pointerEvents: S ? M ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                l.m)(e.onFocusCapture, F.onFocusCapture),
                onBlurCapture: (0,
                l.m)(e.onBlurCapture, F.onBlurCapture),
                onPointerDownCapture: (0,
                l.m)(e.onPointerDownCapture, A.onPointerDownCapture)
            })
        }
        );
        v.displayName = "DismissableLayer";
        var w = o.forwardRef( (e, t) => {
            let n = o.useContext(m)
              , r = o.useRef(null)
              , i = (0,
            a.s)(t, r);
            return o.useEffect( () => {
                let e = r.current;
                if (e)
                    return n.branches.add(e),
                    () => {
                        n.branches.delete(e)
                    }
            }
            , [n.branches]),
            (0,
            f.jsx)(c.sG.div, {
                ...e,
                ref: i
            })
        }
        );
        function y() {
            let e = new CustomEvent(p);
            document.dispatchEvent(e)
        }
        function E(e, t, n, r) {
            let {discrete: o} = r
              , i = n.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            c.hO)(i, l) : i.dispatchEvent(l)
        }
        w.displayName = "DismissableLayerBranch";
        var h = n(2712)
          , g = o.forwardRef( (e, t) => {
            var n, r;
            let {container: l, ...a} = e
              , [s,u] = o.useState(!1);
            (0,
            h.N)( () => u(!0), []);
            let d = l || s && (null == (r = globalThis) || null == (n = r.document) ? void 0 : n.body);
            return d ? i.createPortal((0,
            f.jsx)(c.sG.div, {
                ...a,
                ref: t
            }), d) : null
        }
        );
        g.displayName = "Portal";
        var x = e => {
            let {present: t, children: n} = e
              , r = function(e) {
                var t, n;
                let[r,i] = o.useState()
                  , l = o.useRef({})
                  , a = o.useRef(e)
                  , s = o.useRef("none")
                  , [u,c] = (t = e ? "mounted" : "unmounted",
                n = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                o.useReducer( (e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e
                }
                , t));
                return o.useEffect( () => {
                    let e = b(l.current);
                    s.current = "mounted" === u ? e : "none"
                }
                , [u]),
                (0,
                h.N)( () => {
                    let t = l.current
                      , n = a.current;
                    if (n !== e) {
                        let r = s.current
                          , o = b(t);
                        e ? c("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : n && r !== o ? c("ANIMATION_OUT") : c("UNMOUNT"),
                        a.current = e
                    }
                }
                , [e, c]),
                (0,
                h.N)( () => {
                    if (r) {
                        var e;
                        let t, n = null != (e = r.ownerDocument.defaultView) ? e : window, o = e => {
                            let o = b(l.current).includes(e.animationName);
                            if (e.target === r && o && (c("ANIMATION_END"),
                            !a.current)) {
                                let e = r.style.animationFillMode;
                                r.style.animationFillMode = "forwards",
                                t = n.setTimeout( () => {
                                    "forwards" === r.style.animationFillMode && (r.style.animationFillMode = e)
                                }
                                )
                            }
                        }
                        , i = e => {
                            e.target === r && (s.current = b(l.current))
                        }
                        ;
                        return r.addEventListener("animationstart", i),
                        r.addEventListener("animationcancel", o),
                        r.addEventListener("animationend", o),
                        () => {
                            n.clearTimeout(t),
                            r.removeEventListener("animationstart", i),
                            r.removeEventListener("animationcancel", o),
                            r.removeEventListener("animationend", o)
                        }
                    }
                    c("ANIMATION_END")
                }
                , [r, c]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(u),
                    ref: o.useCallback(e => {
                        e && (l.current = getComputedStyle(e)),
                        i(e)
                    }
                    , [])
                }
            }(t)
              , i = "function" == typeof n ? n({
                present: r.isPresent
            }) : o.Children.only(n)
              , l = (0,
            a.s)(r.ref, function(e) {
                var t, n;
                let r = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get
                  , o = r && "isReactWarning"in r && r.isReactWarning;
                return o ? e.ref : (o = (r = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get) && "isReactWarning"in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
            }(i));
            return "function" == typeof n || r.isPresent ? o.cloneElement(i, {
                ref: l
            }) : null
        }
        ;
        function b(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        x.displayName = "Presence";
        var C = n(5845)
          , T = o.forwardRef( (e, t) => (0,
        f.jsx)(c.sG.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
        T.displayName = "VisuallyHidden";
        var N = "ToastProvider"
          , [R,P,L] = (0,
        s.N)("Toast")
          , [j,D] = (0,
        u.A)("Toast", [L])
          , [O,S] = j(N)
          , M = e => {
            let {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: l=50, children: a} = e
              , [s,u] = o.useState(null)
              , [c,d] = o.useState(0)
              , p = o.useRef(!1)
              , m = o.useRef(!1);
            return n.trim() || console.error("Invalid prop `label` supplied to `".concat(N, "`. Expected non-empty `string`.")),
            (0,
            f.jsx)(R.Provider, {
                scope: t,
                children: (0,
                f.jsx)(O, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: i,
                    swipeThreshold: l,
                    toastCount: c,
                    viewport: s,
                    onViewportChange: u,
                    onToastAdd: o.useCallback( () => d(e => e + 1), []),
                    onToastRemove: o.useCallback( () => d(e => e - 1), []),
                    isFocusedToastEscapeKeyDownRef: p,
                    isClosePausedRef: m,
                    children: a
                })
            })
        }
        ;
        M.displayName = N;
        var A = "ToastViewport"
          , F = ["F8"]
          , k = "toast.viewportPause"
          , I = "toast.viewportResume"
          , W = o.forwardRef( (e, t) => {
            let {__scopeToast: n, hotkey: r=F, label: i="Notifications ({hotkey})", ...l} = e
              , s = S(A, n)
              , u = P(n)
              , d = o.useRef(null)
              , p = o.useRef(null)
              , m = o.useRef(null)
              , v = o.useRef(null)
              , y = (0,
            a.s)(t, v, s.onViewportChange)
              , E = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
              , h = s.toastCount > 0;
            o.useEffect( () => {
                let e = e => {
                    var t;
                    0 !== r.length && r.every(t => e[t] || e.code === t) && (null == (t = v.current) || t.focus())
                }
                ;
                return document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
            }
            , [r]),
            o.useEffect( () => {
                let e = d.current
                  , t = v.current;
                if (h && e && t) {
                    let n = () => {
                        if (!s.isClosePausedRef.current) {
                            let e = new CustomEvent(k);
                            t.dispatchEvent(e),
                            s.isClosePausedRef.current = !0
                        }
                    }
                      , r = () => {
                        if (s.isClosePausedRef.current) {
                            let e = new CustomEvent(I);
                            t.dispatchEvent(e),
                            s.isClosePausedRef.current = !1
                        }
                    }
                      , o = t => {
                        e.contains(t.relatedTarget) || r()
                    }
                      , i = () => {
                        e.contains(document.activeElement) || r()
                    }
                    ;
                    return e.addEventListener("focusin", n),
                    e.addEventListener("focusout", o),
                    e.addEventListener("pointermove", n),
                    e.addEventListener("pointerleave", i),
                    window.addEventListener("blur", n),
                    window.addEventListener("focus", r),
                    () => {
                        e.removeEventListener("focusin", n),
                        e.removeEventListener("focusout", o),
                        e.removeEventListener("pointermove", n),
                        e.removeEventListener("pointerleave", i),
                        window.removeEventListener("blur", n),
                        window.removeEventListener("focus", r)
                    }
                }
            }
            , [h, s.isClosePausedRef]);
            let g = o.useCallback(e => {
                let {tabbingDirection: t} = e
                  , n = u().map(e => {
                    let n = e.ref.current
                      , r = [n, ...function(e) {
                        let t = []
                          , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: e => {
                                let t = "INPUT" === e.tagName && "hidden" === e.type;
                                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        });
                        for (; n.nextNode(); )
                            t.push(n.currentNode);
                        return t
                    }(n)];
                    return "forwards" === t ? r : r.reverse()
                }
                );
                return ("forwards" === t ? n.reverse() : n).flat()
            }
            , [u]);
            return o.useEffect( () => {
                let e = v.current;
                if (e) {
                    let t = t => {
                        let n = t.altKey || t.ctrlKey || t.metaKey;
                        if ("Tab" === t.key && !n) {
                            var r, o, i;
                            let n = document.activeElement
                              , l = t.shiftKey;
                            if (t.target === e && l) {
                                null == (r = p.current) || r.focus();
                                return
                            }
                            let a = g({
                                tabbingDirection: l ? "backwards" : "forwards"
                            })
                              , s = a.findIndex(e => e === n);
                            en(a.slice(s + 1)) ? t.preventDefault() : l ? null == (o = p.current) || o.focus() : null == (i = m.current) || i.focus()
                        }
                    }
                    ;
                    return e.addEventListener("keydown", t),
                    () => e.removeEventListener("keydown", t)
                }
            }
            , [u, g]),
            (0,
            f.jsxs)(w, {
                ref: d,
                role: "region",
                "aria-label": i.replace("{hotkey}", E),
                tabIndex: -1,
                style: {
                    pointerEvents: h ? void 0 : "none"
                },
                children: [h && (0,
                f.jsx)(V, {
                    ref: p,
                    onFocusFromOutsideViewport: () => {
                        en(g({
                            tabbingDirection: "forwards"
                        }))
                    }
                }), (0,
                f.jsx)(R.Slot, {
                    scope: n,
                    children: (0,
                    f.jsx)(c.sG.ol, {
                        tabIndex: -1,
                        ...l,
                        ref: y
                    })
                }), h && (0,
                f.jsx)(V, {
                    ref: m,
                    onFocusFromOutsideViewport: () => {
                        en(g({
                            tabbingDirection: "backwards"
                        }))
                    }
                })]
            })
        }
        );
        W.displayName = A;
        var _ = "ToastFocusProxy"
          , V = o.forwardRef( (e, t) => {
            let {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
              , i = S(_, n);
            return (0,
            f.jsx)(T, {
                "aria-hidden": !0,
                tabIndex: 0,
                ...o,
                ref: t,
                style: {
                    position: "fixed"
                },
                onFocus: e => {
                    var t;
                    let n = e.relatedTarget;
                    (null == (t = i.viewport) ? void 0 : t.contains(n)) || r()
                }
            })
        }
        );
        V.displayName = _;
        var K = "Toast"
          , U = o.forwardRef( (e, t) => {
            let {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...a} = e
              , [s=!0,u] = (0,
            C.i)({
                prop: r,
                defaultProp: o,
                onChange: i
            });
            return (0,
            f.jsx)(x, {
                present: n || s,
                children: (0,
                f.jsx)($, {
                    open: s,
                    ...a,
                    ref: t,
                    onClose: () => u(!1),
                    onPause: (0,
                    d.c)(e.onPause),
                    onResume: (0,
                    d.c)(e.onResume),
                    onSwipeStart: (0,
                    l.m)(e.onSwipeStart, e => {
                        e.currentTarget.setAttribute("data-swipe", "start")
                    }
                    ),
                    onSwipeMove: (0,
                    l.m)(e.onSwipeMove, e => {
                        let {x: t, y: n} = e.detail.delta;
                        e.currentTarget.setAttribute("data-swipe", "move"),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", "".concat(t, "px")),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", "".concat(n, "px"))
                    }
                    ),
                    onSwipeCancel: (0,
                    l.m)(e.onSwipeCancel, e => {
                        e.currentTarget.setAttribute("data-swipe", "cancel"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                    }
                    ),
                    onSwipeEnd: (0,
                    l.m)(e.onSwipeEnd, e => {
                        let {x: t, y: n} = e.detail.delta;
                        e.currentTarget.setAttribute("data-swipe", "end"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", "".concat(t, "px")),
                        e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", "".concat(n, "px")),
                        u(!1)
                    }
                    )
                })
            })
        }
        );
        U.displayName = K;
        var [G,B] = j(K, {
            onClose() {}
        })
          , $ = o.forwardRef( (e, t) => {
            let {__scopeToast: n, type: r="foreground", duration: s, open: u, onClose: p, onEscapeKeyDown: m, onPause: w, onResume: y, onSwipeStart: E, onSwipeMove: h, onSwipeCancel: g, onSwipeEnd: x, ...b} = e
              , C = S(K, n)
              , [T,N] = o.useState(null)
              , P = (0,
            a.s)(t, e => N(e))
              , L = o.useRef(null)
              , j = o.useRef(null)
              , D = s || C.duration
              , O = o.useRef(0)
              , M = o.useRef(D)
              , A = o.useRef(0)
              , {onToastAdd: F, onToastRemove: W} = C
              , _ = (0,
            d.c)( () => {
                var e;
                (null == T ? void 0 : T.contains(document.activeElement)) && (null == (e = C.viewport) || e.focus()),
                p()
            }
            )
              , V = o.useCallback(e => {
                e && e !== 1 / 0 && (window.clearTimeout(A.current),
                O.current = new Date().getTime(),
                A.current = window.setTimeout(_, e))
            }
            , [_]);
            o.useEffect( () => {
                let e = C.viewport;
                if (e) {
                    let t = () => {
                        V(M.current),
                        null == y || y()
                    }
                      , n = () => {
                        let e = new Date().getTime() - O.current;
                        M.current = M.current - e,
                        window.clearTimeout(A.current),
                        null == w || w()
                    }
                    ;
                    return e.addEventListener(k, n),
                    e.addEventListener(I, t),
                    () => {
                        e.removeEventListener(k, n),
                        e.removeEventListener(I, t)
                    }
                }
            }
            , [C.viewport, D, w, y, V]),
            o.useEffect( () => {
                u && !C.isClosePausedRef.current && V(D)
            }
            , [u, D, C.isClosePausedRef, V]),
            o.useEffect( () => (F(),
            () => W()), [F, W]);
            let U = o.useMemo( () => T ? function e(t) {
                let n = [];
                return Array.from(t.childNodes).forEach(t => {
                    var r;
                    if (t.nodeType === t.TEXT_NODE && t.textContent && n.push(t.textContent),
                    (r = t).nodeType === r.ELEMENT_NODE) {
                        let r = t.ariaHidden || t.hidden || "none" === t.style.display
                          , o = "" === t.dataset.radixToastAnnounceExclude;
                        if (!r)
                            if (o) {
                                let e = t.dataset.radixToastAnnounceAlt;
                                e && n.push(e)
                            } else
                                n.push(...e(t))
                    }
                }
                ),
                n
            }(T) : null, [T]);
            return C.viewport ? (0,
            f.jsxs)(f.Fragment, {
                children: [U && (0,
                f.jsx)(q, {
                    __scopeToast: n,
                    role: "status",
                    "aria-live": "foreground" === r ? "assertive" : "polite",
                    "aria-atomic": !0,
                    children: U
                }), (0,
                f.jsx)(G, {
                    scope: n,
                    onClose: _,
                    children: i.createPortal((0,
                    f.jsx)(R.ItemSlot, {
                        scope: n,
                        children: (0,
                        f.jsx)(v, {
                            asChild: !0,
                            onEscapeKeyDown: (0,
                            l.m)(m, () => {
                                C.isFocusedToastEscapeKeyDownRef.current || _(),
                                C.isFocusedToastEscapeKeyDownRef.current = !1
                            }
                            ),
                            children: (0,
                            f.jsx)(c.sG.li, {
                                role: "status",
                                "aria-live": "off",
                                "aria-atomic": !0,
                                tabIndex: 0,
                                "data-state": u ? "open" : "closed",
                                "data-swipe-direction": C.swipeDirection,
                                ...b,
                                ref: P,
                                style: {
                                    userSelect: "none",
                                    touchAction: "none",
                                    ...e.style
                                },
                                onKeyDown: (0,
                                l.m)(e.onKeyDown, e => {
                                    "Escape" === e.key && (null == m || m(e.nativeEvent),
                                    e.nativeEvent.defaultPrevented || (C.isFocusedToastEscapeKeyDownRef.current = !0,
                                    _()))
                                }
                                ),
                                onPointerDown: (0,
                                l.m)(e.onPointerDown, e => {
                                    0 === e.button && (L.current = {
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                }
                                ),
                                onPointerMove: (0,
                                l.m)(e.onPointerMove, e => {
                                    if (!L.current)
                                        return;
                                    let t = e.clientX - L.current.x
                                      , n = e.clientY - L.current.y
                                      , r = !!j.current
                                      , o = ["left", "right"].includes(C.swipeDirection)
                                      , i = ["left", "up"].includes(C.swipeDirection) ? Math.min : Math.max
                                      , l = o ? i(0, t) : 0
                                      , a = o ? 0 : i(0, n)
                                      , s = "touch" === e.pointerType ? 10 : 2
                                      , u = {
                                        x: l,
                                        y: a
                                    }
                                      , c = {
                                        originalEvent: e,
                                        delta: u
                                    };
                                    r ? (j.current = u,
                                    ee("toast.swipeMove", h, c, {
                                        discrete: !1
                                    })) : et(u, C.swipeDirection, s) ? (j.current = u,
                                    ee("toast.swipeStart", E, c, {
                                        discrete: !1
                                    }),
                                    e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > s || Math.abs(n) > s) && (L.current = null)
                                }
                                ),
                                onPointerUp: (0,
                                l.m)(e.onPointerUp, e => {
                                    let t = j.current
                                      , n = e.target;
                                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId),
                                    j.current = null,
                                    L.current = null,
                                    t) {
                                        let n = e.currentTarget
                                          , r = {
                                            originalEvent: e,
                                            delta: t
                                        };
                                        et(t, C.swipeDirection, C.swipeThreshold) ? ee("toast.swipeEnd", x, r, {
                                            discrete: !0
                                        }) : ee("toast.swipeCancel", g, r, {
                                            discrete: !0
                                        }),
                                        n.addEventListener("click", e => e.preventDefault(), {
                                            once: !0
                                        })
                                    }
                                }
                                )
                            })
                        })
                    }), C.viewport)
                })]
            }) : null
        }
        )
          , q = e => {
            let {__scopeToast: t, children: n, ...r} = e
              , i = S(K, t)
              , [l,a] = o.useState(!1)
              , [s,u] = o.useState(!1);
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {}
                  , t = (0,
                d.c)(e);
                (0,
                h.N)( () => {
                    let e = 0
                      , n = 0;
                    return e = window.requestAnimationFrame( () => n = window.requestAnimationFrame(t)),
                    () => {
                        window.cancelAnimationFrame(e),
                        window.cancelAnimationFrame(n)
                    }
                }
                , [t])
            }( () => a(!0)),
            o.useEffect( () => {
                let e = window.setTimeout( () => u(!0), 1e3);
                return () => window.clearTimeout(e)
            }
            , []),
            s ? null : (0,
            f.jsx)(g, {
                asChild: !0,
                children: (0,
                f.jsx)(T, {
                    ...r,
                    children: l && (0,
                    f.jsxs)(f.Fragment, {
                        children: [i.label, " ", n]
                    })
                })
            })
        }
          , z = o.forwardRef( (e, t) => {
            let {__scopeToast: n, ...r} = e;
            return (0,
            f.jsx)(c.sG.div, {
                ...r,
                ref: t
            })
        }
        );
        z.displayName = "ToastTitle";
        var H = o.forwardRef( (e, t) => {
            let {__scopeToast: n, ...r} = e;
            return (0,
            f.jsx)(c.sG.div, {
                ...r,
                ref: t
            })
        }
        );
        H.displayName = "ToastDescription";
        var X = "ToastAction"
          , Y = o.forwardRef( (e, t) => {
            let {altText: n, ...r} = e;
            return n.trim() ? (0,
            f.jsx)(Q, {
                altText: n,
                asChild: !0,
                children: (0,
                f.jsx)(J, {
                    ...r,
                    ref: t
                })
            }) : (console.error("Invalid prop `altText` supplied to `".concat(X, "`. Expected non-empty `string`.")),
            null)
        }
        );
        Y.displayName = X;
        var Z = "ToastClose"
          , J = o.forwardRef( (e, t) => {
            let {__scopeToast: n, ...r} = e
              , o = B(Z, n);
            return (0,
            f.jsx)(Q, {
                asChild: !0,
                children: (0,
                f.jsx)(c.sG.button, {
                    type: "button",
                    ...r,
                    ref: t,
                    onClick: (0,
                    l.m)(e.onClick, o.onClose)
                })
            })
        }
        );
        J.displayName = Z;
        var Q = o.forwardRef( (e, t) => {
            let {__scopeToast: n, altText: r, ...o} = e;
            return (0,
            f.jsx)(c.sG.div, {
                "data-radix-toast-announce-exclude": "",
                "data-radix-toast-announce-alt": r || void 0,
                ...o,
                ref: t
            })
        }
        );
        function ee(e, t, n, r) {
            let {discrete: o} = r
              , i = n.originalEvent.currentTarget
              , l = new CustomEvent(e,{
                bubbles: !0,
                cancelable: !0,
                detail: n
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            c.hO)(i, l) : i.dispatchEvent(l)
        }
        var et = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = Math.abs(e.x)
              , o = Math.abs(e.y)
              , i = r > o;
            return "left" === t || "right" === t ? i && r > n : !i && o > n
        };
        function en(e) {
            let t = document.activeElement;
            return e.some(e => e === t || (e.focus(),
            document.activeElement !== t))
        }
        var er = M
          , eo = W
          , ei = U
          , el = z
          , ea = H
          , es = Y
          , eu = J
    }
    ,
    2712: (e, t, n) => {
        n.d(t, {
            N: () => o
        });
        var r = n(2115)
          , o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
    ,
    3540: (e, t, n) => {
        n.d(t, {
            sG: () => d,
            hO: () => f
        });
        var r = n(2115)
          , o = n(7650)
          , i = n(6101)
          , l = n(5155)
          , a = r.forwardRef( (e, t) => {
            let {children: n, ...o} = e
              , i = r.Children.toArray(n)
              , a = i.find(c);
            if (a) {
                let e = a.props.children
                  , n = i.map(t => t !== a ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                return (0,
                l.jsx)(s, {
                    ...o,
                    ref: t,
                    children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
                })
            }
            return (0,
            l.jsx)(s, {
                ...o,
                ref: t,
                children: n
            })
        }
        );
        a.displayName = "Slot";
        var s = r.forwardRef( (e, t) => {
            let {children: n, ...o} = e;
            if (r.isValidElement(n)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , n = t && "isReactWarning"in t && t.isReactWarning;
                    return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(n)
                  , l = function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r];
                        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(o, n.props);
                return n.type !== r.Fragment && (l.ref = t ? (0,
                i.t)(t, e) : e),
                r.cloneElement(n, l)
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }
        );
        s.displayName = "SlotClone";
        var u = ({children: e}) => (0,
        l.jsx)(l.Fragment, {
            children: e
        });
        function c(e) {
            return r.isValidElement(e) && e.type === u
        }
        var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let n = r.forwardRef( (e, n) => {
                let {asChild: r, ...o} = e
                  , i = r ? a : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                l.jsx)(i, {
                    ...o,
                    ref: n
                })
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {});
        function f(e, t) {
            e && o.flushSync( () => e.dispatchEvent(t))
        }
    }
    ,
    5185: (e, t, n) => {
        n.d(t, {
            m: () => r
        });
        function r(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (e?.(r),
                !1 === n || !r.defaultPrevented)
                    return t?.(r)
            }
        }
    }
    ,
    5845: (e, t, n) => {
        n.d(t, {
            i: () => i
        });
        var r = n(2115)
          , o = n(9033);
        function i({prop: e, defaultProp: t, onChange: n= () => {}
        }) {
            let[i,l] = function({defaultProp: e, onChange: t}) {
                let n = r.useState(e)
                  , [i] = n
                  , l = r.useRef(i)
                  , a = (0,
                o.c)(t);
                return r.useEffect( () => {
                    l.current !== i && (a(i),
                    l.current = i)
                }
                , [i, l, a]),
                n
            }({
                defaultProp: t,
                onChange: n
            })
              , a = void 0 !== e
              , s = a ? e : i
              , u = (0,
            o.c)(n);
            return [s, r.useCallback(t => {
                if (a) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && u(n)
                } else
                    l(t)
            }
            , [a, e, l, u])]
        }
    }
    ,
    6081: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var r = n(2115)
          , o = n(5155);
        function i(e, t=[]) {
            let n = []
              , l = () => {
                let t = n.map(e => r.createContext(e));
                return function(n) {
                    let o = n?.[e] || t;
                    return r.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...n,
                            [e]: o
                        }
                    }), [n, o])
                }
            }
            ;
            return l.scopeName = e,
            [function(t, i) {
                let l = r.createContext(i)
                  , a = n.length;
                n = [...n, i];
                let s = t => {
                    let {scope: n, children: i, ...s} = t
                      , u = n?.[e]?.[a] || l
                      , c = r.useMemo( () => s, Object.values(s));
                    return (0,
                    o.jsx)(u.Provider, {
                        value: c,
                        children: i
                    })
                }
                ;
                return s.displayName = t + "Provider",
                [s, function(n, o) {
                    let s = o?.[e]?.[a] || l
                      , u = r.useContext(s);
                    if (u)
                        return u;
                    if (void 0 !== i)
                        return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = () => {
                    let n = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = n.reduce( (t, {useScope: n, scopeName: r}) => {
                            let o = n(e)[`__scope${r}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return r.useMemo( () => ({
                            [`__scope${t.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(l, ...t)]
        }
    }
    ,
    6101: (e, t, n) => {
        n.d(t, {
            s: () => l,
            t: () => i
        });
        var r = n(2115);
        function o(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        function i(...e) {
            return t => {
                let n = !1
                  , r = e.map(e => {
                    let r = o(e, t);
                    return n || "function" != typeof r || (n = !0),
                    r
                }
                );
                if (n)
                    return () => {
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            "function" == typeof n ? n() : o(e[t], null)
                        }
                    }
            }
        }
        function l(...e) {
            return r.useCallback(i(...e), e)
        }
    }
    ,
    6589: (e, t, n) => {
        n.d(t, {
            N: () => d
        });
        var r = n(2115)
          , o = n(6081)
          , i = n(6101)
          , l = n(5155)
          , a = r.forwardRef( (e, t) => {
            let {children: n, ...o} = e
              , i = r.Children.toArray(n)
              , a = i.find(c);
            if (a) {
                let e = a.props.children
                  , n = i.map(t => t !== a ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                return (0,
                l.jsx)(s, {
                    ...o,
                    ref: t,
                    children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
                })
            }
            return (0,
            l.jsx)(s, {
                ...o,
                ref: t,
                children: n
            })
        }
        );
        a.displayName = "Slot";
        var s = r.forwardRef( (e, t) => {
            let {children: n, ...o} = e;
            if (r.isValidElement(n)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , n = t && "isReactWarning"in t && t.isReactWarning;
                    return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(n)
                  , l = function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r];
                        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(o, n.props);
                return n.type !== r.Fragment && (l.ref = t ? (0,
                i.t)(t, e) : e),
                r.cloneElement(n, l)
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }
        );
        s.displayName = "SlotClone";
        var u = ({children: e}) => (0,
        l.jsx)(l.Fragment, {
            children: e
        });
        function c(e) {
            return r.isValidElement(e) && e.type === u
        }
        function d(e) {
            let t = e + "CollectionProvider"
              , [n,s] = (0,
            o.A)(t)
              , [u,c] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , d = e => {
                let {scope: t, children: n} = e
                  , o = r.useRef(null)
                  , i = r.useRef(new Map).current;
                return (0,
                l.jsx)(u, {
                    scope: t,
                    itemMap: i,
                    collectionRef: o,
                    children: n
                })
            }
            ;
            d.displayName = t;
            let f = e + "CollectionSlot"
              , p = r.forwardRef( (e, t) => {
                let {scope: n, children: r} = e
                  , o = c(f, n)
                  , s = (0,
                i.s)(t, o.collectionRef);
                return (0,
                l.jsx)(a, {
                    ref: s,
                    children: r
                })
            }
            );
            p.displayName = f;
            let m = e + "CollectionItemSlot"
              , v = "data-radix-collection-item"
              , w = r.forwardRef( (e, t) => {
                let {scope: n, children: o, ...s} = e
                  , u = r.useRef(null)
                  , d = (0,
                i.s)(t, u)
                  , f = c(m, n);
                return r.useEffect( () => (f.itemMap.set(u, {
                    ref: u,
                    ...s
                }),
                () => void f.itemMap.delete(u))),
                (0,
                l.jsx)(a, {
                    ...{
                        [v]: ""
                    },
                    ref: d,
                    children: o
                })
            }
            );
            return w.displayName = m,
            [{
                Provider: d,
                Slot: p,
                ItemSlot: w
            }, function(t) {
                let n = c(e + "CollectionConsumer", t);
                return r.useCallback( () => {
                    let e = n.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                    return Array.from(n.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                }
                , [n.collectionRef, n.itemMap])
            }
            , s]
        }
    }
    ,
    9033: (e, t, n) => {
        n.d(t, {
            c: () => o
        });
        var r = n(2115);
        function o(e) {
            let t = r.useRef(e);
            return r.useEffect( () => {
                t.current = e
            }
            ),
            r.useMemo( () => (...e) => t.current?.(...e), [])
        }
    }
}]);
