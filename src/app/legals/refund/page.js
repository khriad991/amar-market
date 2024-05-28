import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Refund from "@/components/legals/Refund";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import CategoriesComponent from "@/components/product/CategoriesComponent";

const Page = () => {
    return (
        <MasterLayout>
           <Suspense fallback={<LegalSkeleton/>}>
               <Refund/>
           </Suspense>
            <Suspense fallback={<CategoriesSkeleton/>}>
                <CategoriesComponent/>
            </Suspense>
        </MasterLayout>
    );
};

export default Page;