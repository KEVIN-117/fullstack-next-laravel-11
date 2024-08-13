import { HeaderPage } from "@/modules/shared";

export default async function functionName() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 13|XIGZ7Xv3FLGk4gJt7Tmjq0QdH5iQL1doOLE3or0u2f75d8d6`
        }
    });
    const data = await res.json();


    return (
        <div>
            <HeaderPage title="Dashboard"
                btnTitle="Add Category"
                description="Welcome to the admin dashboard"
                pathName="/admin/categories/add"
            />
        </div>
    );
}
