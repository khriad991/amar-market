import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Contact from "@/components/legals/Contact";

const Page = () => {
    return (
        <MasterLayout>
           <Suspense fallback={<LegalSkeleton/>}>
               <Contact/>
           </Suspense>
        </MasterLayout>
    );
};

export default Page;