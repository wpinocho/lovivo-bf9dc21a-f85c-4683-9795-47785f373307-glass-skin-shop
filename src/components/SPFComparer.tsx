import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

export const SPFComparer = () => {
  const sunscreens = [
    {
      name: 'SPF 50+ Sunscreen Essence',
      price: 24,
      spf: '50+',
      pa: 'PA++++',
      type: 'Chemical',
      finish: 'Dewy',
      whitecast: false,
      waterResistant: true,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      handle: 'spf-50-sunscreen-essence'
    },
    {
      name: 'Mineral SPF 45 Tone-Up Cream',
      price: 32,
      spf: '45',
      pa: 'PA+++',
      type: 'Physical',
      finish: 'Matte',
      whitecast: true,
      waterResistant: true,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      handle: 'mineral-spf-45-tone-up'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-k-pink/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-k-dark mb-4">
            Find Your Perfect SPF
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare our bestselling sunscreens and choose the one that fits your skin type and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sunscreens.map((sunscreen, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-k-green transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-k-pink/30 to-white overflow-hidden">
                  <img 
                    src={sunscreen.image} 
                    alt={sunscreen.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-k-dark mb-2">
                    {sunscreen.name}
                  </h3>
                  <div className="text-2xl font-bold text-k-green mb-4">
                    ${sunscreen.price}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Protection</span>
                      <span className="font-semibold text-k-dark">{sunscreen.spf} {sunscreen.pa}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Filter Type</span>
                      <span className="font-semibold text-k-dark">{sunscreen.type}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Finish</span>
                      <span className="font-semibold text-k-dark">{sunscreen.finish}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">White Cast</span>
                      {sunscreen.whitecast ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        <Check className="h-5 w-5 text-k-green" />
                      )}
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Water Resistant</span>
                      {sunscreen.waterResistant ? (
                        <Check className="h-5 w-5 text-k-green" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-k-dark hover:bg-k-green text-white transition-colors"
                    onClick={() => window.location.href = `/products/${sunscreen.handle}`}
                  >
                    View Product
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