import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Buy from "@/components/legals/Buy";

const Page = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LegalSkeleton/>}>
                <Buy/>
            </Suspense>
        </MasterLayout>
    );
};

export default Page;