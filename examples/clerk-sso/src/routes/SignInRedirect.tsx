import { useQuery } from "@tanstack/react-query";

import { userManager } from "../sdk";

export default function SignInRedirect() {
  const { error } = useQuery({
    queryKey: ["user"],
    queryFn: () => userManager.signinRedirect(),
  });

  return (
    <div className="pageCenter">
      {error?.message ?? "Redirecting to authenticate endpoint..."}
    </div>
  );
}
