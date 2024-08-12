import { LoginForm } from "@/modules/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  return redirect("/auth/login");
}
