import { Router } from "itty-router";

import Absences from "./handlers/absences";
import Conflict from "./handlers/conflicts";
import Directories from "./handlers/directories";

const router = Router();

router
  .get("/api/absences", Absences)
  .get("/api/conflict/:id", Conflict)
  .get("/api/directories", Directories)
  .get("*", () => new Response("Not found", { status: 404 }));

export default {
  async fetch(request, env, ctx) {
    return router.handle(request);
  },
};
