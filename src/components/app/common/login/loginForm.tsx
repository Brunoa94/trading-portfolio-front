import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginUserT } from "@/schemas/login";
import { Form } from "../input/form";

function LoginForm() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginUserT) => {
    console.log("Data: " + JSON.stringify(data));
    reset();
  };

  return (
    <DialogContent className="max-w-[425px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-center">Login User</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Form.InputText
            name="username"
            title="Username"
            register={register}
          />
          <Form.InputPassword
            name="password"
            title="Password"
            register={register}
          />
        </div>
        <DialogFooter className="flex flex-col gap-2">
          <Button type="submit">Login</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default LoginForm;
