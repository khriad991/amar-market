import React, {Suspense} from 'react';
import MasterLayout from "@/components/master/MasterLayout";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Complain from "@/components/legals/Complain";

const Page = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LegalSkeleton/>}>
                <Complain/>
            </Suspense>
        </MasterLayout>
    );
};

export default Page;