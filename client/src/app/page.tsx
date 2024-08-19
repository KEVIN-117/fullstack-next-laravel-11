import { redirect } from "next/navigation";
import { loadCookie } from "@/utils/cookiesLoader";

export default async function Home() {
  const token = await loadCookie("INV_NEXT_TOKEN");
  const user = await loadCookie("INV_NEXT_USER");
  if (!token || !user) {
    return redirect("/auth/login");

  }

  return redirect("/admin/categories");

}
