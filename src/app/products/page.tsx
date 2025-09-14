import ProductCollectionPageheader from '@/components/sections/ProductCollectionPageheader'
import ProductCollectionProductgrid from '@/components/sections/ProductCollectionProductgrid'
import ProductCollectionFeatures from '@/components/sections/ProductCollectionFeatures'

export default function ProductCollectionPage() {
  return (
    <>
      <ProductCollectionPageheader />
      <ProductCollectionProductgrid />
      <ProductCollectionFeatures />
    </>
  )
}