
import { HeaderPage } from "@/modules/shared";

export default async function CategoriesPage() {

    return (
        <div>
            <HeaderPage title="Products"
                btnTitle="Add Product"
                description="Welcome to the products dashboard"
                pathName="/admin/categories/add"
            />
            
        </div>
    );
}
