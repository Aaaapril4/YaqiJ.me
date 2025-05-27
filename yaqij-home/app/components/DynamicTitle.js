'use client';

import { useEffect } from 'react';

const DynamicTitle = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | YaqiJ.me` : 'YaqiJ.me';
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
    
    return () => {
      document.title = 'YaqiJ.me';
    };
  }, [title, description]);
  
  return null;
};

export default DynamicTitle; 