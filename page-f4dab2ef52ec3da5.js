(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[528], {
    285: (e, t, r) => {
        "use strict";
        r.d(t, {
            $: () => c
        });
        var a = r(5155)
          , s = r(2115)
          , l = r(4253)
          , i = r(2085)
          , o = r(9434);
        let n = (0,
        i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , c = s.forwardRef( (e, t) => {
            let {className: r, variant: s, size: i, asChild: c=!1, ...d} = e
              , m = c ? l.DX : "button";
            return (0,
            a.jsx)(m, {
                className: (0,
                o.cn)(n({
                    variant: s,
                    size: i,
                    className: r
                })),
                ref: t,
                ...d
            })
        }
        );
        c.displayName = "Button"
    }
    ,
    3325: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7927))
    }
    ,
    6695: (e, t, r) => {
        "use strict";
        r.d(t, {
            Wu: () => c,
            ZB: () => n,
            Zp: () => i,
            aR: () => o
        });
        var a = r(5155)
          , s = r(2115)
          , l = r(9434);
        let i = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                ...s
            })
        }
        );
        i.displayName = "Card";
        let o = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("flex flex-col space-y-1.5 p-6", r),
                ...s
            })
        }
        );
        o.displayName = "CardHeader";
        let n = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("text-2xl font-semibold leading-none tracking-tight", r),
                ...s
            })
        }
        );
        n.displayName = "CardTitle",
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("text-sm text-muted-foreground", r),
                ...s
            })
        }
        ).displayName = "CardDescription";
        let c = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("p-6 pt-0", r),
                ...s
            })
        }
        );
        c.displayName = "CardContent",
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("div", {
                ref: t,
                className: (0,
                l.cn)("flex items-center p-6 pt-0", r),
                ...s
            })
        }
        ).displayName = "CardFooter"
    }
    ,
    7927: (e, t, r) => {
        "use strict";
        r.d(t, {
            GeneratorInterface: () => z
        });
        var a = r(5155)
          , s = r(2115)
          , l = r(5695)
          , i = r(285)
          , o = r(6695)
          , n = r(9434);
        let c = s.forwardRef( (e, t) => {
            let {className: r, type: s, ...l} = e;
            return (0,
            a.jsx)("input", {
                type: s,
                className: (0,
                n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                ref: t,
                ...l
            })
        }
        );
        c.displayName = "Input";
        let d = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)("textarea", {
                className: (0,
                n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                ref: t,
                ...s
            })
        }
        );
        d.displayName = "Textarea";
        var m = r(968);
        let p = (0,
        r(2085).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , u = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(m.b, {
                ref: t,
                className: (0,
                n.cn)(p(), r),
                ...s
            })
        }
        );
        u.displayName = m.b.displayName;
        var h = r(8073);
        let x = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsxs)(h.bL, {
                ref: t,
                className: (0,
                n.cn)("relative flex w-full touch-none select-none items-center", r),
                ...s,
                children: [(0,
                a.jsx)(h.CC, {
                    className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                    children: (0,
                    a.jsx)(h.Q6, {
                        className: "absolute h-full bg-primary"
                    })
                }), (0,
                a.jsx)(h.zi, {
                    className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                })]
            })
        }
        );
        x.displayName = h.bL.displayName;
        var g = r(4884);
        let b = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(g.bL, {
                className: (0,
                n.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", r),
                ...s,
                ref: t,
                children: (0,
                a.jsx)(g.zi, {
                    className: (0,
                    n.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                })
            })
        }
        );
        b.displayName = g.bL.displayName;
        var v = r(5481)
          , f = r(3768)
          , w = r(6273)
          , y = r(9311)
          , j = r(5318)
          , N = r(7053)
          , k = r(4601)
          , S = r(8186)
          , A = r(8271)
          , C = r(8341)
          , _ = r(7554)
          , P = r(5599)
          , V = r(8718)
          , O = r(5300)
          , R = r(518)
          , D = r(7933)
          , T = r(9556)
          , E = r(7381)
          , I = r(3672)
          , G = r(1133);
        let F = [{
            id: "video",
            name: "Video Generator",
            icon: (0,
            a.jsx)(v.A, {
                className: "h-5 w-5 text-primary"
            }),
            description: "Create stunning videos from text prompts using Google Veo models",
            gradient: "from-white/10 to-white/5",
            parameters: {
                model: {
                    type: "select",
                    label: "Veo Model",
                    defaultValue: "veo-3.0-generate-preview",
                    options: ["veo-3.0-generate-preview", "veo-3.0-fast-generate-preview", "veo-2.0-generate-001"]
                },
                aspectRatio: {
                    type: "select",
                    label: "Aspect Ratio",
                    defaultValue: "16:9",
                    options: ["16:9", "9:16"]
                },
                personGeneration: {
                    type: "select",
                    label: "Person Generation",
                    defaultValue: "allow_all",
                    options: ["allow_all", "allow_adult", "dont_allow"]
                },
                negativePrompt: {
                    type: "text",
                    label: "Negative Prompt (Optional)",
                    defaultValue: "",
                    placeholder: "e.g., cartoon, drawing, low quality"
                },
                numberOfVideos: {
                    type: "slider",
                    label: "Number of Videos",
                    min: 1,
                    max: 2,
                    step: 1,
                    defaultValue: 1
                },
                durationSeconds: {
                    type: "slider",
                    label: "Duration (seconds)",
                    min: 4,
                    max: 8,
                    step: 1,
                    defaultValue: 8
                }
            }
        }, {
            id: "filmmaker",
            name: "Filmmaker with Veo 3",
            icon: (0,
            a.jsx)(f.A, {
                className: "h-5 w-5 text-primary"
            }),
            description: "Create multi-scene cinematic stories with detailed JSON prompts",
            gradient: "from-white/10 to-white/5",
            parameters: {
                numberOfScenes: {
                    type: "slider",
                    label: "Number of Scenes",
                    min: 3,
                    max: 12,
                    step: 1,
                    defaultValue: 6
                },
                visualStyle: {
                    type: "select",
                    label: "Visual Style",
                    defaultValue: "3D cartoon cinematic",
                    options: ["3D cartoon cinematic", "Photorealistic cinematic", "Anime style cinematic", "Stylized animation", "Documentary style"]
                },
                dialogueLanguage: {
                    type: "select",
                    label: "Dialogue Language",
                    defaultValue: "id-ID",
                    options: ["id-ID", "en-US", "es-ES", "fr-FR", "ja-JP"]
                },
                genre: {
                    type: "select",
                    label: "Genre",
                    defaultValue: "Adventure",
                    options: ["Adventure", "Comedy", "Drama", "Fantasy", "Sci-Fi", "Horror", "Romance", "Mystery"]
                },
                targetAudience: {
                    type: "select",
                    label: "Target Audience",
                    defaultValue: "Family",
                    options: ["Children", "Family", "Teen", "Adult"]
                }
            }
        }, {
            id: "voiceover",
            name: "Voice Over Generator",
            icon: (0,
            a.jsx)(w.A, {
                className: "h-5 w-5 text-primary"
            }),
            description: "Generate natural-sounding voice overs",
            gradient: "from-white/10 to-white/5",
            parameters: {
                voice: {
                    type: "select",
                    label: "Voice Type",
                    defaultValue: "neutral",
                    options: ["neutral", "professional", "friendly", "energetic"]
                },
                speed: {
                    type: "slider",
                    label: "Speech Speed",
                    min: .5,
                    max: 2,
                    step: .1,
                    defaultValue: 1
                },
                language: {
                    type: "select",
                    label: "Language",
                    defaultValue: "en",
                    options: ["en", "es", "fr", "de", "ja"]
                }
            }
        }, {
            id: "microstock",
            name: "Microstock Generator",
            icon: (0,
            a.jsx)(y.A, {
                className: "h-5 w-5 text-primary"
            }),
            description: "Create high-quality stock images",
            gradient: "from-white/10 to-white/5",
            parameters: {
                resolution: {
                    type: "select",
                    label: "Resolution",
                    defaultValue: "1920x1080",
                    options: ["1280x720", "1920x1080", "3840x2160"]
                },
                style: {
                    type: "select",
                    label: "Style",
                    defaultValue: "photography",
                    options: ["photography", "illustration", "vector"]
                },
                commercial: {
                    type: "switch",
                    label: "Commercial Use",
                    defaultValue: !0
                }
            }
        }];
        function z() {
            let e = (0,
            l.useRouter)()
              , [t,r] = (0,
            s.useState)(F[0])
              , [n,m] = (0,
            s.useState)("")
              , [p,h] = (0,
            s.useState)(!1)
              , [g,w] = (0,
            s.useState)(!1)
              , [z,U] = (0,
            s.useState)(!1)
              , [L,$] = (0,
            s.useState)({
                video: [],
                filmmaker: [],
                voiceover: []
            })
              , [B,J] = (0,
            s.useState)({
                video: [],
                filmmaker: [],
                voiceover: []
            })
              , W = L[t.id] || []
              , Y = B[t.id] || []
              , M = e => {
                $(r => ({
                    ...r,
                    [t.id]: "function" == typeof e ? e(r[t.id] || []) : e
                }))
            }
              , q = e => {
                J(r => ({
                    ...r,
                    [t.id]: "function" == typeof e ? e(r[t.id] || []) : e
                }))
            }
              , [H,K] = (0,
            s.useState)("")
              , [Z,Q] = (0,
            s.useState)( () => {
                let e = {};
                return Object.entries(F[0].parameters).forEach(t => {
                    let[r,a] = t;
                    e[r] = a.defaultValue
                }
                ),
                e
            }
            )
              , [X,ee] = (0,
            s.useState)(new Set)
              , [et,er] = (0,
            s.useState)([])
              , [ea,es] = (0,
            s.useState)(null)
              , [el,ei] = (0,
            s.useState)(null)
              , [eo,en] = (0,
            s.useState)(!1)
              , [ec,ed] = (0,
            s.useState)(null)
              , [em,ep] = (0,
            s.useState)(!1)
              , [eu,eh] = (0,
            s.useState)(!1)
              , [ex,eg] = (0,
            s.useState)([])
              , [eb,ev] = (0,
            s.useState)(!1)
              , [ef,ew] = (0,
            s.useState)(!1)
              , [ey,ej] = (0,
            s.useState)(null)
              , eN = (0,
            s.useRef)(null)
              , ek = (0,
            s.useRef)(0);
            (0,
            s.useEffect)( () => {
                let e = {};
                Object.entries(t.parameters).forEach(t => {
                    let[r,a] = t;
                    e[r] = a.defaultValue
                }
                ),
                Q(e)
            }
            , [t]);
            let[eS,eA] = (0,
            s.useState)({
                video: "",
                filmmaker: "",
                voiceover: ""
            })
              , eC = e => {
                K(e),
                eN.current && (eN.current.value = e,
                eN.current.style.height = "auto",
                eN.current.style.height = eN.current.scrollHeight + "px")
            }
              , e_ = (0,
            s.useRef)(new Map);
            (0,
            s.useEffect)( () => {
                let e = {};
                Object.entries(t.parameters).forEach(t => {
                    let[r,a] = t;
                    e[r] = a.defaultValue
                }
                ),
                Q(e)
            }
            , [t]),
            (0,
            s.useEffect)( () => {
                eA(e => ({
                    ...e,
                    [t.id]: H
                }));
                let e = eS[t.id] || "";
                e !== H && eC(e)
            }
            , [t.id]),
            (0,
            s.useEffect)( () => {
                if ("video" === t.id && Z.model) {
                    let e = Z.model
                      , t = {};
                    e.includes("veo-3") ? ("16:9" !== Z.aspectRatio && (t.aspectRatio = "16:9"),
                    1 !== Z.numberOfVideos && (t.numberOfVideos = 1),
                    8 !== Z.durationSeconds && (t.durationSeconds = 8),
                    el ? "allow_adult" !== Z.personGeneration && (t.personGeneration = "allow_adult") : "allow_all" !== Z.personGeneration && (t.personGeneration = "allow_all")) : "veo-2.0-generate-001" === e && el && !["allow_adult", "dont_allow"].includes(Z.personGeneration) && (t.personGeneration = "allow_adult"),
                    Object.keys(t).length > 0 && Q(e => ({
                        ...e,
                        ...t
                    }))
                }
            }
            , [t.id, Z.model, !!el]);
            let eP = async (e, t) => {
                try {
                    return "".concat(e.uri).concat(e.uri.includes("?") ? "&" : "?", "key=").concat(n)
                } catch (e) {
                    return console.error("Failed to load video preview:", e),
                    ""
                }
            }
              , eV = async e => {
                if (e.trim() && n) {
                    eh(!0);
                    try {
                        let t = await fetch("/api/generate-storyboard", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                story: e,
                                numberOfScenes: Z.numberOfScenes || 6,
                                visualStyle: Z.visualStyle || "3D cartoon cinematic",
                                dialogueLanguage: Z.dialogueLanguage || "id-ID",
                                genre: Z.genre || "Adventure",
                                targetAudience: Z.targetAudience || "Family",
                                apiKey: n
                            })
                        })
                          , r = await t.json();
                        if (r.success && r.scenes)
                            eg(r.scenes),
                            eU("success", "\uD83C\uDFAC Storyboard Generated!", "Created ".concat(r.scenes.length, " scenes for your story"));
                        else if (r.rawResponse) {
                            console.log("Raw AI Response:", r.rawResponse),
                            eU("warning", "⚠️ Parsing Issue", "Storyboard generated but needs manual review. Check console for details.");
                            try {
                                let e = r.rawResponse.match(/\[[\s\S]*\]/);
                                if (e) {
                                    let t = JSON.parse(e[0]);
                                    if (Array.isArray(t) && t.length > 0) {
                                        eg(t),
                                        eU("success", "\uD83C\uDFAC Storyboard Recovered!", "Extracted ".concat(t.length, " scenes from response"));
                                        return
                                    }
                                }
                            } catch (e) {
                                console.error("Could not extract JSON from raw response:", e)
                            }
                            throw Error(r.error || "Failed to parse storyboard response")
                        } else
                            throw Error(r.error || "Failed to generate storyboard")
                    } catch (e) {
                        console.error("Storyboard generation error:", e),
                        eU("error", "❌ Generation Failed", e.message || "Failed to generate storyboard")
                    } finally {
                        eh(!1)
                    }
                }
            }
              , eO = async (e, t) => {
                if (!n)
                    return;
                let r = eD(e)
                  , a = e$();
                try {
                    es(a);
                    let s = await eJ(r, {
                        model: Z.model || "veo-3.0-generate-preview",
                        aspectRatio: "16:9",
                        personGeneration: "allow_all",
                        negativePrompt: "",
                        numberOfVideos: 1,
                        durationSeconds: 8
                    });
                    if (es(null),
                    !s.success)
                        throw Error(s.error || "Failed to start video generation");
                    let l = {
                        id: s.operationName,
                        operationName: s.operationName,
                        prompt: r,
                        model: Z.model || "veo-3.0-generate-preview",
                        timestamp: new Date,
                        progress: 0,
                        type: "scene",
                        sceneIndex: t + 1,
                        totalScenes: ex.length,
                        scene: e,
                        parameters: Z
                    };
                    q(e => [l, ...e]),
                    eU("success", "\uD83C\uDFAC Scene ".concat(t + 1, " Started!"), "Your scene video is being created."),
                    eE(s.operationName)
                } catch (r) {
                    es(null),
                    console.error("Scene video generation error:", r);
                    let {title: e, message: t} = ez(r, !1);
                    eU("error", e, t)
                }
            }
              , eR = async function() {
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n && 0 !== ex.length) {
                    ev(!0);
                    try {
                        for (let e = 0; e < ex.length; e++) {
                            let t = ex[e];
                            await eO(t, e),
                            e < ex.length - 1 && await new Promise(e => setTimeout(e, 2e3))
                        }
                        eU("success", "\uD83C\uDFAC All Scenes Started!", "Generating ".concat(ex.length, " scene videos. This will take several minutes."))
                    } catch (e) {
                        console.error("Generate all scenes error:", e),
                        eU("error", "❌ Generation Failed", "Failed to start all scene generations")
                    } finally {
                        ev(!1)
                    }
                }
            }
              , eD = e => {
                try {
                    var t, r, a;
                    let s = (null == (t = e.background_lock) ? void 0 : t.setting) || ""
                      , l = (null == (r = e.background_lock) ? void 0 : r.scenery) || ""
                      , i = (null == (a = e.background_lock) ? void 0 : a.lighting) || ""
                      , o = e.camera ? "".concat(e.camera.framing, ", ").concat(e.camera.angle, ", ").concat(e.camera.movement) : ""
                      , n = (e.character_lock ? Object.values(e.character_lock) : []).map(e => {
                        var t;
                        return "".concat(e.name, ": ").concat((null == (t = e.action_flow) ? void 0 : t.main_action) || e.pose || "")
                    }
                    ).join(", ")
                      , c = e.dialogue ? e.dialogue.map(e => {
                        var t;
                        return null == (t = e.line) ? void 0 : t.replace(/[\[\]]/g, "")
                    }
                    ).join(". ") : "";
                    return "".concat(s, ". ").concat(l, ". ").concat(i, ". Camera: ").concat(o, ". ").concat(n, ". ").concat(c, ". ").concat(e.visual_style || "").trim()
                } catch (t) {
                    return console.error("Error creating detailed prompt:", t),
                    JSON.stringify(e).substring(0, 500)
                }
            }
              , eT = async () => {
                if (H.trim() && n) {
                    if (console.log("Handle send message - API Key status:", n ? "Present (***".concat(n.slice(-4), ")") : "Missing"),
                    K(""),
                    "filmmaker" === t.id)
                        return void await eV(H);
                    if ("video" === t.id) {
                        let e = e$();
                        try {
                            es(e);
                            let t = await eJ(H, {
                                model: Z.model,
                                aspectRatio: Z.aspectRatio,
                                personGeneration: Z.personGeneration,
                                negativePrompt: Z.negativePrompt,
                                numberOfVideos: Z.numberOfVideos,
                                durationSeconds: Z.durationSeconds,
                                ...el && {
                                    inputImage: el
                                }
                            });
                            if (es(null),
                            !t.success)
                                throw Error(t.error || "Failed to start video generation");
                            let r = {
                                id: t.operationName,
                                operationName: t.operationName,
                                prompt: H,
                                model: Z.model,
                                timestamp: new Date,
                                progress: 0
                            };
                            console.log("\uD83C\uDFAC Creating ProcessingVideo:", {
                                operationName: t.operationName,
                                promptLength: H.length,
                                promptPreview: H.substring(0, 50) + "...",
                                model: Z.model,
                                fullProcessingVideo: r
                            }),
                            e_.current.set(t.operationName, {
                                prompt: H,
                                model: Z.model,
                                timestamp: new Date
                            }),
                            console.log("\uD83D\uDCBE Stored prompt data in backup Map:", {
                                operationName: t.operationName,
                                mapSize: e_.current.size,
                                storedPrompt: H.substring(0, 50) + "..."
                            }),
                            q(e => [r, ...e]),
                            eU("success", "\uD83C\uDFAC Generation Started!", "Your video is being created. This may take a few minutes."),
                            eE(t.operationName)
                        } catch (a) {
                            es(null),
                            console.error("Video generation error:", a);
                            let e = (null == a ? void 0 : a.message) || (null == a ? void 0 : a.toString()) || "Unknown error"
                              , {title: t, message: r} = ez(a, e.includes("429") || e.includes("quota") || e.includes("billing"));
                            eU("error", t, r)
                        }
                    }
                }
            }
              , eE = async e => {
                let t = async () => {
                    try {
                        console.log("Polling video status with:", {
                            apiKey: n ? "Present" : "Missing",
                            operationName: e
                        });
                        let r = await fetch("/api/check-video-status", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                apiKey: n,
                                operationName: e
                            })
                        })
                          , a = await r.json();
                        if (a.done) {
                            if (a.done && !a.error) {
                                let t = Y.find(t => t.operationName === e)
                                  , r = e_.current.get(e);
                                console.log("\uD83D\uDD0D Video completion - looking for processingVideo:", {
                                    operationName: e,
                                    processingVideosCount: Y.length,
                                    processingVideoFound: !!t,
                                    backupDataFound: !!r,
                                    availableOperationNames: Y.map(e => e.operationName),
                                    foundPrompt: (null == t ? void 0 : t.prompt) || (null == r ? void 0 : r.prompt) || "NOT FOUND",
                                    mapSize: e_.current.size
                                });
                                let s = await Promise.all(a.videos.map(async (a, s) => {
                                    let l = await eP(a, s)
                                      , i = (null == t ? void 0 : t.prompt) || (null == r ? void 0 : r.prompt) || "No prompt found"
                                      , o = (null == t ? void 0 : t.model) || (null == r ? void 0 : r.model) || "Unknown model";
                                    return console.log("\uD83D\uDCFA Creating completed video ".concat(s, ":"), {
                                        operationName: e,
                                        promptSource: t ? "state" : r ? "backup" : "none",
                                        promptLength: i.length,
                                        promptPreview: i.substring(0, 50) + "...",
                                        model: o
                                    }),
                                    {
                                        id: "".concat(e, "-").concat(s),
                                        uri: a.uri,
                                        mimeType: a.mimeType || "video/mp4",
                                        size: a.size,
                                        previewUrl: l,
                                        fileObject: a.fileObject,
                                        prompt: i,
                                        timestamp: new Date,
                                        model: o
                                    }
                                }
                                ));
                                M(e => [...s, ...e]),
                                eU("success", "✨ Video Ready!", "Your video has been generated successfully! You can now preview and download it."),
                                q(t => t.filter(t => t.operationName !== e)),
                                e_.current.delete(e),
                                console.log("\uD83E\uDDF9 Cleaned up backup data for:", e, "Remaining in map:", e_.current.size)
                            } else if (a.done && a.error) {
                                console.error("Video generation failed:", a.error);
                                let {title: t, message: r} = ez(a.error);
                                eU("error", t, r),
                                q(t => t.filter(t => t.operationName !== e)),
                                e_.current.delete(e),
                                console.log("\uD83E\uDDF9 Cleaned up backup data for failed generation:", e)
                            }
                        } else
                            q(t => t.map(t => t.operationName === e ? {
                                ...t,
                                progress: a.progress || 0
                            } : t)),
                            setTimeout(t, 1e4)
                    } catch (a) {
                        console.error("Polling error:", a);
                        let {title: t, message: r} = ez(a);
                        eU("error", t, r),
                        q(t => t.filter(t => t.operationName !== e)),
                        e_.current.delete(e),
                        console.log("\uD83E\uDDF9 Cleaned up backup data for polling error:", e)
                    }
                }
                ;
                t()
            }
              , eI = async (e, t) => {
                try {
                    let r = await fetch("/api/download-video", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            videoUri: e.uri,
                            fileObject: e.fileObject,
                            apiKey: n
                        })
                    })
                      , a = await r.json();
                    if (!a.success)
                        throw Error(a.error || "Failed to download video");
                    let s = a.videoData
                      , l = new Blob([Uint8Array.from(atob(s), e => e.charCodeAt(0))],{
                        type: a.mimeType
                    })
                      , i = URL.createObjectURL(l)
                      , o = document.createElement("a");
                    o.href = i,
                    o.download = "nexabot_video_".concat(t + 1, ".mp4"),
                    document.body.appendChild(o),
                    o.click(),
                    document.body.removeChild(o),
                    URL.revokeObjectURL(i),
                    eU("success", "\uD83C\uDF89 Download Started!", "Your video is being downloaded to your device.")
                } catch (r) {
                    console.error("Download error:", r);
                    let {title: e, message: t} = ez(r);
                    eU("error", e, t)
                }
            }
              , eG = async (e, a, s) => {
                ep(!0);
                try {
                    eU("info", "Taking Screenshot", "Downloading video for analysis...");
                    let s = await fetch("/api/download-video", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            videoUri: e.uri,
                            fileObject: e.fileObject,
                            apiKey: n
                        })
                    })
                      , l = await s.json();
                    if (!l.success)
                        throw Error(l.error || "Failed to download video for analysis");
                    let i = l.videoData
                      , o = new Blob([Uint8Array.from(atob(i), e => e.charCodeAt(0))],{
                        type: l.mimeType || "video/mp4"
                    });
                    eU("info", "Video Downloaded", "Capturing last frame...");
                    let c = document.createElement("video");
                    return c.src = URL.createObjectURL(o),
                    c.muted = !0,
                    c.preload = "metadata",
                    new Promise( (e, s) => {
                        c.onloadedmetadata = () => {
                            let e = c.duration;
                            c.currentTime = Math.max(.95 * e, e - .1)
                        }
                        ,
                        c.onseeked = async () => {
                            try {
                                let s = document.createElement("canvas")
                                  , l = s.getContext("2d");
                                if (!l)
                                    throw Error("Failed to get canvas context");
                                s.width = c.videoWidth,
                                s.height = c.videoHeight,
                                l.imageSmoothingEnabled = !0,
                                l.imageSmoothingQuality = "high",
                                l.drawImage(c, 0, 0, s.width, s.height);
                                let i = s.toDataURL("image/jpeg", .9);
                                ei(i),
                                "video" !== t.id && r(F.find(e => "video" === e.id) || F[0]),
                                ("veo-3.0-generate-preview" === Z.model || "veo-3.0-fast-generate-preview" === Z.model) && "allow_all" === Z.personGeneration && Q(e => ({
                                    ...e,
                                    personGeneration: "allow_adult"
                                })),
                                URL.revokeObjectURL(c.src),
                                eU("success", "Screenshot Captured!", "Analyzing frame and generating continuation prompt...");
                                try {
                                    let e = await fetch("/api/analyze-and-extend-prompt", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            apiKey: n,
                                            imageData: i,
                                            originalPrompt: a
                                        })
                                    })
                                      , t = await e.json();
                                    e.ok && t.success ? (eC(t.continuationPrompt),
                                    eU("success", "Ready to Extend!", "AI analyzed the frame and generated continuation prompt. Ready to generate next 8 seconds!")) : (console.error("AI analysis failed:", t.error),
                                    eU("warning", "Screenshot Ready", "Frame captured but AI analysis failed. You can manually enter a prompt to continue."))
                                } catch (e) {
                                    console.error("AI analysis error:", e),
                                    eU("warning", "Screenshot Ready", "Frame captured but AI analysis failed. You can manually enter a prompt to continue.")
                                }
                                e()
                            } catch (e) {
                                console.error("Error capturing frame:", e),
                                URL.revokeObjectURL(c.src),
                                s(e)
                            }
                        }
                        ,
                        c.onerror = () => {
                            URL.revokeObjectURL(c.src),
                            s(Error("Failed to load video for screenshot"))
                        }
                    }
                    )
                } catch (e) {
                    console.error("Screenshot error:", e),
                    eU("error", "Screenshot Failed", e instanceof Error ? e.message : "Failed to capture end frame")
                } finally {
                    ep(!1)
                }
            }
              , eF = (e, t) => {
                navigator.clipboard.writeText(e).then( () => {
                    ee(e => new Set([...e, t])),
                    eU("success", "\uD83D\uDCCB Copied!", "Prompt has been copied to your clipboard."),
                    setTimeout( () => {
                        ee(e => {
                            let r = new Set(e);
                            return r.delete(t),
                            r
                        }
                        )
                    }
                    , 2e3)
                }
                ).catch(e => {
                    console.error("Failed to copy prompt:", e),
                    eU("error", "Copy Failed", "Unable to copy prompt to clipboard. Please try again.")
                }
                )
            }
              , ez = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = (null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Unknown error";
                return r.includes("429") || r.includes("quota") || r.includes("billing") ? t ? {
                    title: "\uD83D\uDD11 API Key Exhausted",
                    message: "Retried for 1 minute but quota is still exceeded. Please change your API key or upgrade your billing plan."
                } : {
                    title: "⏳ Quota Limit - Retrying",
                    message: "API quota exceeded, automatically retrying every second. This may take up to 1 minute..."
                } : r.includes("401") || r.includes("unauthorized") || r.includes("API key") ? {
                    title: "\uD83D\uDD11 Authentication Error",
                    message: "Your API key seems invalid or expired. Please check your credentials in the sidebar."
                } : r.includes("rate limit") || r.includes("too many requests") ? {
                    title: "⏱️ Slow Down There!",
                    message: "You're making requests too quickly. Please wait a moment before trying again."
                } : r.includes("network") || r.includes("fetch") || r.includes("connection") ? {
                    title: "\uD83C\uDF10 Connection Problem",
                    message: "Having trouble connecting to our servers. Please check your internet and try again."
                } : r.includes("image") || r.includes("Image") ? {
                    title: "\uD83D\uDDBC️ Image Processing Failed",
                    message: "There was an issue with your image. Please try with a different image or check the format (JPEG/PNG recommended)."
                } : r.includes("personGeneration") || r.includes("person") ? {
                    title: "\uD83D\uDC65 Person Generation Error",
                    message: "Invalid person generation setting for your current mode. The system auto-adjusts these settings."
                } : r.includes("video generation") || r.includes("processing") ? {
                    title: "\uD83C\uDFAC Generation Failed",
                    message: "Something went wrong while creating your video. Our AI might be having a bad day!"
                } : {
                    title: "⚠️ Something Went Wrong",
                    message: "An unexpected error occurred. Don't worry, our engineers are probably already on it!"
                }
            }
              , eU = (e, t, r) => {
                let a = {
                    id: e$(),
                    title: t,
                    message: r,
                    type: e,
                    timestamp: new Date
                };
                er(e => [...e, a]),
                setTimeout( () => {
                    er(e => e.filter(e => e.id !== a.id))
                }
                , "error" === e ? 7e3 : 5e3)
            }
              , eL = e => {
                er(t => t.filter(t => t.id !== e))
            }
              , e$ = () => (ek.current += 1,
            "".concat(Date.now(), "-").concat(ek.current))
              , eB = e => {
                var t;
                let r = null == (t = e.target.files) ? void 0 : t[0];
                if (r) {
                    if (!r.type.startsWith("image/"))
                        return void eU("error", "❌ Invalid File", "Please select an image file (JPG, PNG, etc.)");
                    let e = new FileReader;
                    e.onload = e => {
                        var t;
                        ei(null == (t = e.target) ? void 0 : t.result),
                        eU("success", "\uD83D\uDDBC️ Image Added!", "Image uploaded successfully. Ready for image-to-video generation."),
                        ("veo-3.0-generate-preview" === Z.model || "veo-3.0-fast-generate-preview" === Z.model) && "allow_all" === Z.personGeneration && (Q(e => ({
                            ...e,
                            personGeneration: "allow_adult"
                        })),
                        eU("warning", "⚙️ Setting Auto-Adjusted", 'Person Generation changed to "Allow Adult" for Veo 3 image-to-video compatibility.'))
                    }
                    ,
                    e.readAsDataURL(r)
                }
            }
              , eJ = async function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60
                  , a = 0
                  , s = null
                  , l = null;
                for (; a < r; )
                    try {
                        console.log("\uD83D\uDD04 Retry attempt ".concat(a + 1, "/").concat(r, " for video generation"));
                        let s = await fetch("/api/generate-video", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                prompt: e,
                                apiKey: n,
                                ...t
                            })
                        })
                          , i = await s.json();
                        if (!s.ok)
                            throw Error(i.error || "Video generation failed");
                        return l && eL(l),
                        console.log("✅ Video generation succeeded on attempt ".concat(a + 1)),
                        i
                    } catch (t) {
                        s = t;
                        let e = (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error";
                        if (!(e.includes("429") || e.includes("quota") || e.includes("billing")))
                            throw console.log("❌ Non-retryable error detected: ".concat(e)),
                            t;
                        if (a++,
                        console.log("⏳ Retryable error (".concat(a, "/").concat(r, "): ").concat(e)),
                        1 === a) {
                            let {title: e, message: s} = ez(t, !1)
                              , i = {
                                id: e$(),
                                title: e,
                                message: "".concat(s, " (Attempt ").concat(a, "/").concat(r, ")"),
                                type: "warning",
                                timestamp: new Date
                            };
                            l = i.id,
                            er(e => [...e, i])
                        } else
                            l && er(e => e.map(e => e.id === l ? {
                                ...e,
                                message: "API quota exceeded, automatically retrying... (Attempt ".concat(a, "/").concat(r, ")")
                            } : e));
                        if (a >= r) {
                            console.log("\uD83D\uDEAB Max retries (".concat(r, ") exceeded")),
                            l && eL(l);
                            break
                        }
                        await new Promise(e => setTimeout(e, 1e3))
                    }
                throw s
            }
              , eW = async () => {
                if (H.trim() && n) {
                    en(!0);
                    try {
                        console.log("\uD83C\uDFA8 Enhancing prompt:", H);
                        let e = await fetch("/api/enhance-prompt", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                prompt: H,
                                apiKey: n
                            })
                        })
                          , t = await e.json();
                        if (!e.ok)
                            throw Error(t.error || "Failed to enhance prompt");
                        if (t.success && t.enhancedPrompt) {
                            K(t.enhancedPrompt),
                            ed(t.enhancedPrompt);
                            let e = t.improvement;
                            eU("success", "\uD83C\uDFAC Cinematic Enhancement Complete!", "Your prompt has been transformed with ".concat(e.improvementFactor, "x more cinematic detail including camera work, lighting, character details, and atmosphere. Ready for professional video generation!")),
                            console.log("✅ Prompt enhanced successfully"),
                            console.log("\uD83D\uDCCA Improvement stats:", e)
                        } else
                            throw Error("No enhanced prompt received")
                    } catch (r) {
                        console.error("❌ Prompt enhancement failed:", r);
                        let {title: e, message: t} = ez(r.message || "Failed to enhance prompt");
                        eU("error", e, t)
                    } finally {
                        en(!1)
                    }
                }
            }
              , eY = async () => {
                if (H.trim() && n) {
                    ew(!0);
                    try {
                        console.log("\uD83C\uDFAD Enhancing story topic:", H);
                        let e = await fetch("/api/enhance-prompt", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                prompt: H,
                                apiKey: n,
                                mode: "topic",
                                parameters: {
                                    genre: Z.genre || "Adventure",
                                    targetAudience: Z.targetAudience || "Family",
                                    visualStyle: Z.visualStyle || "3D cartoon cinematic"
                                }
                            })
                        })
                          , t = await e.json();
                        if (!e.ok)
                            throw Error(t.error || "Failed to enhance topic");
                        if (t.success && t.enhancedPrompt)
                            K(t.enhancedPrompt),
                            ej(t.enhancedPrompt),
                            eU("success", "\uD83C\uDFAC Topic Enhanced!", "Your story topic has been enhanced with more creative details, character depth, and engaging plot elements perfect for ".concat(Z.genre || "Adventure", " storytelling!")),
                            console.log("✅ Topic enhanced successfully");
                        else
                            throw Error("No enhanced topic received")
                    } catch (r) {
                        console.error("❌ Topic enhancement failed:", r);
                        let {title: e, message: t} = ez(r.message || "Failed to enhance topic");
                        eU("error", e, t)
                    } finally {
                        ew(!1)
                    }
                }
            }
              , eM = (e, r) => {
                var s, l, i, o, n, d, m, p, h, g, v, f, w, y, j, N, k;
                switch (r.type) {
                case "slider":
                    let S = r.max
                      , A = r.min
                      , C = !1;
                    return "video" === t.id && ("numberOfVideos" === e && (null == (i = Z.model) ? void 0 : i.includes("veo-3")) ? (S = 1,
                    A = 1,
                    C = !0) : "durationSeconds" === e && (null == (o = Z.model) ? void 0 : o.includes("veo-3")) && (S = 8,
                    A = 8,
                    C = !0)),
                    (0,
                    a.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0,
                            a.jsxs)(u, {
                                className: "text-sm text-gray-300",
                                children: [r.label, "video" === t.id && "numberOfVideos" === e && (null == (s = Z.model) ? void 0 : s.includes("veo-3")) && (0,
                                a.jsx)("span", {
                                    className: "text-xs text-amber-400 ml-2",
                                    children: "(Veo 3 fixed: 1)"
                                }), "video" === t.id && "durationSeconds" === e && (null == (l = Z.model) ? void 0 : l.includes("veo-3")) && (0,
                                a.jsx)("span", {
                                    className: "text-xs text-amber-400 ml-2",
                                    children: "(Veo 3 fixed: 8s)"
                                })]
                            }), (0,
                            a.jsx)("span", {
                                className: "text-sm text-primary font-medium",
                                children: null != (n = Z[e]) ? n : r.defaultValue
                            })]
                        }), (0,
                        a.jsx)(x, {
                            value: [null != (d = Z[e]) ? d : r.defaultValue],
                            onValueChange: t => Q(r => ({
                                ...r,
                                [e]: t[0]
                            })),
                            min: A,
                            max: S,
                            step: r.step,
                            className: "w-full",
                            disabled: C
                        })]
                    }, e);
                case "switch":
                    return (0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        a.jsx)(u, {
                            className: "text-sm text-gray-300",
                            children: r.label
                        }), (0,
                        a.jsx)(b, {
                            checked: null != (m = Z[e]) ? m : r.defaultValue,
                            onCheckedChange: t => Q(r => ({
                                ...r,
                                [e]: t
                            }))
                        })]
                    }, e);
                case "select":
                    let _ = r.options || [];
                    return "video" === t.id && ("aspectRatio" === e && (null == (f = Z.model) ? void 0 : f.includes("veo-3")) ? _ = ["16:9"] : "personGeneration" === e ? (null == (j = Z.model) ? void 0 : j.includes("veo-3")) ? _ = el ? ["allow_adult"] : ["allow_all"] : "veo-2.0-generate-001" === Z.model && (_ = el ? ["allow_adult", "dont_allow"] : ["allow_all", "allow_adult", "dont_allow"]) : "durationSeconds" === e && (null == (w = Z.model) ? void 0 : w.includes("veo-3")) ? _ = [8] : "numberOfVideos" === e && (null == (y = Z.model) ? void 0 : y.includes("veo-3")) && (_ = [1])),
                    (0,
                    a.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        a.jsxs)(u, {
                            className: "text-sm text-gray-300",
                            children: [r.label, "video" === t.id && "aspectRatio" === e && (null == (p = Z.model) ? void 0 : p.includes("veo-3")) && (0,
                            a.jsx)("span", {
                                className: "text-xs text-amber-400 ml-2",
                                children: "(Veo 3 only supports 16:9)"
                            }), "video" === t.id && "personGeneration" === e && (0,
                            a.jsx)("span", {
                                className: "text-xs text-amber-400 ml-2",
                                children: (null == (h = Z.model) ? void 0 : h.includes("veo-3")) ? el ? "(Image-to-video: allow_adult only)" : "(Text-to-video: allow_all only)" : "veo-2.0-generate-001" === Z.model ? el ? "(Image-to-video: allow_adult, dont_allow)" : "(Text-to-video: all options)" : ""
                            }), "video" === t.id && "durationSeconds" === e && (null == (g = Z.model) ? void 0 : g.includes("veo-3")) && (0,
                            a.jsx)("span", {
                                className: "text-xs text-amber-400 ml-2",
                                children: "(Veo 3 fixed: 8 seconds)"
                            }), "video" === t.id && "numberOfVideos" === e && (null == (v = Z.model) ? void 0 : v.includes("veo-3")) && (0,
                            a.jsx)("span", {
                                className: "text-xs text-amber-400 ml-2",
                                children: "(Veo 3 max: 1 video)"
                            })]
                        }), (0,
                        a.jsx)("select", {
                            value: null != (N = Z[e]) ? N : r.defaultValue,
                            onChange: t => Q(r => ({
                                ...r,
                                [e]: t.target.value
                            })),
                            className: "w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none",
                            children: _.map(e => (0,
                            a.jsx)("option", {
                                value: e,
                                className: "bg-zinc-900",
                                children: e
                            }, e))
                        })]
                    }, e);
                case "text":
                    return (0,
                    a.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        a.jsx)(u, {
                            className: "text-sm text-gray-300",
                            children: r.label
                        }), (0,
                        a.jsx)(c, {
                            value: null != (k = Z[e]) ? k : r.defaultValue,
                            onChange: t => Q(r => ({
                                ...r,
                                [e]: t.target.value
                            })),
                            placeholder: r.placeholder,
                            className: "w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        })]
                    }, e);
                default:
                    return null
                }
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "min-h-screen bg-black relative",
                children: [g && (0,
                a.jsx)("div", {
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",
                    onClick: () => w(!1)
                }), z && (0,
                a.jsx)("div", {
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",
                    onClick: () => U(!1)
                }), (0,
                a.jsx)("div", {
                    className: "fixed top-6 left-6 w-80 z-50 transition-transform duration-300 ".concat(g ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)] lg:translate-x-0"),
                    style: {
                        height: "calc(100vh - 3rem)"
                    },
                    children: (0,
                    a.jsxs)(o.Zp, {
                        className: "h-full backdrop-blur-xl bg-white/[0.02] border-white/10 overflow-hidden flex flex-col",
                        children: [(0,
                        a.jsx)(o.aR, {
                            className: "border-b border-white/10 pb-4",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)(o.ZB, {
                                        className: "text-white text-lg font-semibold",
                                        children: "nexabot"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "AI Content Generator"
                                    })]
                                }), (0,
                                a.jsx)(i.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => w(!1),
                                    className: "lg:hidden text-gray-400 hover:text-white",
                                    children: (0,
                                    a.jsx)(j.A, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            })
                        }), (0,
                        a.jsxs)(o.Wu, {
                            className: "p-4 flex-1 overflow-y-auto dark-scrollbar pr-2",
                            style: {
                                scrollbarWidth: "thin",
                                scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                            },
                            children: [(0,
                            a.jsxs)("div", {
                                className: "mb-6",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [(0,
                                    a.jsx)(N.A, {
                                        className: "h-4 w-4 text-primary"
                                    }), (0,
                                    a.jsx)(u, {
                                        className: "text-sm font-medium text-white",
                                        children: "API Key"
                                    })]
                                }), (0,
                                a.jsx)(c, {
                                    type: "password",
                                    placeholder: "Enter your API key...",
                                    value: n,
                                    onChange: e => m(e.target.value),
                                    className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xs text-gray-400 mt-1",
                                    children: "Required for AI generation"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "mb-6",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [(0,
                                    a.jsx)(k.A, {
                                        className: "h-4 w-4 text-primary"
                                    }), (0,
                                    a.jsx)(u, {
                                        className: "text-sm font-medium text-white",
                                        children: "AI Tools"
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "space-y-2",
                                    children: F.map(e => (0,
                                    a.jsx)("button", {
                                        onClick: () => {
                                            r(e),
                                            w(!1)
                                        }
                                        ,
                                        className: "w-full p-3 rounded-lg text-left transition-all duration-200 ".concat(t.id === e.id ? "bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10" : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"),
                                        children: (0,
                                        a.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "p-2 rounded-lg bg-gradient-to-r ".concat(e.gradient),
                                                children: e.icon
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "text-sm font-medium text-white",
                                                    children: e.name
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "text-xs text-gray-400 line-clamp-2",
                                                    children: e.description
                                                })]
                                            })]
                                        })
                                    }, e.id))
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "mt-auto pt-4 border-t border-white/10",
                                children: (0,
                                a.jsxs)(i.$, {
                                    onClick: () => e.push("/"),
                                    variant: "outline",
                                    className: "w-full bg-white/5 border-white/10 text-white hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-all duration-200",
                                    children: [(0,
                                    a.jsx)(S.A, {
                                        className: "h-4 w-4 mr-2"
                                    }), "Back to Home"]
                                })
                            })]
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "fixed top-6 right-6 w-80 z-50 transition-transform duration-300 lg:hidden ".concat(z ? "translate-x-0" : "translate-x-[calc(100%+1.5rem)]"),
                    style: {
                        height: "calc(100vh - 3rem)"
                    },
                    children: (0,
                    a.jsxs)(o.Zp, {
                        className: "h-full backdrop-blur-xl bg-white/[0.02] border-white/10 overflow-hidden flex flex-col",
                        children: [(0,
                        a.jsxs)(o.aR, {
                            className: "border-b border-white/10 pb-4",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0,
                                    a.jsx)(A.A, {
                                        className: "h-4 w-4 text-primary"
                                    }), (0,
                                    a.jsx)(o.ZB, {
                                        className: "text-white text-lg font-semibold",
                                        children: "Settings"
                                    })]
                                }), (0,
                                a.jsx)(i.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => U(!1),
                                    className: "text-gray-400 hover:text-white",
                                    children: (0,
                                    a.jsx)(j.A, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), (0,
                            a.jsxs)("p", {
                                className: "text-gray-400 text-sm",
                                children: [t.name, " Configuration"]
                            })]
                        }), (0,
                        a.jsx)(o.Wu, {
                            className: "p-4 flex-1 overflow-y-auto dark-scrollbar pr-2",
                            style: {
                                scrollbarWidth: "thin",
                                scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                            },
                            children: (0,
                            a.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [(0,
                                    a.jsx)(k.A, {
                                        className: "h-4 w-4 text-primary"
                                    }), (0,
                                    a.jsx)(u, {
                                        className: "text-sm font-medium text-white",
                                        children: "Parameters"
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "space-y-4",
                                    children: Object.entries(t.parameters).map(e => {
                                        let[t,r] = e;
                                        return eM(t, r)
                                    }
                                    )
                                })]
                            })
                        })]
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "lg:ml-[22rem] min-h-screen flex flex-col",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl",
                        children: [(0,
                        a.jsxs)(i.$, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => w(!0),
                            className: "text-white",
                            children: [(0,
                            a.jsx)(C.A, {
                                className: "h-4 w-4 mr-2"
                            }), "Tools"]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0,
                            a.jsx)("div", {
                                className: "p-2 rounded-lg bg-gradient-to-r ".concat(t.gradient),
                                children: t.icon
                            }), (0,
                            a.jsx)("div", {
                                children: (0,
                                a.jsx)("div", {
                                    className: "text-sm font-medium text-white",
                                    children: t.name
                                })
                            })]
                        }), (0,
                        a.jsx)(i.$, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => U(!0),
                            className: "text-white",
                            children: (0,
                            a.jsx)(A.A, {
                                className: "h-4 w-4"
                            })
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "flex-1 pb-0",
                        children: (0,
                        a.jsx)("div", {
                            className: "p-4 lg:p-8 pb-0",
                            children: (0,
                            a.jsxs)(o.Zp, {
                                className: "h-[calc(100vh-20rem)] lg:h-[calc(100vh-22rem)] backdrop-blur-xl bg-white/[0.02] border-white/10 flex flex-col",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "flex items-center justify-between p-4 lg:p-6 border-b border-white/10",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "p-3 rounded-xl bg-gradient-to-r ".concat(t.gradient),
                                            children: t.icon
                                        }), (0,
                                        a.jsxs)("div", {
                                            children: [(0,
                                            a.jsx)("h1", {
                                                className: "text-xl font-semibold text-white",
                                                children: "Content Gallery"
                                            }), (0,
                                            a.jsxs)("p", {
                                                className: "text-sm text-gray-400",
                                                children: [W.length, " completed • ", Y.length, " generating"]
                                            })]
                                        })]
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "flex-1 overflow-hidden p-2 lg:p-6",
                                    children: "filmmaker" === t.id ? (0,
                                    a.jsx)("div", {
                                        className: "h-full",
                                        children: 0 === ex.length && 0 === W.length && 0 === Y.length ? (0,
                                        a.jsx)("div", {
                                            className: "h-full flex items-center justify-center text-center",
                                            children: (0,
                                            a.jsxs)("div", {
                                                className: "max-w-md",
                                                children: [(0,
                                                a.jsx)(f.A, {
                                                    className: "h-16 w-16 text-gray-600 mx-auto mb-4"
                                                }), (0,
                                                a.jsx)("h3", {
                                                    className: "text-xl font-semibold text-white mb-2",
                                                    children: "Create Your Story"
                                                }), (0,
                                                a.jsx)("p", {
                                                    className: "text-gray-400 mb-6",
                                                    children: "Enter your story idea to generate detailed scene prompts!"
                                                }), eu && (0,
                                                a.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-2 text-primary",
                                                    children: [(0,
                                                    a.jsx)(_.A, {
                                                        className: "h-4 w-4 animate-spin"
                                                    }), (0,
                                                    a.jsx)("span", {
                                                        children: "Generating storyboard..."
                                                    })]
                                                })]
                                            })
                                        }) : (0,
                                        a.jsxs)("div", {
                                            className: "h-full overflow-y-auto space-y-6 dark-scrollbar pr-2",
                                            style: {
                                                scrollbarWidth: "thin",
                                                scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                            },
                                            children: [ex.length > 0 && (0,
                                            a.jsxs)("div", {
                                                children: [(0,
                                                a.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4 p-4 bg-white/5 rounded-lg border border-white/10",
                                                    children: [(0,
                                                    a.jsxs)("div", {
                                                        children: [(0,
                                                        a.jsx)("h3", {
                                                            className: "text-white font-medium",
                                                            children: "Storyboard Scenes"
                                                        }), (0,
                                                        a.jsxs)("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [ex.length, " scenes ready for video generation"]
                                                        })]
                                                    }), (0,
                                                    a.jsx)(i.$, {
                                                        onClick: () => eR(),
                                                        disabled: eb || !n,
                                                        className: "bg-primary hover:bg-primary/90",
                                                        children: eb ? (0,
                                                        a.jsxs)(a.Fragment, {
                                                            children: [(0,
                                                            a.jsx)(_.A, {
                                                                className: "h-4 w-4 mr-2 animate-spin"
                                                            }), "Generating All..."]
                                                        }) : (0,
                                                        a.jsxs)(a.Fragment, {
                                                            children: [(0,
                                                            a.jsx)(v.A, {
                                                                className: "h-4 w-4 mr-2"
                                                            }), "Generate All Videos"]
                                                        })
                                                    })]
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6",
                                                    children: ex.map( (e, t) => {
                                                        var r, s, l;
                                                        return (0,
                                                        a.jsxs)("div", {
                                                            className: "bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-lg border border-white/10 p-4",
                                                            children: [(0,
                                                            a.jsxs)("div", {
                                                                className: "flex items-center justify-between mb-3",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [(0,
                                                                    a.jsx)("div", {
                                                                        className: "bg-primary/20 rounded-full px-3 py-1",
                                                                        children: (0,
                                                                        a.jsxs)("span", {
                                                                            className: "text-primary text-sm font-medium",
                                                                            children: ["Scene ", t + 1]
                                                                        })
                                                                    }), (0,
                                                                    a.jsxs)("span", {
                                                                        className: "text-gray-400 text-xs",
                                                                        children: [e.duration_sec, "s"]
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)(i.$, {
                                                                    onClick: () => eO(e, t),
                                                                    disabled: null !== ea || !n,
                                                                    size: "sm",
                                                                    className: "bg-primary/20 hover:bg-primary/30 text-primary border-primary/30",
                                                                    variant: "outline",
                                                                    children: [(0,
                                                                    a.jsx)(v.A, {
                                                                        className: "h-3 w-3 mr-1"
                                                                    }), "Generate"]
                                                                })]
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-3",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    children: [(0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs text-gray-400 mb-1",
                                                                        children: "SETTING"
                                                                    }), (0,
                                                                    a.jsx)("p", {
                                                                        className: "text-white text-sm",
                                                                        children: (null == (r = e.background_lock) ? void 0 : r.setting) || "No setting defined"
                                                                    })]
                                                                }), e.character_lock && Object.keys(e.character_lock).length > 0 && (0,
                                                                a.jsxs)("div", {
                                                                    children: [(0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs text-gray-400 mb-1",
                                                                        children: "CHARACTERS"
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "space-y-1",
                                                                        children: Object.values(e.character_lock).map( (e, t) => {
                                                                            var r;
                                                                            return (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-white text-sm",
                                                                                children: [(0,
                                                                                a.jsxs)("span", {
                                                                                    className: "text-primary",
                                                                                    children: [e.name, ":"]
                                                                                }), " ", (null == (r = e.action_flow) ? void 0 : r.main_action) || e.pose || "No action defined"]
                                                                            }, t)
                                                                        }
                                                                        )
                                                                    })]
                                                                }), e.dialogue && e.dialogue.length > 0 && (0,
                                                                a.jsxs)("div", {
                                                                    children: [(0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs text-gray-400 mb-1",
                                                                        children: "DIALOGUE"
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "space-y-1",
                                                                        children: e.dialogue.map( (e, t) => {
                                                                            var r;
                                                                            return (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-white text-sm",
                                                                                children: [(0,
                                                                                a.jsxs)("span", {
                                                                                    className: "text-primary",
                                                                                    children: [e.speaker, ":"]
                                                                                }), " ", null == (r = e.line) ? void 0 : r.replace(/[\[\]]/g, "")]
                                                                            }, t)
                                                                        }
                                                                        )
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)("div", {
                                                                    children: [(0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs text-gray-400 mb-1",
                                                                        children: "CAMERA"
                                                                    }), (0,
                                                                    a.jsxs)("p", {
                                                                        className: "text-white text-sm",
                                                                        children: [null == (s = e.camera) ? void 0 : s.framing, ", ", null == (l = e.camera) ? void 0 : l.angle]
                                                                    })]
                                                                }), (0,
                                                                a.jsxs)(i.$, {
                                                                    onClick: () => {
                                                                        navigator.clipboard.writeText(JSON.stringify(e, null, 2)),
                                                                        eU("success", "\uD83D\uDCCB Copied!", "Scene ".concat(t + 1, " JSON copied to clipboard"))
                                                                    }
                                                                    ,
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "w-full text-gray-400 hover:text-white",
                                                                    children: [(0,
                                                                    a.jsx)(P.A, {
                                                                        className: "h-3 w-3 mr-2"
                                                                    }), "Copy Scene JSON"]
                                                                })]
                                                            })]
                                                        }, t)
                                                    }
                                                    )
                                                })]
                                            }), (W.length > 0 || Y.length > 0) && (0,
                                            a.jsxs)("div", {
                                                children: [(0,
                                                a.jsxs)("div", {
                                                    className: "flex items-center gap-3 mb-4",
                                                    children: [(0,
                                                    a.jsx)("div", {
                                                        className: "bg-green-500/20 p-2 rounded-lg",
                                                        children: (0,
                                                        a.jsx)(v.A, {
                                                            className: "h-5 w-5 text-green-400"
                                                        })
                                                    }), (0,
                                                    a.jsxs)("div", {
                                                        children: [(0,
                                                        a.jsx)("h3", {
                                                            className: "text-white font-medium",
                                                            children: "Generated Videos"
                                                        }), (0,
                                                        a.jsxs)("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [W.length, " completed • ", Y.length, " generating"]
                                                        })]
                                                    })]
                                                }), (0,
                                                a.jsx)("div", {
                                                    className: "flex gap-4 overflow-x-auto pb-4 pr-2 dark-scrollbar",
                                                    style: {
                                                        scrollbarWidth: "thin",
                                                        scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                    },
                                                    children: [...[...Y].reverse().map(e => ({
                                                        ...e,
                                                        type: "processing"
                                                    })), ...[...W].reverse().map(e => ({
                                                        ...e,
                                                        status: "completed"
                                                    }))].map( (e, t) => (0,
                                                    a.jsxs)("div", {
                                                        className: "flex-shrink-0 w-80 h-full rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 flex flex-col",
                                                        children: [(0,
                                                        a.jsx)("div", {
                                                            className: "mb-3",
                                                            children: "processing" === e.type ? (0,
                                                            a.jsx)("div", {
                                                                className: "h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/5",
                                                                children: (0,
                                                                a.jsxs)("div", {
                                                                    className: "text-center text-gray-400",
                                                                    children: [(0,
                                                                    a.jsx)(_.A, {
                                                                        className: "h-6 w-6 mx-auto mb-2 animate-spin text-primary"
                                                                    }), (0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs font-medium",
                                                                        children: "Generating Scene Video..."
                                                                    }), e.sceneIndex && (0,
                                                                    a.jsxs)("p", {
                                                                        className: "text-xs text-primary mt-1",
                                                                        children: ["Scene ", e.sceneIndex]
                                                                    }), (0,
                                                                    a.jsxs)("p", {
                                                                        className: "text-xs mt-1 text-primary",
                                                                        children: [e.progress || 0, "%"]
                                                                    })]
                                                                })
                                                            }) : e.previewUrl ? (0,
                                                            a.jsxs)("video", {
                                                                controls: !0,
                                                                className: "w-full h-48 rounded-lg bg-black object-cover border border-white/10",
                                                                children: [(0,
                                                                a.jsx)("source", {
                                                                    src: e.previewUrl,
                                                                    type: e.mimeType || "video/mp4"
                                                                }), "Your browser does not support the video tag."]
                                                            }) : (0,
                                                            a.jsx)("div", {
                                                                className: "w-full h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/5",
                                                                children: (0,
                                                                a.jsxs)("div", {
                                                                    className: "text-center text-gray-400",
                                                                    children: [(0,
                                                                    a.jsx)(v.A, {
                                                                        className: "h-6 w-6 mx-auto mb-2"
                                                                    }), (0,
                                                                    a.jsx)("p", {
                                                                        className: "text-xs",
                                                                        children: "Loading..."
                                                                    })]
                                                                })
                                                            })
                                                        }), (0,
                                                        a.jsxs)("div", {
                                                            className: "flex-1 flex flex-col justify-between",
                                                            children: [(0,
                                                            a.jsx)("div", {
                                                                className: "space-y-2",
                                                                children: (0,
                                                                a.jsxs)("div", {
                                                                    className: "text-xs text-gray-300",
                                                                    children: [(0,
                                                                    a.jsx)("div", {
                                                                        className: "font-medium text-white mb-1 truncate",
                                                                        title: e.prompt,
                                                                        children: e.sceneIndex ? "Scene ".concat(e.sceneIndex) : "Generated Video"
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "text-gray-400 mb-2",
                                                                        children: e.model
                                                                    }), "completed" === e.status && e.size && (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-gray-400 mb-2",
                                                                        children: [(e.size / 1048576).toFixed(1), " MB"]
                                                                    })]
                                                                })
                                                            }), "completed" === e.status && (0,
                                                            a.jsx)("div", {
                                                                className: "flex gap-2",
                                                                children: (0,
                                                                a.jsxs)(i.$, {
                                                                    onClick: () => eI(e, t),
                                                                    size: "sm",
                                                                    className: "flex-1 bg-primary text-black hover:bg-primary/90",
                                                                    children: [(0,
                                                                    a.jsx)(V.A, {
                                                                        className: "h-3 w-3 mr-1"
                                                                    }), "Download"]
                                                                })
                                                            })]
                                                        })]
                                                    }, e.id))
                                                })]
                                            })]
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {
                                        children: 0 === W.length && 0 === Y.length ? (0,
                                        a.jsx)("div", {
                                            className: "h-full flex items-center justify-center text-center",
                                            children: (0,
                                            a.jsxs)("div", {
                                                className: "max-w-md",
                                                children: [(0,
                                                a.jsx)(v.A, {
                                                    className: "h-16 w-16 text-gray-600 mx-auto mb-4"
                                                }), (0,
                                                a.jsx)("h3", {
                                                    className: "text-xl font-semibold text-white mb-2",
                                                    children: "No content yet"
                                                }), (0,
                                                a.jsx)("p", {
                                                    className: "text-gray-400 mb-6",
                                                    children: "Generate your first content to get started!"
                                                })]
                                            })
                                        }) : (0,
                                        a.jsxs)("div", {
                                            className: "h-full",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "hidden lg:block h-full",
                                                children: (0,
                                                a.jsx)("div", {
                                                    className: "flex gap-4 overflow-x-auto h-full p-1 dark-scrollbar",
                                                    style: {
                                                        scrollbarWidth: "thin",
                                                        scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                    },
                                                    children: [...[...Y].reverse().map(e => ({
                                                        ...e,
                                                        type: "processing"
                                                    })), ...[...W].reverse().map(e => ({
                                                        ...e,
                                                        status: "completed"
                                                    }))].map( (e, t) => {
                                                        var s, l, o, n, c, d, m, p, u, h, x, g, b, f;
                                                        return (0,
                                                        a.jsxs)("div", {
                                                            className: "flex-shrink-0 w-80 h-full rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 flex flex-col",
                                                            children: [(0,
                                                            a.jsx)("div", {
                                                                className: "mb-3",
                                                                children: "processing" === e.type ? e.parameters && (e.parameters.scenes || e.parameters.genre) ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-lg border border-purple-500/20 overflow-hidden",
                                                                    children: [(0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center bg-gradient-to-r from-purple-500/15 to-blue-500/10 p-2 border-b border-purple-500/15",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "relative inline-block",
                                                                            children: [(0,
                                                                            a.jsx)(_.A, {
                                                                                className: "h-4 w-4 mx-auto mb-1 animate-spin text-purple-400"
                                                                            }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "absolute inset-0 h-4 w-4 mx-auto mb-1 rounded-full bg-purple-400/20 blur-md"
                                                                            })]
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-xs font-medium text-purple-200",
                                                                            children: "Generating..."
                                                                        }), (0,
                                                                        a.jsx)("div", {
                                                                            className: "mt-1 bg-purple-500/20 rounded px-2 py-1 inline-block",
                                                                            children: (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-xs text-purple-100",
                                                                                children: [e.progress || 0, "%"]
                                                                            })
                                                                        })]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "h-32 overflow-y-auto dark-scrollbar p-2",
                                                                        style: {
                                                                            scrollbarWidth: "thin",
                                                                            scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                                        },
                                                                        children: (0,
                                                                        a.jsx)("div", {
                                                                            className: "bg-black/20 rounded p-2 text-xs text-gray-300",
                                                                            children: (0,
                                                                            a.jsx)("pre", {
                                                                                className: "whitespace-pre-wrap font-mono text-[10px] leading-relaxed",
                                                                                children: e.streamingContent || "Starting storyboard generation..."
                                                                            })
                                                                        })
                                                                    })]
                                                                }) : (0,
                                                                a.jsx)("div", {
                                                                    className: "h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/5",
                                                                    children: (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center text-gray-400",
                                                                        children: [(0,
                                                                        a.jsx)(_.A, {
                                                                            className: "h-6 w-6 mx-auto mb-2 animate-spin text-primary"
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-xs font-medium",
                                                                            children: "Generating..."
                                                                        }), (0,
                                                                        a.jsxs)("p", {
                                                                            className: "text-xs mt-1 text-primary",
                                                                            children: [e.progress || 0, "%"]
                                                                        })]
                                                                    })
                                                                }) : "scene" === e.type ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-lg border border-purple-500/20 overflow-hidden",
                                                                    children: [(console.log("\uD83D\uDD0D Desktop Scene Card Debug:", {
                                                                        videoType: e.type,
                                                                        sceneIndex: e.sceneIndex,
                                                                        totalScenes: e.totalScenes,
                                                                        hasScene: !!e.scene,
                                                                        sceneId: null == (g = e.scene) ? void 0 : g.scene_id,
                                                                        setting: null == (f = e.scene) || null == (b = f.background_lock) ? void 0 : b.setting
                                                                    }),
                                                                    null), (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center bg-gradient-to-r from-purple-500/15 to-blue-500/10 p-2 border-b border-purple-500/15",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "flex items-center justify-center gap-2",
                                                                            children: [(0,
                                                                            a.jsx)(O.A, {
                                                                                className: "h-4 w-4 text-purple-400"
                                                                            }), (0,
                                                                            a.jsxs)("span", {
                                                                                className: "text-xs font-medium text-purple-200",
                                                                                children: ["Scene ", (null == (s = e.scene) ? void 0 : s.scene_id) || e.sceneIndex]
                                                                            }), (0,
                                                                            a.jsxs)("span", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: ["(", e.sceneIndex, "/", e.totalScenes, ")"]
                                                                            })]
                                                                        }), (0,
                                                                        a.jsxs)("div", {
                                                                            className: "mt-1 text-xs text-gray-400",
                                                                            children: [(null == (l = e.scene) ? void 0 : l.duration_sec) || 8, "s • ", (null == (o = e.parameters) ? void 0 : o.genre) || "Story"]
                                                                        })]
                                                                    }), (0,
                                                                    a.jsxs)("div", {
                                                                        className: "p-3 h-32 overflow-y-auto dark-scrollbar",
                                                                        style: {
                                                                            scrollbarWidth: "thin",
                                                                            scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                                        },
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "text-xs text-gray-300 mb-2",
                                                                            children: [(0,
                                                                            a.jsx)("div", {
                                                                                className: "font-medium text-purple-300 mb-2",
                                                                                children: "\uD83D\uDCDC Scene Prompt:"
                                                                            }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "bg-black/30 rounded p-2 border border-purple-500/20",
                                                                                children: (0,
                                                                                a.jsx)("pre", {
                                                                                    className: "whitespace-pre-wrap font-mono text-[10px] leading-relaxed text-gray-200",
                                                                                    children: (null == (n = e.scene) ? void 0 : n.detailedVideoPrompt) || "Setting: ".concat((null == (d = e.scene) || null == (c = d.background_lock) ? void 0 : c.setting) || "Scene description...", "\n\nCharacters: ").concat((null == (m = e.scene) ? void 0 : m.character_lock) ? Object.values(e.scene.character_lock).map(e => e.name).join(", ") : "No characters", "\n\nDialogue: ").concat((null == (x = e.scene) || null == (h = x.dialogue) || null == (u = h[0]) || null == (p = u.line) ? void 0 : p.replace(/[\[\]]/g, "")) || "No dialogue")
                                                                                })
                                                                            })]
                                                                        }), (0,
                                                                        a.jsxs)("div", {
                                                                            className: "flex gap-1 mt-2",
                                                                            children: [(0,
                                                                            a.jsxs)(i.$, {
                                                                                size: "sm",
                                                                                variant: "outline",
                                                                                className: "text-xs h-6 px-2 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 flex-1",
                                                                                onClick: () => {
                                                                                    var t;
                                                                                    let r = e.scene
                                                                                      , a = (null == r ? void 0 : r.detailedVideoPrompt) || "".concat((null == r || null == (t = r.background_lock) ? void 0 : t.setting) || "", " ").concat((null == r ? void 0 : r.character_lock) ? Object.values(r.character_lock).map(e => {
                                                                                        var t;
                                                                                        return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                    }
                                                                                    ).filter(Boolean).join(", ") : "");
                                                                                    navigator.clipboard.writeText(a),
                                                                                    eU("success", "\uD83D\uDCCB Scene Copied!", "Scene ".concat((null == r ? void 0 : r.scene_id) || e.sceneIndex, " detailed prompt copied"))
                                                                                }
                                                                                ,
                                                                                children: [(0,
                                                                                a.jsx)(P.A, {
                                                                                    className: "h-3 w-3 mr-1"
                                                                                }), "Copy"]
                                                                            }), (0,
                                                                            a.jsxs)(i.$, {
                                                                                size: "sm",
                                                                                className: "text-xs h-6 px-2 bg-purple-600 hover:bg-purple-700 text-white flex-1",
                                                                                onClick: () => {
                                                                                    var t;
                                                                                    let a = e.scene;
                                                                                    eC((null == a ? void 0 : a.detailedVideoPrompt) || "".concat((null == a || null == (t = a.background_lock) ? void 0 : t.setting) || "", " ").concat((null == a ? void 0 : a.character_lock) ? Object.values(a.character_lock).map(e => {
                                                                                        var t;
                                                                                        return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                    }
                                                                                    ).filter(Boolean).join(", ") : "")),
                                                                                    r(F.find(e => "video" === e.id) || F[0]),
                                                                                    eU("info", "\uD83C\uDFAC Scene Ready!", "Detailed scene prompt loaded in video generator")
                                                                                }
                                                                                ,
                                                                                children: [(0,
                                                                                a.jsx)(v.A, {
                                                                                    className: "h-3 w-3 mr-1"
                                                                                }), "Video"]
                                                                            })]
                                                                        })]
                                                                    })]
                                                                }) : e.previewUrl ? (0,
                                                                a.jsxs)("video", {
                                                                    controls: !0,
                                                                    className: "w-full h-48 rounded-lg bg-black object-cover border border-white/10",
                                                                    poster: "/api/placeholder/400/225",
                                                                    children: [(0,
                                                                    a.jsx)("source", {
                                                                        src: e.previewUrl,
                                                                        type: e.mimeType || "video/mp4"
                                                                    }), "Your browser does not support the video tag."]
                                                                }) : (0,
                                                                a.jsx)("div", {
                                                                    className: "w-full h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-lg flex items-center justify-center border border-white/5",
                                                                    children: (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center text-gray-400",
                                                                        children: [(0,
                                                                        a.jsx)(v.A, {
                                                                            className: "h-6 w-6 mx-auto mb-2"
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-xs",
                                                                            children: "Loading..."
                                                                        })]
                                                                    })
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "flex-1 flex flex-col justify-between",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "text-xs text-gray-300",
                                                                    children: [(0,
                                                                    a.jsx)("div", {
                                                                        className: "font-medium text-white mb-1 truncate",
                                                                        title: e.prompt,
                                                                        children: e.prompt
                                                                    }), (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-gray-400 mb-2",
                                                                        children: ["completed" === e.status && e.mimeType ? "".concat(e.mimeType, " • ") : "", e.model]
                                                                    }), "completed" === e.status && e.size && (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-gray-400 mb-2",
                                                                        children: [(e.size / 1048576).toFixed(1), " MB"]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "bg-white/[0.04] rounded-md p-2 border border-white/[0.08]",
                                                                        children: (0,
                                                                        a.jsxs)("div", {
                                                                            className: "flex items-start justify-between gap-2",
                                                                            children: [(0,
                                                                            a.jsxs)("div", {
                                                                                className: "text-xs text-gray-300 flex-1",
                                                                                children: [(0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-gray-400 mb-1 text-[10px] uppercase tracking-wide",
                                                                                    children: "Prompt"
                                                                                }), (0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-white/90 line-clamp-2 leading-relaxed",
                                                                                    children: e.prompt.length > 80 ? "".concat(e.prompt.substring(0, 80), "...") : e.prompt
                                                                                })]
                                                                            }), (0,
                                                                            a.jsx)("button", {
                                                                                onClick: () => eF(e.prompt, e.id),
                                                                                className: "flex-shrink-0 p-1 hover:bg-white/[0.1] rounded transition-colors group",
                                                                                title: "Copy full prompt",
                                                                                children: X.has(e.id) ? (0,
                                                                                a.jsx)(R.A, {
                                                                                    className: "h-3 w-3 text-green-400"
                                                                                }) : (0,
                                                                                a.jsx)(P.A, {
                                                                                    className: "h-3 w-3 text-gray-400 group-hover:text-white"
                                                                                })
                                                                            })]
                                                                        })
                                                                    })]
                                                                }), (0,
                                                                a.jsx)("div", {
                                                                    className: "mt-auto",
                                                                    children: "completed" === e.status ? "scene" === e.type ? (0,
                                                                    a.jsxs)("div", {
                                                                        className: "space-y-2",
                                                                        children: [(0,
                                                                        a.jsxs)(i.$, {
                                                                            size: "sm",
                                                                            className: "w-full bg-purple-600 text-white hover:bg-purple-700 text-xs h-8 font-medium",
                                                                            onClick: () => {
                                                                                var t;
                                                                                let r = e.scene
                                                                                  , a = (null == r ? void 0 : r.detailedVideoPrompt) || "".concat((null == r || null == (t = r.background_lock) ? void 0 : t.setting) || "", " ").concat((null == r ? void 0 : r.character_lock) ? Object.values(r.character_lock).map(e => {
                                                                                    var t;
                                                                                    return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                }
                                                                                ).filter(Boolean).join(", ") : "");
                                                                                navigator.clipboard.writeText(a),
                                                                                eU("success", "\uD83D\uDCCB Scene Copied!", "Scene ".concat((null == r ? void 0 : r.scene_id) || e.sceneIndex, " detailed prompt copied"))
                                                                            }
                                                                            ,
                                                                            children: [(0,
                                                                            a.jsx)(P.A, {
                                                                                className: "h-3 w-3 mr-1"
                                                                            }), "Copy Scene Prompt"]
                                                                        }), (0,
                                                                        a.jsxs)(i.$, {
                                                                            size: "sm",
                                                                            variant: "outline",
                                                                            className: "w-full border-purple-500/30 text-purple-200 hover:bg-purple-500/20 text-xs h-7 font-medium",
                                                                            onClick: () => {
                                                                                var t;
                                                                                let a = e.scene;
                                                                                eC((null == a ? void 0 : a.detailedVideoPrompt) || "".concat((null == a || null == (t = a.background_lock) ? void 0 : t.setting) || "", " ").concat((null == a ? void 0 : a.character_lock) ? Object.values(a.character_lock).map(e => {
                                                                                    var t;
                                                                                    return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                }
                                                                                ).filter(Boolean).join(", ") : "")),
                                                                                r(F.find(e => "video" === e.id) || F[0]),
                                                                                eU("info", "\uD83C\uDFAC Scene Ready!", "Detailed scene prompt loaded in video generator")
                                                                            }
                                                                            ,
                                                                            children: [(0,
                                                                            a.jsx)(v.A, {
                                                                                className: "h-3 w-3 mr-1"
                                                                            }), "Generate Video"]
                                                                        })]
                                                                    }) : (0,
                                                                    a.jsxs)("div", {
                                                                        className: "space-y-1",
                                                                        children: [(0,
                                                                        a.jsxs)(i.$, {
                                                                            size: "sm",
                                                                            className: "w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 text-xs h-8 font-medium",
                                                                            onClick: () => eG(e, e.prompt || "", t),
                                                                            disabled: em,
                                                                            children: [em ? (0,
                                                                            a.jsx)(_.A, {
                                                                                className: "h-3 w-3 mr-1 animate-spin"
                                                                            }) : (0,
                                                                            a.jsx)(D.A, {
                                                                                className: "h-3 w-3 mr-1"
                                                                            }), "Extend +8s"]
                                                                        }), (0,
                                                                        a.jsxs)(i.$, {
                                                                            size: "sm",
                                                                            className: "w-full bg-primary text-black hover:bg-primary/90 text-xs h-8 font-medium",
                                                                            onClick: () => eI(e, t),
                                                                            children: [(0,
                                                                            a.jsx)(V.A, {
                                                                                className: "h-3 w-3 mr-1"
                                                                            }), "Download Video"]
                                                                        })]
                                                                    }) : (0,
                                                                    a.jsx)("div", {
                                                                        className: "h-8"
                                                                    })
                                                                })]
                                                            })]
                                                        }, e.id)
                                                    }
                                                    )
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "lg:hidden h-full overflow-y-auto dark-scrollbar",
                                                style: {
                                                    scrollbarWidth: "thin",
                                                    scrollbarColor: "rgba(255,255,255,0.2) rgba(0,0,0,0.1)",
                                                    msOverflowStyle: "auto"
                                                },
                                                children: (0,
                                                a.jsx)("div", {
                                                    className: "px-2 pt-2 pb-6 space-y-4",
                                                    children: [...[...Y].reverse().map(e => ({
                                                        ...e,
                                                        type: "processing"
                                                    })), ...[...W].reverse().map(e => ({
                                                        ...e,
                                                        status: "completed"
                                                    }))].map( (e, t) => {
                                                        var s, l, o, n, c, d, m, p, u, h, x, g, b, f;
                                                        return (0,
                                                        a.jsxs)("div", {
                                                            className: "w-full rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-sm p-5 shadow-lg",
                                                            children: [(0,
                                                            a.jsx)("div", {
                                                                className: "mb-4",
                                                                children: "processing" === e.type ? e.parameters && (e.parameters.scenes || e.parameters.genre) ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "h-56 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-xl border border-purple-500/30 overflow-hidden shadow-xl",
                                                                    children: [(0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center bg-gradient-to-r from-purple-500/20 to-blue-500/15 p-3 border-b border-purple-500/20",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "relative inline-block",
                                                                            children: [(0,
                                                                            a.jsx)(_.A, {
                                                                                className: "h-5 w-5 mx-auto mb-1 animate-spin text-purple-400 drop-shadow-sm"
                                                                            }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "absolute inset-0 h-5 w-5 mx-auto mb-1 rounded-full bg-purple-400/20 blur-md"
                                                                            })]
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-sm font-medium text-purple-200",
                                                                            children: "Generating Storyboard..."
                                                                        }), (0,
                                                                        a.jsx)("div", {
                                                                            className: "mt-1 bg-purple-500/20 rounded-lg px-2 py-1 inline-block border border-purple-500/30",
                                                                            children: (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-xs font-medium text-purple-100",
                                                                                children: [e.progress || 0, "%"]
                                                                            })
                                                                        })]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "h-40 overflow-y-auto dark-scrollbar p-3",
                                                                        style: {
                                                                            scrollbarWidth: "thin",
                                                                            scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                                        },
                                                                        children: (0,
                                                                        a.jsx)("div", {
                                                                            className: "bg-black/20 rounded-lg p-3 border border-white/10",
                                                                            children: (0,
                                                                            a.jsx)("pre", {
                                                                                className: "whitespace-pre-wrap font-mono text-xs leading-relaxed text-gray-200",
                                                                                children: e.streamingContent || "Starting storyboard generation..."
                                                                            })
                                                                        })
                                                                    })]
                                                                }) : (0,
                                                                a.jsx)("div", {
                                                                    className: "h-56 bg-gradient-to-br from-white/[0.15] to-white/[0.05] rounded-xl flex items-center justify-center border border-white/[0.08] shadow-inner",
                                                                    children: (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center text-gray-300",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "relative",
                                                                            children: [(0,
                                                                            a.jsx)(_.A, {
                                                                                className: "h-8 w-8 mx-auto mb-3 animate-spin text-primary drop-shadow-sm"
                                                                            }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "absolute inset-0 h-8 w-8 mx-auto mb-3 rounded-full bg-primary/20 blur-md"
                                                                            })]
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-sm font-medium text-white",
                                                                            children: "Generating..."
                                                                        }), (0,
                                                                        a.jsx)("div", {
                                                                            className: "mt-2 bg-white/[0.08] rounded-full px-3 py-1 inline-block",
                                                                            children: (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-sm font-bold text-primary",
                                                                                children: [e.progress, "%"]
                                                                            })
                                                                        })]
                                                                    })
                                                                }) : "scene" === e.type ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "h-56 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-xl border border-purple-500/30 overflow-hidden shadow-xl",
                                                                    children: [(console.log("\uD83D\uDD0D Mobile Scene Card Debug:", {
                                                                        videoType: e.type,
                                                                        sceneIndex: e.sceneIndex,
                                                                        totalScenes: e.totalScenes,
                                                                        hasScene: !!e.scene,
                                                                        sceneId: null == (g = e.scene) ? void 0 : g.scene_id,
                                                                        setting: null == (f = e.scene) || null == (b = f.background_lock) ? void 0 : b.setting
                                                                    }),
                                                                    null), (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center bg-gradient-to-r from-purple-500/20 to-blue-500/15 p-3 border-b border-purple-500/20",
                                                                        children: [(0,
                                                                        a.jsxs)("div", {
                                                                            className: "relative inline-block",
                                                                            children: [(0,
                                                                            a.jsx)(O.A, {
                                                                                className: "h-5 w-5 mx-auto mb-1 text-purple-400 drop-shadow-sm"
                                                                            }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "absolute inset-0 h-5 w-5 mx-auto mb-1 rounded-full bg-purple-400/20 blur-md"
                                                                            })]
                                                                        }), (0,
                                                                        a.jsxs)("p", {
                                                                            className: "text-sm font-medium text-purple-200",
                                                                            children: ["Scene ", (null == (s = e.scene) ? void 0 : s.scene_id) || e.sceneIndex, " of ", e.totalScenes]
                                                                        }), (0,
                                                                        a.jsx)("div", {
                                                                            className: "mt-1 bg-purple-500/20 rounded-lg px-2 py-1 inline-block border border-purple-500/30",
                                                                            children: (0,
                                                                            a.jsxs)("p", {
                                                                                className: "text-xs font-medium text-purple-100",
                                                                                children: [(null == (l = e.scene) ? void 0 : l.duration_sec) || 8, "s • ", (null == (o = e.parameters) ? void 0 : o.genre) || "Story"]
                                                                            })
                                                                        })]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "p-3 h-40 overflow-y-auto dark-scrollbar",
                                                                        style: {
                                                                            scrollbarWidth: "thin",
                                                                            scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                                        },
                                                                        children: (0,
                                                                        a.jsxs)("div", {
                                                                            className: "space-y-3",
                                                                            children: [(0,
                                                                            a.jsxs)("div", {
                                                                                className: "bg-black/30 rounded-lg p-3 border border-purple-500/20",
                                                                                children: [(0,
                                                                                a.jsx)("div", {
                                                                                    className: "mb-2 text-purple-300 font-medium text-sm",
                                                                                    children: "\uD83D\uDCDC Complete Scene Prompt:"
                                                                                }), (0,
                                                                                a.jsx)("div", {
                                                                                    className: "bg-black/40 rounded p-2 border border-purple-500/10",
                                                                                    children: (0,
                                                                                    a.jsx)("pre", {
                                                                                        className: "whitespace-pre-wrap font-mono text-[10px] leading-relaxed text-gray-200 max-h-24 overflow-y-auto",
                                                                                        children: (null == (n = e.scene) ? void 0 : n.detailedVideoPrompt) || "Setting: ".concat((null == (d = e.scene) || null == (c = d.background_lock) ? void 0 : c.setting) || "Scene description...", "\n\nCharacters: ").concat((null == (m = e.scene) ? void 0 : m.character_lock) ? Object.values(e.scene.character_lock).map(e => e.name).join(", ") : "No characters", "\n\nDialogue: ").concat((null == (x = e.scene) || null == (h = x.dialogue) || null == (u = h[0]) || null == (p = u.line) ? void 0 : p.replace(/[\[\]]/g, "")) || "No dialogue")
                                                                                    })
                                                                                })]
                                                                            }), (0,
                                                                            a.jsxs)("div", {
                                                                                className: "flex gap-2",
                                                                                children: [(0,
                                                                                a.jsxs)(i.$, {
                                                                                    size: "sm",
                                                                                    variant: "outline",
                                                                                    className: "text-xs h-8 px-3 border-purple-500/40 text-purple-200 hover:bg-purple-500/20 flex-1",
                                                                                    onClick: () => {
                                                                                        var t;
                                                                                        let r = e.scene
                                                                                          , a = (null == r ? void 0 : r.detailedVideoPrompt) || "".concat((null == r || null == (t = r.background_lock) ? void 0 : t.setting) || "", " ").concat((null == r ? void 0 : r.character_lock) ? Object.values(r.character_lock).map(e => {
                                                                                            var t;
                                                                                            return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                        }
                                                                                        ).filter(Boolean).join(", ") : "");
                                                                                        navigator.clipboard.writeText(a),
                                                                                        eU("success", "\uD83D\uDCCB Scene Copied!", "Scene ".concat((null == r ? void 0 : r.scene_id) || e.sceneIndex, " detailed prompt copied"))
                                                                                    }
                                                                                    ,
                                                                                    children: [(0,
                                                                                    a.jsx)(P.A, {
                                                                                        className: "h-3 w-3 mr-1"
                                                                                    }), "Copy Full"]
                                                                                }), (0,
                                                                                a.jsxs)(i.$, {
                                                                                    size: "sm",
                                                                                    className: "text-xs h-8 px-3 bg-purple-600 hover:bg-purple-700 text-white flex-1",
                                                                                    onClick: () => {
                                                                                        var t;
                                                                                        let a = e.scene;
                                                                                        eC((null == a ? void 0 : a.detailedVideoPrompt) || "".concat((null == a || null == (t = a.background_lock) ? void 0 : t.setting) || "", " ").concat((null == a ? void 0 : a.character_lock) ? Object.values(a.character_lock).map(e => {
                                                                                            var t;
                                                                                            return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                                        }
                                                                                        ).filter(Boolean).join(", ") : "")),
                                                                                        r(F.find(e => "video" === e.id) || F[0]),
                                                                                        eU("info", "\uD83C\uDFAC Scene Ready!", "Detailed scene prompt loaded in video generator")
                                                                                    }
                                                                                    ,
                                                                                    children: [(0,
                                                                                    a.jsx)(v.A, {
                                                                                        className: "h-3 w-3 mr-1"
                                                                                    }), "Generate"]
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })]
                                                                }) : e.previewUrl ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "relative group",
                                                                    children: [(0,
                                                                    a.jsxs)("video", {
                                                                        controls: !0,
                                                                        className: "w-full h-56 rounded-xl bg-black object-cover border border-white/[0.15] shadow-xl",
                                                                        poster: "/api/placeholder/400/225",
                                                                        children: [(0,
                                                                        a.jsx)("source", {
                                                                            src: e.previewUrl,
                                                                            type: e.mimeType || "video/mp4"
                                                                        }), "Your browser does not support the video tag."]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                                                                    })]
                                                                }) : (0,
                                                                a.jsx)("div", {
                                                                    className: "w-full h-56 bg-gradient-to-br from-white/[0.15] to-white/[0.05] rounded-xl flex items-center justify-center border border-white/[0.08] shadow-inner",
                                                                    children: (0,
                                                                    a.jsxs)("div", {
                                                                        className: "text-center text-gray-300",
                                                                        children: [(0,
                                                                        a.jsx)(v.A, {
                                                                            className: "h-8 w-8 mx-auto mb-3 text-gray-400"
                                                                        }), (0,
                                                                        a.jsx)("p", {
                                                                            className: "text-sm font-medium",
                                                                            children: "Loading preview..."
                                                                        })]
                                                                    })
                                                                })
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                className: "space-y-4",
                                                                children: [(0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-3",
                                                                    children: [(0,
                                                                    a.jsxs)("div", {
                                                                        className: "flex items-center gap-2 text-xs text-gray-400",
                                                                        children: [(0,
                                                                        a.jsx)("div", {
                                                                            className: "bg-white/[0.06] rounded-md px-2 py-1",
                                                                            children: e.model
                                                                        }), "completed" === e.status && e.mimeType && (0,
                                                                        a.jsx)("div", {
                                                                            className: "bg-white/[0.06] rounded-md px-2 py-1",
                                                                            children: e.mimeType
                                                                        }), "completed" === e.status && e.size && (0,
                                                                        a.jsxs)("div", {
                                                                            className: "bg-white/[0.06] rounded-md px-2 py-1",
                                                                            children: [(e.size / 1048576).toFixed(1), " MB"]
                                                                        })]
                                                                    }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "bg-white/[0.06] rounded-lg p-3 border border-white/[0.08]",
                                                                        children: (0,
                                                                        a.jsxs)("div", {
                                                                            className: "flex items-start justify-between gap-3",
                                                                            children: [(0,
                                                                            a.jsxs)("div", {
                                                                                className: "flex-1",
                                                                                children: [(0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-gray-400 mb-2 text-xs uppercase tracking-wide",
                                                                                    children: "Generated from prompt"
                                                                                }), (0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-white text-sm leading-relaxed",
                                                                                    children: e.prompt.length > 120 ? "".concat(e.prompt.substring(0, 120), "...") : e.prompt
                                                                                })]
                                                                            }), (0,
                                                                            a.jsx)("button", {
                                                                                onClick: () => eF(e.prompt, e.id),
                                                                                className: "flex-shrink-0 p-2 hover:bg-white/[0.1] rounded-lg transition-colors group",
                                                                                title: "Copy full prompt",
                                                                                children: X.has(e.id) ? (0,
                                                                                a.jsx)(R.A, {
                                                                                    className: "h-4 w-4 text-green-400"
                                                                                }) : (0,
                                                                                a.jsx)(P.A, {
                                                                                    className: "h-4 w-4 text-gray-400 group-hover:text-white"
                                                                                })
                                                                            })]
                                                                        })
                                                                    })]
                                                                }), "completed" === e.status && ("scene" === e.type ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsxs)(i.$, {
                                                                        size: "sm",
                                                                        className: "w-full bg-purple-600 text-white hover:bg-purple-700 text-sm h-10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200",
                                                                        onClick: () => {
                                                                            var t;
                                                                            let r = e.scene
                                                                              , a = (null == r ? void 0 : r.detailedVideoPrompt) || "".concat((null == r || null == (t = r.background_lock) ? void 0 : t.setting) || "", " ").concat((null == r ? void 0 : r.character_lock) ? Object.values(r.character_lock).map(e => {
                                                                                var t;
                                                                                return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                            }
                                                                            ).filter(Boolean).join(", ") : "");
                                                                            navigator.clipboard.writeText(a),
                                                                            eU("success", "\uD83D\uDCCB Scene Copied!", "Scene ".concat((null == r ? void 0 : r.scene_id) || e.sceneIndex, " detailed prompt copied"))
                                                                        }
                                                                        ,
                                                                        children: [(0,
                                                                        a.jsx)(P.A, {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }), "Copy Scene Prompt"]
                                                                    }), (0,
                                                                    a.jsxs)(i.$, {
                                                                        size: "sm",
                                                                        variant: "outline",
                                                                        className: "w-full border-purple-500/40 text-purple-200 hover:bg-purple-500/20 text-sm h-9 font-medium rounded-lg transition-all duration-200",
                                                                        onClick: () => {
                                                                            var t;
                                                                            let a = e.scene;
                                                                            eC((null == a ? void 0 : a.detailedVideoPrompt) || "".concat((null == a || null == (t = a.background_lock) ? void 0 : t.setting) || "", " ").concat((null == a ? void 0 : a.character_lock) ? Object.values(a.character_lock).map(e => {
                                                                                var t;
                                                                                return null == (t = e.action_flow) ? void 0 : t.main_action
                                                                            }
                                                                            ).filter(Boolean).join(", ") : "")),
                                                                            r(F.find(e => "video" === e.id) || F[0]),
                                                                            eU("info", "\uD83C\uDFAC Scene Ready!", "Detailed scene prompt loaded in video generator")
                                                                        }
                                                                        ,
                                                                        children: [(0,
                                                                        a.jsx)(v.A, {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }), "Generate Video"]
                                                                    })]
                                                                }) : (0,
                                                                a.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                    a.jsxs)(i.$, {
                                                                        size: "sm",
                                                                        className: "w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 text-sm h-10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200",
                                                                        onClick: () => eG(e, e.prompt || "", t),
                                                                        disabled: em,
                                                                        children: [em ? (0,
                                                                        a.jsx)(_.A, {
                                                                            className: "h-4 w-4 mr-2 animate-spin"
                                                                        }) : (0,
                                                                        a.jsx)(D.A, {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }), "Extend +8 Second Video"]
                                                                    }), (0,
                                                                    a.jsxs)(i.$, {
                                                                        size: "sm",
                                                                        className: "w-full bg-primary text-black hover:bg-primary/90 text-sm h-10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200",
                                                                        onClick: () => eI(e, t),
                                                                        children: [(0,
                                                                        a.jsx)(V.A, {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }), "Download Video"]
                                                                    })]
                                                                }))]
                                                            })]
                                                        }, e.id)
                                                    }
                                                    )
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed bottom-0 left-0 right-0 lg:left-[22rem] z-40",
                        children: (0,
                        a.jsx)("div", {
                            className: "p-4 lg:p-8",
                            children: (0,
                            a.jsx)(o.Zp, {
                                className: "backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/10 shadow-2xl",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "p-4 lg:p-6 relative",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-lg pointer-events-none"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "relative z-10",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "mb-4 hidden lg:block",
                                            children: [(0,
                                            a.jsxs)("button", {
                                                onClick: () => h(!p),
                                                className: "flex items-center justify-between w-full mb-3 group",
                                                children: [(0,
                                                a.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0,
                                                    a.jsx)(A.A, {
                                                        className: "h-4 w-4 text-primary"
                                                    }), (0,
                                                    a.jsx)(u, {
                                                        className: "text-sm font-medium text-white",
                                                        children: "Advanced Settings"
                                                    }), (0,
                                                    a.jsxs)("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: ["(", t.name, ")"]
                                                    })]
                                                }), p ? (0,
                                                a.jsx)(T.A, {
                                                    className: "h-4 w-4 text-gray-400 transition-all"
                                                }) : (0,
                                                a.jsx)(E.A, {
                                                    className: "h-4 w-4 text-gray-400 transition-all"
                                                })]
                                            }), p && (0,
                                            a.jsx)("div", {
                                                className: "space-y-4 p-4 rounded-lg bg-white/5 border border-white/10 mb-4 max-h-80 overflow-y-auto dark-scrollbar",
                                                style: {
                                                    scrollbarWidth: "thin",
                                                    scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.1)"
                                                },
                                                children: (0,
                                                a.jsx)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: Object.entries(t.parameters).map(e => {
                                                        let[t,r] = e;
                                                        return eM(t, r)
                                                    }
                                                    )
                                                })
                                            })]
                                        }), "video" === t.id && el && (0,
                                        a.jsx)("div", {
                                            className: "mb-4",
                                            children: (0,
                                            a.jsx)("div", {
                                                className: "relative",
                                                children: (0,
                                                a.jsxs)("div", {
                                                    className: "flex items-center gap-3 p-3 bg-white/[0.04] rounded-lg border border-white/10",
                                                    children: [(0,
                                                    a.jsx)("img", {
                                                        src: el,
                                                        alt: "Input preview",
                                                        className: "w-16 h-16 object-cover rounded-md border border-white/20"
                                                    }), (0,
                                                    a.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [(0,
                                                        a.jsx)("p", {
                                                            className: "text-sm text-white font-medium",
                                                            children: "\uD83C\uDFAC Image-to-Video Mode"
                                                        }), (0,
                                                        a.jsx)("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Your video will be generated from this image"
                                                        })]
                                                    }), (0,
                                                    a.jsx)(i.$, {
                                                        onClick: () => {
                                                            ei(null),
                                                            eU("info", "\uD83D\uDDD1️ Image Removed", "Switched back to text-to-video mode.");
                                                            let e = document.getElementById("image-upload-inline");
                                                            e && (e.value = ""),
                                                            ("veo-3.0-generate-preview" === Z.model || "veo-3.0-fast-generate-preview" === Z.model) && "allow_adult" === Z.personGeneration && Q(e => ({
                                                                ...e,
                                                                personGeneration: "allow_all"
                                                            }))
                                                        }
                                                        ,
                                                        size: "sm",
                                                        variant: "ghost",
                                                        className: "h-8 w-8 p-0 text-gray-400 hover:text-white",
                                                        children: (0,
                                                        a.jsx)(j.A, {
                                                            className: "h-4 w-4"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex gap-3",
                                            children: ["video" === t.id && !el && (0,
                                            a.jsxs)("div", {
                                                className: "hidden md:flex",
                                                children: [(0,
                                                a.jsx)("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: eB,
                                                    className: "hidden",
                                                    id: "image-upload-desktop"
                                                }), (0,
                                                a.jsx)("label", {
                                                    htmlFor: "image-upload-desktop",
                                                    className: "h-[60px] w-12 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center group",
                                                    title: "Add image for image-to-video generation",
                                                    children: (0,
                                                    a.jsx)(y.A, {
                                                        className: "h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
                                                    })
                                                })]
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "flex-1 relative",
                                                children: [(0,
                                                a.jsx)(d, {
                                                    ref: eN,
                                                    value: H,
                                                    onChange: e => K(e.target.value),
                                                    onKeyPress: e => {
                                                        "Enter" !== e.key || e.shiftKey || (e.preventDefault(),
                                                        eT())
                                                    }
                                                    ,
                                                    placeholder: "filmmaker" === t.id ? "Describe your story idea (e.g., 'A young girl discovers a magical portal in her backyard that leads to an enchanted forest where she meets talking animals')..." : "Tell me what you want to create with ".concat(t.name, "..."),
                                                    className: "min-h-[60px] max-h-32 resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-500 pr-20 ".concat("video" !== t.id || el ? "pl-4" : "md:pl-4 pl-12")
                                                }), "video" === t.id && !el && (0,
                                                a.jsxs)("div", {
                                                    className: "md:hidden",
                                                    children: [(0,
                                                    a.jsx)("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: eB,
                                                        className: "hidden",
                                                        id: "image-upload-mobile"
                                                    }), (0,
                                                    a.jsx)("label", {
                                                        htmlFor: "image-upload-mobile",
                                                        className: "absolute bottom-2 left-2 h-8 w-8 p-0 rounded-md hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center group z-10",
                                                        title: "Add image for image-to-video generation",
                                                        children: (0,
                                                        a.jsx)(y.A, {
                                                            className: "h-4 w-4 text-gray-400 group-hover:text-white transition-colors"
                                                        })
                                                    })]
                                                }), (0,
                                                a.jsx)(i.$, {
                                                    onClick: eT,
                                                    disabled: !H.trim() || !n || null !== ea || "filmmaker" === t.id && (eu || ef),
                                                    size: "sm",
                                                    className: "absolute bottom-2 right-2 h-8 w-8 p-0 bg-primary hover:bg-primary/90 disabled:opacity-50",
                                                    children: ea || "filmmaker" === t.id && (eu || ef) ? (0,
                                                    a.jsx)(_.A, {
                                                        className: "h-4 w-4 animate-spin"
                                                    }) : (0,
                                                    a.jsx)(I.A, {
                                                        className: "h-4 w-4"
                                                    })
                                                })]
                                            })]
                                        }), "video" === t.id && (0,
                                        a.jsxs)("div", {
                                            className: "flex items-center justify-between mt-3 pt-3 border-t border-white/10",
                                            children: [(0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0,
                                                a.jsx)(i.$, {
                                                    onClick: eW,
                                                    disabled: !H.trim() || !n || eo,
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "h-8 px-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 text-purple-200 hover:text-purple-100 transition-all duration-200",
                                                    title: "Transform your prompt into a detailed cinematic description with professional camera work, lighting, character details, and atmosphere",
                                                    children: eo ? (0,
                                                    a.jsxs)(a.Fragment, {
                                                        children: [(0,
                                                        a.jsx)(_.A, {
                                                            className: "h-3 w-3 mr-1.5 animate-spin"
                                                        }), "Enhancing..."]
                                                    }) : (0,
                                                    a.jsxs)(a.Fragment, {
                                                        children: [(0,
                                                        a.jsx)(k.A, {
                                                            className: "h-3 w-3 mr-1.5"
                                                        }), "Cinematic Enhancement"]
                                                    })
                                                }), ec && (0,
                                                a.jsxs)("span", {
                                                    className: "text-xs text-green-400 flex items-center gap-1",
                                                    children: [(0,
                                                    a.jsx)(R.A, {
                                                        className: "h-3 w-3"
                                                    }), "Enhanced"]
                                                })]
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-gray-400",
                                                children: [(0,
                                                a.jsxs)("span", {
                                                    children: [H.length, "/1000"]
                                                }), H.length > 600 && (0,
                                                a.jsx)("span", {
                                                    className: "text-amber-400",
                                                    children: "• Very detailed prompt - consider testing shorter versions"
                                                })]
                                            })]
                                        }), "filmmaker" === t.id && (0,
                                        a.jsxs)("div", {
                                            className: "flex items-center justify-between mt-3 pt-3 border-t border-white/10",
                                            children: [(0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0,
                                                a.jsx)(i.$, {
                                                    onClick: eY,
                                                    disabled: !H.trim() || !n || ef,
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "h-8 px-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-200 hover:text-blue-100 transition-all duration-200",
                                                    title: "Enhance your story topic with more creative details, deeper characters, and engaging plot elements",
                                                    children: ef ? (0,
                                                    a.jsxs)(a.Fragment, {
                                                        children: [(0,
                                                        a.jsx)(_.A, {
                                                            className: "h-3 w-3 mr-1.5 animate-spin"
                                                        }), "Enhancing..."]
                                                    }) : (0,
                                                    a.jsxs)(a.Fragment, {
                                                        children: [(0,
                                                        a.jsx)(k.A, {
                                                            className: "h-3 w-3 mr-1.5"
                                                        }), "Enhance Topic"]
                                                    })
                                                }), ey && (0,
                                                a.jsxs)("span", {
                                                    className: "text-xs text-green-400 flex items-center gap-1",
                                                    children: [(0,
                                                    a.jsx)(R.A, {
                                                        className: "h-3 w-3"
                                                    }), "Enhanced"]
                                                })]
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-gray-400",
                                                children: [(0,
                                                a.jsxs)("span", {
                                                    children: [H.length, "/1000"]
                                                }), H.length > 600 && (0,
                                                a.jsx)("span", {
                                                    className: "text-amber-400",
                                                    children: "• Very detailed topic - consider testing shorter versions"
                                                })]
                                            })]
                                        }), !n && (0,
                                        a.jsxs)("p", {
                                            className: "text-xs text-amber-400 mt-2 flex items-center gap-1",
                                            children: [(0,
                                            a.jsx)(N.A, {
                                                className: "h-3 w-3"
                                            }), "Please enter your API key to start generating content"]
                                        }), ea ? (0,
                                        a.jsxs)("p", {
                                            className: "text-xs text-amber-400 mt-2 flex items-center gap-1",
                                            children: [(0,
                                            a.jsx)(_.A, {
                                                className: "h-3 w-3 animate-spin"
                                            }), "Retrying video generation... This may take up to 1 minute."]
                                        }) : (0,
                                        a.jsx)("p", {
                                            className: "text-xs text-gray-500 mt-2",
                                            children: "Press Enter to send, Shift+Enter for new line"
                                        })]
                                    }), " "]
                                })
                            })
                        })
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "fixed bottom-6 right-6 z-50 space-y-3 max-w-md",
                    children: et.map(e => (0,
                    a.jsxs)("div", {
                        className: "\n              relative rounded-xl border backdrop-blur-xl p-4 shadow-2xl transition-all duration-300 ease-out transform\n              ".concat("error" === e.type ? "bg-red-950/80 border-red-500/50 text-red-100" : "success" === e.type ? "bg-green-950/80 border-green-500/50 text-green-100" : "warning" === e.type ? "bg-yellow-950/80 border-yellow-500/50 text-yellow-100" : "bg-blue-950/80 border-blue-500/50 text-blue-100", "\n              animate-in slide-in-from-right-full\n            "),
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => eL(e.id),
                            className: "absolute top-2 right-2 p-1 rounded-lg hover:bg-white/10 transition-colors",
                            children: (0,
                            a.jsx)(j.A, {
                                className: "h-4 w-4"
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "pr-8",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-start gap-3",
                                children: [(0,
                                a.jsx)(G.A, {
                                    className: "\n                  h-5 w-5 mt-0.5 flex-shrink-0\n                  ".concat("error" === e.type ? "text-red-400" : "success" === e.type ? "text-green-400" : "warning" === e.type ? "text-yellow-400" : "text-blue-400", "\n                ")
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0,
                                    a.jsx)("h4", {
                                        className: "font-semibold text-sm mb-1",
                                        children: e.title
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-sm opacity-90 leading-relaxed",
                                        children: e.message
                                    })]
                                })]
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-xl overflow-hidden",
                            children: (0,
                            a.jsx)("div", {
                                className: "h-full transition-all ease-linear ".concat("error" === e.type ? "bg-red-400" : "success" === e.type ? "bg-green-400" : "warning" === e.type ? "bg-yellow-400" : "bg-blue-400"),
                                style: {
                                    animation: "shrink ".concat("error" === e.type ? "7000ms" : "5000ms", " linear forwards")
                                }
                            })
                        })]
                    }, e.id))
                })]
            })
        }
    }
    ,
    9434: (e, t, r) => {
        "use strict";
        r.d(t, {
            cn: () => l
        });
        var a = r(2596)
          , s = r(9688);
        function l() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.QP)((0,
            a.$)(t))
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [544, 882, 441, 684, 358], () => t(3325)),
    _N_E = e.O()
}
]);
