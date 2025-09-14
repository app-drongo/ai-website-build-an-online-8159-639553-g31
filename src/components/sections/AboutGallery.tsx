import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Sparkles,
  Heart,
  Star,
  Eye,
} from 'lucide-react';

export default function AboutGallery() {
  const galleries = [
    {
      id: 1,
      title: 'Moonstone Elegance Collection',
      category: 'Necklaces & Pendants',
      mainImage:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 12, materials: 'Sterling Silver', gemstones: 'Moonstone' },
      priceRange: '$85 - $245',
    },
    {
      id: 2,
      title: 'Rose Gold Botanical Series',
      category: 'Rings & Bands',
      mainImage:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 8, materials: 'Rose Gold', gemstones: 'Sapphire' },
      priceRange: '$125 - $380',
    },
    {
      id: 3,
      title: 'Vintage Inspired Earrings',
      category: 'Earrings & Drops',
      mainImage:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=600&fit=crop',
      ],
      specs: { pieces: 15, materials: 'Gold Vermeil', gemstones: 'Pearl & Garnet' },
      priceRange: '$65 - $195',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Artisan Collections Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted jewelry collections, each piece uniquely designed and
            meticulously crafted by skilled artisans
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map(collection => (
            <Card
              key={collection.id}
              className="group overflow-hidden hover:shadow-xl transition-shadow border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.mainImage}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/90 backdrop-blur-sm"
                  >
                    <Grid3x3 className="size-4" />
                    {collection.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm"
                >
                  <Eye className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm">{collection.priceRange}</span>
                  </div>
                </div>

                {/* Favorite Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-16 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm"
                >
                  <Heart className="size-4" />
                </Button>
              </div>

              {/* Collection Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-1">{collection.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <Sparkles className="size-4" />
                  <span className="text-sm">{collection.category}</span>
                </div>

                {/* Collection Specs */}
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center justify-between">
                    <span>Pieces:</span>
                    <span className="font-medium">{collection.specs.pieces} unique designs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Materials:</span>
                    <span className="font-medium">{collection.specs.materials}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Gemstones:</span>
                    <span className="font-medium">{collection.specs.gemstones}</span>
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {collection.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${collection.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Explore Collection
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Star className="size-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Sparkles className="size-5" />
            Browse All Jewelry Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
