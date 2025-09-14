import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Heart, Sparkles, Crown, Star, Gift, Palette, Shield, Truck } from 'lucide-react';

export default function HomeFeatures() {
  const features = [
    {
      icon: Gem,
      title: 'Ethically Sourced Gemstones',
      description:
        'Every precious stone is carefully selected from trusted suppliers who share our commitment to ethical mining practices.',
      badge: 'Quality',
    },
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description:
        'Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
      badge: 'Artisan Made',
    },
    {
      icon: Sparkles,
      title: 'One-of-a-Kind Designs',
      description:
        'Discover truly unique jewelry pieces that reflect your individual style and personality.',
      badge: 'Exclusive',
    },
    {
      icon: Crown,
      title: 'Heirloom Quality',
      description:
        'Built to last generations with premium materials and expert craftsmanship that stands the test of time.',
      badge: 'Premium',
    },
    {
      icon: Star,
      title: 'Custom Creations',
      description:
        'Work directly with our master jewelers to create bespoke pieces tailored to your vision and specifications.',
      badge: 'Personalized',
    },
    {
      icon: Gift,
      title: 'Elegant Gift Packaging',
      description:
        'Every purchase arrives in our signature luxury packaging, perfect for gifting or treating yourself.',
      badge: 'Presentation',
    },
    {
      icon: Palette,
      title: 'Diverse Collections',
      description:
        'From vintage-inspired classics to contemporary statement pieces, find jewelry for every occasion and style.',
      badge: 'Variety',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description:
        'We stand behind our craftsmanship with comprehensive warranty coverage and complimentary maintenance services.',
      badge: 'Guarantee',
    },
    {
      icon: Truck,
      title: 'Secure Worldwide Shipping',
      description:
        'Fully insured delivery with tracking and signature confirmation to ensure your treasures arrive safely.',
      badge: 'Delivery',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Artisan Gems
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Exceptional Jewelry for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Extraordinary Women
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the artistry, quality, and passion that makes every Artisan Gems piece a
            treasured addition to your jewelry collection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to discover your perfect piece?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Collections
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Custom Design Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
