import { redirect } from "next/navigation";
import { loadCookie } from "@/utils/cookiesLoader";

export default function Home() {
  const token = loadCookie("INV_NEXT_TOKEN");
  const user = loadCookie("INV_NEXT_USER");
  if (!token || !user) {
    return redirect("/auth/login");

  }

  return redirect("/admin/categories");

}
