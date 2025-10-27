import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export const RoutineBundles = () => {
  const bundles = [
    {
      name: 'Glass Skin Morning Routine',
      price: 89,
      originalPrice: 115,
      savings: 26,
      products: ['Hydrating Essence Toner', 'Vitamin C Serum', 'SPF 50+ Sunscreen'],
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
      description: 'Start your day with radiance'
    },
    {
      name: 'Night Repair Ritual',
      price: 95,
      originalPrice: 128,
      savings: 33,
      products: ['Green Tea Cleanser', 'Retinol Serum', 'Hyaluronic Sleeping Mask'],
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop',
      description: 'Repair and rejuvenate while you sleep'
    },
    {
      name: 'Sensitive Skin Essentials',
      price: 78,
      originalPrice: 98,
      savings: 20,
      products: ['Centella Calming Cream', 'Propolis Ampoule', 'Mineral SPF 45'],
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=400&fit=crop',
      description: 'Gentle care for reactive skin'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-k-pink px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-k-green" />
            <span className="text-sm font-semibold text-k-dark">Save up to 30%</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-k-dark mb-4">
            Complete Skincare Routines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated bundles for every skin concern. Get everything you need in one click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-k-green transition-all duration-300 product-hover">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-k-green text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save ${bundle.savings}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-k-dark mb-2">
                    {bundle.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {bundle.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Includes:</div>
                    <ul className="space-y-1">
                      {bundle.products.map((product, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="text-k-green mr-2">•</span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-k-dark">
                      ${bundle.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${bundle.originalPrice}
                    </span>
                  </div>

                  <Button className="w-full bg-k-dark hover:bg-k-green text-white transition-colors">
                    Add Bundle to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}