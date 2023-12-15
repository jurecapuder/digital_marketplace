import { AuthCredentialsValidator } from "@/lib/validators/account-credantials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/get-payload";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();
    })
})