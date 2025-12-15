"use server";

import { UButton } from "@/components/ui-elements/buttons/UButton";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LoginIcon } from "@/assets/icons";
import React, { Suspense } from "react";

const LoginForm = React.lazy(() => import("./loginForm"));

function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <UButton.WithVariant
          ariaLabel="Open login dialog"
          variant="outline"
          className="absolute right-4"
        >
          <LoginIcon />
          Login
        </UButton.WithVariant>
      </DialogTrigger>
      <Suspense>
        <LoginForm />
      </Suspense>
    </Dialog>
  );
}

export default Login;
