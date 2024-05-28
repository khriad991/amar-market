import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import About from "@/components/legals/About";

const Page = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LegalSkeleton/>}>
                <About/>
            </Suspense>
        </MasterLayout>
    );
};

export default Page;