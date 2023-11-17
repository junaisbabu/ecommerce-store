"use client";

import Modal from "../ui/modal";
import Container from "@/components/ui/container";
import Signup from "./signup";
import useAuthModal from "@/hooks/use-auth-modal";
import Login from "./signin";
import { useState } from "react";

enum State {
  LOGIN,
  SIGNUP,
}

function AuthModal() {
  const authModal = useAuthModal();
  const [show, setShow] = useState(State.LOGIN);

  return (
    <Modal open={authModal.isOpen} onClose={authModal.onClose}>
      <Container>
        {show === State.LOGIN ? (
          <Login onShow={() => setShow(State.SIGNUP)} />
        ) : (
          <Signup onShow={() => setShow(State.LOGIN)} />
        )}
      </Container>
    </Modal>
  );
}

export default AuthModal;
