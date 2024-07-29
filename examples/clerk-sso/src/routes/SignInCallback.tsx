import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { userManager } from "../sdk";

export default function SignInRedirect() {
  const navigate = useNavigate();

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => userManager.signinCallback(),
  });

  useEffect(() => {
    if (user) {
      navigate("/mywave");
    }
  }, [navigate, user]);

  return <div className="pageCenter">{error?.message}</div>;
}
