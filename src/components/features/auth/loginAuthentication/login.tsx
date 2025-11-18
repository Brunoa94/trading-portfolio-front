"use server";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LoginIcon } from "@/assets/icons";
import React, { Suspense } from "react";

const LoginForm = React.lazy(() => import("./loginForm"));

function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="absolute right-4">
          <LoginIcon />
          Login
        </Button>
      </DialogTrigger>
      <Suspense>
        <LoginForm />
      </Suspense>
    </Dialog>
  );
}

export default Login;
