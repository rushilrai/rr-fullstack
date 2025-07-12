import { v } from "convex/values";

import { mutation } from "../../_generated/server";
import { sampleFields } from "./schema";

export const addSample = mutation({
    args: {
        name: v.object(sampleFields).fields.name
    },
    handler: async (ctx, { name }) => {
        const createdAt = new Date().getTime();
        const updatedAt = createdAt;

        const newSample = {
            name,
            createdAt,
            updatedAt
        }

        const sampleId = await ctx.db.insert("sample", newSample);

        console.log("New sample: ", sampleId);

        return { sampleId };
    },
});