import { v } from "convex/values";
import { Resend } from "resend";

import { action } from "../../../_generated/server";

export const sendEmail = action({
    args: {
        to: v.string(),
        subject: v.string(),
        text: v.string(),
    },
    handler: async (_, args) => {
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

        if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");
        if (!RESEND_FROM_EMAIL) throw new Error("RESEND_FROM_EMAIL not set");

        const resend = new Resend(RESEND_API_KEY);

        const result = await resend.emails.send({
            from: RESEND_FROM_EMAIL,
            to: args.to,
            subject: args.subject,
            text: args.text,
        });

        if (result.error) {
            throw new Error(`Failed to send email: ${result.error.message}`);
        }

        console.log("Email sent successfully", result.data);

        return { success: true };
    },
});