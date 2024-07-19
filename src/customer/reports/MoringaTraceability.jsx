import React from 'react';
// import { Coffee, Book, GitBranch, Award } from 'lucide-react';
import { Video, Leaf, BookOpen, Map, Award } from 'lucide-react';
import { useLocation } from 'react-router-dom';
const MoringaFarmerDetails = () => {
  // const bottomIcons = [
  //   { Icon: Coffee, label: 'Benefits' },
  //   { Icon: Book, label: 'Recepies' },
  //   { Icon: GitBranch, label: 'Traceability' },
  //   { Icon: Award, label: 'Quality' },
  // ];
  
  const location = useLocation();
  const currentPath = location.pathname;
    return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-gray-300 aspect-video mb-4 mt-16 flex items-center justify-center text-gray-600">
          Infographic
        </div>
        
        <div className="space-y-4">
          <section>
            <h2 className="font-bold mb-2">Farmer Details:</h2>
            <p>Name:</p>
            <p>Village:</p>
            <p>State:</p>
            <p>Crop Harvest Date:</p>
          </section>
          
          <section>
            <h2 className="font-bold mb-2">SHGs:</h2>
            <p>Name:</p>
            <p>Village:</p>
            <p>Solar drying date:</p>
          </section>
          
          <section>
            <h2 className="font-bold mb-2">Kisanlink purchase date:</h2>
          </section>
          
          <section>
            <h2 className="font-bold mb-2">Amrti</h2>
            <p>Packing Location:</p>
            <p>Date:</p>
          </section>
        </div>
      </div>
      
      {/* <div className="flex fixed bottom-0 w-full justify-around items-center bg-white p-4 border-t border-gray-200">
        {bottomIcons.map(({ Icon, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div> */}
     <div className=" flex fixed bottom-0 w-full justify-around py-2 bg-green-50">
                {[
                  {icon: <Leaf className="w-5 h-5" />, label: 'Benefits',path:'/product/moringa/101' },
                  { icon: <BookOpen className="w-5 h-5" />, label: 'Recipes',path:'/product/moringa/recipes' },
                  { icon: <Map className="w-5 h-5" />, label: 'Traceability',path:'/product/moringa/farmer-details'  },
                  { icon: <Award className="w-5 h-5" />, label: 'Quality',path:'/product/moringa/product-report' },
                ].map(({ icon, label, path }) => (
                
                  <div key={label} className={`flex flex-col items-center ${path===currentPath ? 'text-green-500' : 'text-gray-600'}`}>
                    <a href={path}> {icon}</a>
                    <span className="text-[10px] mt-0.5">{label}</span>
                    
                  </div>
                ))}
              </div>
    </div>
  );
};

export default MoringaFarmerDetails;