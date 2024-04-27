import { User } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

export function useUserSessionQuerty() {
  return useQuery<User>({
    queryKey: ["userSession"],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: "Alexandro Castro",
            role: "Developer",
          });
        }, 1000);

        // reject(new Error("User not found"));
      });
    },
  });
}
