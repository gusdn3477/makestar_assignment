import React from 'react';

const Spinner: React.FC<{ size?: number }> = ({ size = 48 }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
      >
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

export default Spinner;
