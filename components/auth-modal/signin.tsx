import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

function Login({ onShow }: { onShow: () => void }) {
  return (
    <form className="w-80 max-w-md space-y-4">
      <h1 className="text-center text-base font-bold md:text-lg">
        Log In to Your Account
      </h1>
      <div>
        <Input
          id="email"
          type="text"
          placeholder="Email Address"
          name="name"
          aria-describedby="name-error"
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          aria-describedby="password-error"
        />
      </div>
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

export default Login;
