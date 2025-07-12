import { query } from "../../_generated/server"

export const getAllSamples = query({
    handler: async (ctx) => {
        const samples = await ctx.db.query("sample")
            .withIndex("by_created")
            .order("desc")
            .collect();

        console.log("Samples: ", samples);

        return samples;
    },
});