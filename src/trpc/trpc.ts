import { User } from "@/payload-types";
import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";
import { PayloadRequest } from "payload/types";

const t = initTRPC.context<ExpressContext>().create();

const middleware = t.middleware;

const isAuth = middleware(async ({ ctx, next }) => {
  const req = ctx.req as PayloadRequest;

  const { user } = req as { user: User | null };
});

export const router = t.router;

export const publicProcedure = t.procedure;