"use client";
import { Pagination } from "@nextui-org/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function CustomPagination({ total, initialPage }: { total: number, initialPage: number }) {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const createPageUrl = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        router.push(`${pathName}?${params.toString()}`)
    }
    return (
        <>
            <div className="flex w-full justify-center items-center mt-5">
                <Pagination
                    showControls
                    showShadow
                    color="primary"
                    onChange={(e) => {
                        createPageUrl(e);
                    }}
                    total={total}
                    initialPage={initialPage}
                />
            </div>
        </>
    )
}
