import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';

export default function HomeProductgrid() {
  const products = [
    {
      id: 1,
      name: 'Moonstone Cascade Earrings',
      price: 189.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 47,
      badge: 'Sale',
      category: 'Earrings',
    },
    {
      id: 2,
      name: 'Rose Gold Infinity Necklace',
      price: 324.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 73,
      badge: 'New',
      category: 'Necklaces',
    },
    {
      id: 3,
      name: 'Vintage Sapphire Ring',
      price: 567.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 29,
      category: 'Rings',
    },
    {
      id: 4,
      name: 'Amethyst Cluster Bracelet',
      price: 156.99,
      originalPrice: 198.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 38,
      badge: 'Sale',
      category: 'Bracelets',
    },
    {
      id: 5,
      name: 'Pearl Drop Statement Earrings',
      price: 278.99,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 62,
      category: 'Earrings',
    },
    {
      id: 6,
      name: 'Turquoise Bohemian Pendant',
      price: 234.99,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 91,
      badge: 'Popular',
      category: 'Necklaces',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Treasures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each piece tells a story of artisan craftsmanship and timeless elegance
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Filter by Style
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Jewelry Type
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Stone Type
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 6 of 18 artisan pieces</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Customer Favorites
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-muted">
                {product.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Add to Collection
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Discover More Treasures
          </Button>
        </div>
      </div>
    </section>
  );
}
