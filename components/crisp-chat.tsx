"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("47f1e406-f021-41b5-894b-b49fb0493e68");
  }, []);

  return null;
};
