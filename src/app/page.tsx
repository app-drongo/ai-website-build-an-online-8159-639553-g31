import HomeHero from '@/components/sections/HomeHero'
import HomeProductgrid from '@/components/sections/HomeProductgrid'
import HomeFeatures from '@/components/sections/HomeFeatures'
import HomeCta from '@/components/sections/HomeCta'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProductgrid />
      <HomeFeatures />
      <HomeCta />
    </>
  )
}