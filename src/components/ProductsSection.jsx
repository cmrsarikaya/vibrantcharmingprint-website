import React, { useState, useMemo } from 'react';
import { ExternalLink, Filter, Star } from 'lucide-react';
import { mockProducts, productCategories } from '../data/mock';

// Simple Button component without ui dependency
const Button = ({ children, onClick, disabled, variant = "default", size = "default", className = "" }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-800",
    outline: "border border-slate-200 hover:bg-slate-100 text-slate-900"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-sm"
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Simple Badge component
const Badge = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold";
  const variants = {
    default: "bg-slate-900 text-slate-50",
    secondary: "bg-slate-100 text-slate-900"
  };
  
  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

// Simple Card components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return mockProducts;
    }
    return mockProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleEtsyRedirect = (etsyUrl) => {
    console.log('Redirecting to:', etsyUrl); // Debug log
    window.open(etsyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Digital Product Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Take your projects to the next level with professional design templates crafted with premium quality and attention to detail
          </p>
        </div>

        {/* Premium Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center mr-6 mb-3">
            <Filter size={20} className="text-yellow-600 mr-3" />
            <span className="text-sm font-medium text-slate-800">Filter Collection:</span>
          </div>
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={`mb-3 transition-all duration-300 rounded-full px-6 py-2 ${
                selectedCategory === category 
                  ? 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 hover:text-white text-slate-800 border-yellow-600/30 hover:border-transparent'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {currentProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-2xl">
              <CardHeader className="p-0 relative overflow-hidden">
                <div className="aspect-[4/3] relative rounded-t-2xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:scale-105 transition-transform duration-300 shadow-lg rounded-full px-6"
                      onClick={() => handleEtsyRedirect(product.etsyUrl)}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View on Etsy
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-white/95 text-slate-800 font-medium rounded-full px-3 py-1 shadow-sm">
                  {product.category}
                </Badge>
                {product.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white animate-pulse font-medium rounded-full px-3 py-1 shadow-lg">
                    Limited time 30% OFF
                  </Badge>
                )}
              </CardHeader>
              
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl text-slate-800 mb-4 line-clamp-2 leading-tight">
                  {product.title}
                </h3>
                <div className="mb-6">
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Premium Lead Magnet - Free Design Tips */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-3 shadow-sm">
                        FREE
                      </div>
                      <span className="text-sm font-semibold text-slate-800">Design Tips Included</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      🎁 Get <strong>1 area styling guide FREE</strong> with every purchase + bonus room layout tips
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-800 rounded-full px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-8 pb-8 pt-0 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <div className="flex items-center text-yellow-600 mb-2">
                    <Star size={18} className="fill-current" />
                    <span className="text-sm text-slate-800 ml-2 font-medium">5.0</span>
                  </div>
                  <p className="text-xs text-yellow-600 font-medium">+ Free Design Guide</p>
                </div>
                <Button 
                  size="sm"
                  onClick={() => handleEtsyRedirect(product.etsyUrl)}
                  className="bg-slate-800 text-white hover:bg-slate-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-2 font-medium"
                >
                  Get on Etsy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page 
                  ? "bg-gray-900 hover:bg-gray-800 text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
