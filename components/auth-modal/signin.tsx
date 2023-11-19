"use client";

import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { getUser } from "@/lib/actions/get-user";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import useAuthModal from "@/hooks/use-auth-modal";

function Signin({ onShow }: { onShow: () => void }) {
  const session = useSession();
  const authModal = useAuthModal();
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(getUser, initialState);

  useEffect(() => {
    if (session?.status === "authenticated" || state.status === "success") {
      authModal.onClose();
    }
  }, [state, session]);

  return (
    <form className="w-80 max-w-md space-y-4" action={dispatch}>
      <h1 className="text-center text-base font-bold md:text-lg">
        Log In to Your Account
      </h1>
      <div>
        <Input
          id="email"
          type="text"
          placeholder="Email Address"
          name="email"
          aria-describedby="email-error"
        />
        {state.errors?.email ? (
          <div
            id="name-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.email.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          aria-describedby="password-error"
        />
        {state.errors?.password ? (
          <div
            id="password-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.password.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>

      {state.status === "error" && (
        <small className="block text-red-500">{state.message}</small>
      )}

      <Button className="w-full py-2 text-sm" type="submit">
        Sign In
      </Button>

      <div className="flex items-center gap-2">
        <p className="text-xs">Don&apos;t you have an account?</p>
        <span
          className="cursor-pointer text-sm font-bold text-green-600 hover:underline hover:underline-offset-2"
          onClick={onShow}
        >
          Sign Up
        </span>
      </div>
    </form>
  );
}

export default Signin;
