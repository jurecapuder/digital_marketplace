import { AuthCredentialsValidator } from "@/lib/validators/account-credantials-validator";
import { publicProcedure, router } from "./trpc";

export const authRouter = router({
  createPayloadUser: publicProcedure.input(AuthCredentialsValidator)
})