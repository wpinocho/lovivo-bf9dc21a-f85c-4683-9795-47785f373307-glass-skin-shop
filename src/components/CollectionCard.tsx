import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-2 border-transparent hover:border-k-green overflow-hidden product-hover">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-k-pink/30 to-white overflow-hidden relative group">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <div className="absolute top-3 right-3 bg-k-green text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              FEATURED
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-k-dark font-bold text-lg mb-2 line-clamp-1">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-2 border-k-dark text-k-dark hover:bg-k-dark hover:text-white font-semibold transition-all group"
            onClick={() => onViewProducts(collection.id)}
          >
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}