import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-2 border-transparent hover:border-k-green transition-all duration-300 product-hover overflow-hidden">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-k-pink/20 to-white overflow-hidden relative group">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-k-green text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      -{logic.discountPercentage}% OFF
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-k-dark text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      BESTSELLER
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      OUT OF STOCK
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-k-dark font-semibold text-base mb-2 line-clamp-2 min-h-[3rem]">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="px-4 pb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-medium text-k-dark mb-1">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-7 w-7 rounded-full border-2 transition-all ${
                                isSelected ? 'border-k-green ring-2 ring-k-green/30' : 'border-gray-300'
                              } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border-2 rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                              isSelected 
                                ? 'border-k-green bg-k-green text-white' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-gray-300 bg-white text-gray-700 opacity-40'
                                  : 'border-gray-300 bg-white text-gray-700 hover:border-k-green'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="px-4 pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-col">
                  <span className="text-k-dark font-bold text-lg">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="w-full border-2 border-k-dark text-k-dark hover:bg-k-dark hover:text-white disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all"
              >
                {logic.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}