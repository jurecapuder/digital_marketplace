import { toast } from "sonner";

export const useAuth = () => {
  const signOut = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) throw new Error();
    } catch (error) {
      toast.error("Couldn't sign out, please try again.")
    }
  }
}