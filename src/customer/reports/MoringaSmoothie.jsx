import React from 'react';
import { Video, Leaf, BookOpen, Map, Award } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Smoothie = () => {
  const categories = [
    { title: 'Moringa leaf Almond Smoothie', image: 'https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-6.png',url:"/product/moringa/recipes/easy-to-use/moringa-almond-smoothie" },
    { title: 'Moringa Leaf Banana Smoothie', image: 'https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-7.png',url:"/product/moringa/recipes/easy-to-use/moringa-banana-smoothie" },
  ];
  
  const location = useLocation();
  const currentPath = location.pathname;

  const isRecipesActive = currentPath.startsWith('/product/moringa/recipes') || 
                          currentPath.startsWith('/products/moringa/recipes');

  return (
    <div className="flex flex-col h-auto w-auto mt-16 bg-gray-100">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-gray-300 aspect-video mb-2 flex items-center justify-center text-gray-600">
                <a href={category.url}><img src={category.image} className='h-[175px] w-[172px]' alt="" /></a>
              </div>
              <div className="bg-orange-200 p-2 h-auto text-center text-sm">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-60">
      </div>
      <div className="flex fixed bottom-0 w-full justify-around py-2 bg-white">
        {[
          {icon: <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/kindness.png' alt='' className="w-5 h-5" />, label: 'Benefits', path:'/product/moringa/101' },
          { icon: <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/cookbook.png' alt='' className="w-5 h-5" />, label: 'Recipes', path:'/product/moringa/recipes' },
          { icon: <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/traceability.png' alt='' className="w-5 h-5" />, label: 'Traceability', path:'/product/moringa/farmer-details' },
          { icon: <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Quality.png' alt='' className="w-5 h-5" />, label: 'Quality', path:'/product/moringa/product-report' },
        ].map(({ icon, label, path }) => (
          <div 
            key={label} 
            className={`flex flex-col items-center justify-center p-2 rounded-md cursor-pointer ${
              (path === currentPath || (label === 'Recipes' && isRecipesActive)) 
              ? 'bg-green-100' 
              : 'bg-white'
            }`}
          >
            <a href={path}>{icon}</a>
            <span className="text-[10px] mt-0.5 text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smoothie;