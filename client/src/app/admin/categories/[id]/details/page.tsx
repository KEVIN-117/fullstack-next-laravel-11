import { HeaderPage } from "@/modules/shared"

export default function CategoryDetailsPage({ params }: { params: { id: string } }) {

    return (
        <div>
            <HeaderPage
                title="Category Details"
                description="Welcome to the admin Category details dashboard"
                pathName="/admin/categories"
                btnTitle="Back to Categories"
            />
            <h1>Category Details</h1>
            My category slug is {params.id}
        </div>
    );
}

/*

*/
