import { defineTable } from "convex/server";
import { v } from "convex/values";

export const sampleFields = {
    name: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
};

export const samplesTable = defineTable(sampleFields)
    .index("by_created", ["createdAt"]);