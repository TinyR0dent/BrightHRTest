// .wrangler/tmp/bundle-qwVodE/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// node_modules/itty-router/index.mjs
var e = ({ base: e2 = "", routes: t = [], ...o2 } = {}) => ({ __proto__: new Proxy({}, { get: (o3, s2, r, n) => "handle" == s2 ? r.fetch : (o4, ...a) => t.push([s2.toUpperCase?.(), RegExp(`^${(n = (e2 + o4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), a, n]) && r }), routes: t, ...o2, async fetch(e3, ...o3) {
  let s2, r, n = new URL(e3.url), a = e3.query = { __proto__: null };
  for (let [e4, t2] of n.searchParams)
    a[e4] = a[e4] ? [].concat(a[e4], t2) : t2;
  for (let [a2, c2, l2, i2] of t)
    if ((a2 == e3.method || "ALL" == a2) && (r = n.pathname.match(c2))) {
      e3.params = r.groups || {}, e3.route = i2;
      for (let t2 of l2)
        if (null != (s2 = await t2(e3.proxy ?? e3, ...o3)))
          return s2;
    }
} });
var o = (e2 = "text/plain; charset=utf-8", t) => (o2, { headers: s2 = {}, ...r } = {}) => void 0 === o2 || "Response" === o2?.constructor.name ? o2 : new Response(t ? t(o2) : o2, { headers: { "content-type": e2, ...s2 }, ...r });
var s = o("application/json; charset=utf-8", JSON.stringify);
var c = o("text/plain; charset=utf-8", String);
var l = o("text/html");
var i = o("image/jpeg");
var p = o("image/png");
var d = o("image/webp");

// src/utils/randomInteger/index.js
function mulberry32(a) {
  return function() {
    var t = a += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var random = mulberry32(42);
function getRandomInteger(max) {
  return Math.floor(random() * max);
}
var randomInteger_default = getRandomInteger;

// src/handlers/absences/index.js
var names = [
  {
    firstName: "Jabez",
    lastName: "Nasser",
    id: "24a9352b-cf35-4e00-b4c9-403546d7bea8"
  },
  {
    firstName: "Isla",
    lastName: "Watts",
    id: "08335a8f-1b4f-4d9b-82a8-46fa20d48f2d"
  },
  {
    firstName: "Malaysia",
    lastName: "Krueger",
    id: "f1128070-8fc9-4ccb-8657-f5e1c7cacad9"
  },
  {
    firstName: "Kylei",
    lastName: "Castanon",
    id: "8d0593d5-de4a-48c9-afa5-55127c0d349d"
  },
  {
    firstName: "Rheagan",
    lastName: "Hartfield",
    id: "59f7f608-05ad-4160-84b4-56800acfec3f"
  },
  {
    firstName: "Amiah",
    lastName: "Fenton",
    id: "6ebff517-f398-4d23-9ed3-a0f14bfa3858"
  },
  {
    firstName: "Kavion",
    lastName: "Melchor",
    id: "c7211b4f-7761-4012-a8a7-24e870227428"
  },
  {
    firstName: "Regan",
    lastName: "Quan",
    id: "c8010a64-4fc3-4da4-9181-48a17e9b3329"
  },
  {
    firstName: "Reuben",
    lastName: "Keene",
    id: "8c6d90a5-6636-46f9-93de-daa172b7496f"
  },
  {
    firstName: "Wesley",
    lastName: "Alvey",
    id: "3c2d82f1-660e-44ec-b25a-756baa6d0155"
  },
  {
    firstName: "Alexi",
    lastName: "Schramm",
    id: "8be1c549-fb91-4c8f-9cfe-5b5c017f26bf"
  },
  {
    firstName: "Zemirah",
    lastName: "Suber",
    id: "8ebe3d34-a20b-45eb-ae48-a2d40bdc63bc"
  },
  {
    firstName: "Rahaf",
    lastName: "Deckard",
    id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17"
  },
  {
    firstName: "Raniya",
    lastName: "Otte",
    id: "e10058e4-3383-466b-91d8-1ea5bf1acf0f"
  },
  {
    firstName: "Stacie",
    lastName: "Chancey",
    id: "23d9845c-8b03-4987-ac9e-98778100d4b8"
  },
  {
    firstName: "Josemaria",
    lastName: "Embrey",
    id: "6dc958b7-0aea-45d6-b4cc-ce384815dc17"
  },
  {
    firstName: "Enya",
    lastName: "Behm",
    id: "84502153-69e6-4561-b2de-8f21f97530d3"
  },
  {
    firstName: "Shrey",
    lastName: "Frederickson",
    id: "303aacc8-e587-4801-929a-ad7ce933ee03"
  },
  {
    firstName: "Ryland",
    lastName: "Sears",
    id: "6ed7cc5b-4a79-4802-a002-7918efc2d416"
  },
  {
    firstName: "Meryl",
    lastName: "Dreher",
    id: "8a396169-fb8c-4478-b5e9-4f1b14a01cf8"
  }
];
function getDate() {
  const newDate = /* @__PURE__ */ new Date();
  newDate.setTime(15778368e5 + randomInteger_default(31556926e3 * 4));
  return newDate.toISOString();
}
function absenceType() {
  const rnd = randomInteger_default(200);
  if (rnd > 199) {
    return "FAMILY";
  }
  if (rnd > 190) {
    return "COMPASSIONATE_LEAVE";
  }
  if (rnd > 180) {
    return "MEDICAL";
  }
  if (rnd > 160) {
    return "SICKNESS";
  }
  return "ANNUAL_LEAVE";
}
function getName() {
  return names[randomInteger_default(19)];
}
var absences = Array(5e3).fill({}).map((_, i2) => ({
  id: i2,
  startDate: getDate(),
  days: randomInteger_default(21),
  absenceType: absenceType(),
  employee: getName(),
  approved: randomInteger_default(10) >= 9 ? false : true
}));
var Absences = ({ query: { amount = 20 } }) => {
  const body = JSON.stringify(absences.slice(0, amount));
  return new Response(body, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400"
    }
  });
};
var absences_default = Absences;

// src/handlers/conflicts/index.js
var Conflicts = ({ params }) => {
  const random2 = mulberry32(parseInt(params?.id, 10));
  const body = JSON.stringify({
    conflicts: random2() * 20 > 18
  });
  return new Response(body, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400"
    }
  });
};
var conflicts_default = Conflicts;

// src/handlers/directories/index.js
var data = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
    size: Math.floor(Math.random() * (900 - 300) + 300)
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
    size: Math.floor(Math.random() * (900 - 300) + 300)
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
        size: Math.floor(Math.random() * (900 - 300) + 300)
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
        size: Math.floor(Math.random() * (900 - 300) + 300)
      }
    ]
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
    size: Math.floor(Math.random() * (900 - 300) + 300)
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
        size: Math.floor(Math.random() * (900 - 300) + 300)
      },
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
        size: Math.floor(Math.random() * (900 - 300) + 300)
      }
    ]
  }
];
var Directories = () => {
  const body = JSON.stringify(data);
  console.log("get Directories data");
  return new Response(body, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Max-Age": "86400"
    }
  });
};
var directories_default = Directories;

// src/index.js
var router = e();
router.get("/api/absences", absences_default).get("/api/conflict/:id", conflicts_default).get("/api/directories", directories_default).get("*", () => new Response("Not found", { status: 404 }));
var src_default = {
  async fetch(request, env, ctx) {
    return router.handle(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error = reduceError(e2);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-qwVodE/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...src_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...src_default.middleware ? src_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-qwVodE/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data2, env, ctx) => handler(data2, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
