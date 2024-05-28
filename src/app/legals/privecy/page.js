import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";

const Page = () => {
    return (
        <MasterLayout>
           <Suspense fallback={<LegalSkeleton/>}>

           </Suspense>
        </MasterLayout>
    );
};

export default Page;