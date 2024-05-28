import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Refund from "@/components/legals/Refund";

const Page = () => {
    return (
        <MasterLayout>
           <Suspense fallback={<LegalSkeleton/>}>
               <Refund/>
           </Suspense>
        </MasterLayout>
    );
};

export default Page;