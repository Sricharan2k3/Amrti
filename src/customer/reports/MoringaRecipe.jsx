import React from 'react';
import { Coffee, Book, GitBranch, Award } from 'lucide-react';

const MoringaRecipeCategories = () => {
  const categories = [
    { title: 'Easy to make Recepies', image: 'IMAGE' },
    { title: 'Moringa Tea Recepies', image: 'IMAGE' },
    { title: 'Blends and Shakes', image: 'IMAGE' },
    { title: 'Food Recepies', image: 'IMAGE' },
  ];

  const bottomIcons = [
    { Icon: Coffee, label: 'Benefits' },
    { Icon: Book, label: 'Recepies' },
    { Icon: GitBranch, label: 'Traceability' },
    { Icon: Award, label: 'Quality' },
  ];

  return (
    <div className="flex flex-col h-auto w-auto mt-16 bg-gray-100">
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-gray-300 aspect-video mb-2 flex items-center justify-center text-gray-600">
              {category.image}
            </div>
            <div className="bg-orange-200 p-2 text-center text-sm">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="h-60">

    </div>
    <div className="flex justify-around items-center bg-white p-4 border-t border-gray-200">
      {bottomIcons.map(({ Icon, label }, index) => (
        <div key={index} className="flex flex-col items-center">
          <Icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MoringaRecipeCategories;