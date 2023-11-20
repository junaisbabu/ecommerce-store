"use client";

import { SessionProvider } from "next-auth/react";

function AuthProvider(props: any) {
  return <SessionProvider {...props}>{props.children}</SessionProvider>;
}

export default AuthProvider;
