import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="relative h-12 w-12">
        <div
          className="absolute inset-0 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"
          style={{
            borderColor: '#FF0099',
            borderTopColor: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
