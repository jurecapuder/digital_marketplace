export const useAuth = () => {
  const signOut = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
        
      });
    } catch (error) {
      
    }
  }
}