import React from 'react';

interface DavinLogoProps {
  variant?: 'full' | 'compact' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const DavinLogo: React.FC<DavinLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-[0.16em]',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Exact replica of the black monogram emblem with intertwining DS & DEV'S */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xs rounded-xl overflow-hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Black Square Background */}
          <rect width="200" height="200" rx="32" fill="#050709" />

          {/* Letter D */}
          <g fill="#FFFFFF">
            {/* D vertical stem with classic Didone serifs */}
            <path d="M 50 46 H 74 V 52 H 65 V 124 H 74 V 130 H 50 V 124 H 59 V 52 H 50 Z" />
            
            {/* D rounded outer & inner bowl */}
            <path d="M 64 52 H 84 C 112 52 130 68 130 88 C 130 108 112 124 84 124 H 64 V 117 H 84 C 105 117 120 104 120 88 C 120 72 105 59 84 59 H 64 Z" />
          </g>

          {/* Cutout backdrop behind S for interlocking depth */}
          <path
            d="M 124 55 
               C 124 48 116 43 103 43 
               C 89 43 80 50 80 61 
               C 80 73 94 81 106 88 
               C 122 96 132 104 132 117 
               C 132 131 118 139 102 139 
               C 86 139 74 130 74 118 
               C 74 111 80 105 87 105 
               C 93 105 97 109 97 115 
               C 97 122 91 127 84 127 
               C 88 132 95 134 102 134 
               C 114 134 122 127 122 118 
               C 122 107 110 99 98 92 
               C 82 83 72 74 72 61 
               C 72 48 84 39 102 39 
               C 116 39 128 46 128 55 Z"
            fill="#050709"
            stroke="#050709"
            strokeWidth="5"
          />

          {/* Letter S (Intertwined Serif with Flourish) */}
          <path
            d="M 124 55 
               C 124 48 116 43 103 43 
               C 89 43 80 50 80 61 
               C 80 73 94 81 106 88 
               C 122 96 132 104 132 117 
               C 132 131 118 139 102 139 
               C 86 139 74 130 74 118 
               C 74 111 80 105 87 105 
               C 93 105 97 109 97 115 
               C 97 122 91 127 84 127 
               C 88 132 95 134 102 134 
               C 114 134 122 127 122 118 
               C 122 107 110 99 98 92 
               C 82 83 72 74 72 61 
               C 72 48 84 39 102 39 
               C 116 39 128 46 128 55 Z"
            fill="#FFFFFF"
          />

          {/* DEV'S text underneath the monogram */}
          <text
            x="100"
            y="173"
            textAnchor="middle"
            fill="#FFFFFF"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: '21px',
              letterSpacing: '0.24em',
            }}
          >
            DEV'S
          </text>
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight text-[#1C1917] ${titleSizes[size]} transition-colors duration-150 font-['Cinzel',serif]`}
          >
            DEV'S
          </span>
          {variant === 'full' && (
            <span
              className={`font-semibold uppercase text-[#57534E] mt-0.5 tracking-wider ${subtitleSizes[size]}`}
            >
              DESIGNER / DEVELOPER
            </span>
          )}
        </div>
      )}
    </div>
  );
};
