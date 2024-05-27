import {Suspense} from "react";
import MasterLayout from "@/components/master/MasterLayout";
import FeaturesSkeleton from "@/skeleton/features-skeleton";
import ProductSkeleton from "@/skeleton/product-skeleton";
import SliderSkeleton from "@/skeleton/slider-skeleton";
import SliderComponent from "@/components/product/SliderComponent";
import FeaturesComponent from "@/components/features/FeaturesComponent";
import CategoriesComponent from "@/components/product/CategoriesComponent";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import BrandsSkeleton from "@/skeleton/brands-skeleton";
import BrandsComponent from "@/components/product/BrandsComponent";
import ProductComponent from "@/components/product/ProductComponent";

export default function Home() {
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

          <ProductSkeleton/>
          <SliderSkeleton/>
      </MasterLayout>
  )
}
