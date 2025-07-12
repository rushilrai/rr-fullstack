import { defineSchema } from "convex/server";

import { samplesTable } from "./modules/sample/schema";

export default defineSchema({
    sample: samplesTable
});