import { z } from "zod";
import { privateProcedure, router } from "./trpc";

export const paymentRouter = router({
  createSession: privateProcedure.input(z.object({ productIds: z.array(z.string())}))
})