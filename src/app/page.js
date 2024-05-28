import React, {Suspense} from "react";
import MasterLayout from "@/components/master/MasterLayout";
import SliderComponent from "@/components/product/SliderComponent";
import FeaturesComponent from "@/components/features/FeaturesComponent";
import CategoriesComponent from "@/components/product/CategoriesComponent";
import BrandsComponent from "@/components/product/BrandsComponent";
import ProductComponent from "@/components/product/ProductComponent";
import FeaturesSkeleton from "@/skeleton/features-skeleton";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import BrandsSkeleton from "@/skeleton/brands-skeleton";
const Page = () => {
    return (
        <MasterLayout>

            <SliderComponent/>

            <Suspense fallback={<FeaturesSkeleton/>}>
                <FeaturesComponent/>
            </Suspense>

            <Suspense fallback={<CategoriesSkeleton/>}>
                <CategoriesComponent/>
            </Suspense>

            <ProductComponent/>

            <Suspense fallback={<BrandsSkeleton/>}>
                <BrandsComponent/>
            </Suspense>

        </MasterLayout>
    );
};

export default Page;