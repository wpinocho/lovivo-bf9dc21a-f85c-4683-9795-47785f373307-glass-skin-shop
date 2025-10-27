import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { SPFComparer } from '@/components/SPFComparer';
import { RoutineBundles } from '@/components/RoutineBundles';
import { Sparkles, Droplets, Shield, Heart } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Glass Skin */}
      <section className="relative bg-gradient-to-br from-k-pink via-white to-k-pink/50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-k-green/20">
                <Sparkles className="h-4 w-4 text-k-green" />
                <span className="text-sm font-semibold text-k-dark">Authentic K-Beauty</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-k-dark leading-tight">
                Achieve
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-k-green to-emerald-400">
                  Glass Skin
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Discover the secret to luminous, dewy skin with our curated collection of Korean skincare essentials. Science-backed formulas for visible results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-k-dark hover:bg-k-green text-white px-8 py-6 text-lg smooth-hover"
                  onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Shop Skincare
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-k-dark text-k-dark hover:bg-k-dark hover:text-white px-8 py-6 text-lg smooth-hover"
                  onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Find Your Type
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-k-dark">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-k-dark">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-k-dark">100%</div>
                  <div className="text-sm text-gray-600">Authentic</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl k-glow">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=1000&fit=crop" 
                  alt="Glass skin beauty"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-k-green/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-k-pink/40 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-k-pink rounded-full mb-3">
                <Droplets className="h-8 w-8 text-k-green" />
              </div>
              <h3 className="font-semibold text-k-dark mb-1">Hydration Boost</h3>
              <p className="text-sm text-gray-600">Deep moisture lock</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-k-pink rounded-full mb-3">
                <Shield className="h-8 w-8 text-k-green" />
              </div>
              <h3 className="font-semibold text-k-dark mb-1">Barrier Repair</h3>
              <p className="text-sm text-gray-600">Strengthen & protect</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-k-pink rounded-full mb-3">
                <Sparkles className="h-8 w-8 text-k-green" />
              </div>
              <h3 className="font-semibold text-k-dark mb-1">Brightening</h3>
              <p className="text-sm text-gray-600">Radiant glow</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-k-pink rounded-full mb-3">
                <Heart className="h-8 w-8 text-k-green" />
              </div>
              <h3 className="font-semibold text-k-dark mb-1">Gentle Care</h3>
              <p className="text-sm text-gray-600">Sensitive-friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Type Collections */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-gradient-to-b from-white to-k-pink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-k-dark mb-4">
                Shop by Skin Type
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every skin type is unique. Find products specifically formulated for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Products Grid */}
      <section id="shop-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-k-dark mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Bestselling Treatments'
                }
              </h2>
              <p className="text-gray-600">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Powerful actives that transform your skin'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-k-dark text-k-dark hover:bg-k-dark hover:text-white"
              >
                View All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-k-pink/20 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Routine Bundles */}
      <RoutineBundles />

      {/* SPF Comparer */}
      <SPFComparer />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-k-dark via-gray-800 to-k-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Best Skin?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've transformed their skincare routine with authentic K-beauty products.
          </p>
          <Button 
            size="lg" 
            className="bg-k-green hover:bg-emerald-600 text-white px-12 py-6 text-lg smooth-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Shop Skincare Now
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};