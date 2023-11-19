"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import useAuthModal from "@/hooks/use-auth-modal";

const NavbarActions = () => {
  const session = useSession();
  const authModal = useAuthModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      {session.status === "authenticated" ? (
        <Button
          className="py-2 text-sm"
          onClick={() => signOut({ redirect: false })}
        >
          Sign Out
        </Button>
      ) : (
        <Button className="py-2 text-sm" onClick={() => authModal.onOpen()}>
          Sign In
        </Button>
      )}
    </div>
  );
};

export default NavbarActions;
