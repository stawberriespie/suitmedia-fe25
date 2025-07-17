//menampilkan postcard biar sprti grid
import React, { useEffect, useRef } from 'react';
import PostCard from './PostCard';
import '../styles/PostGrid.css';

//menerima API dri testsuitmedia
const PostGrid = ({ posts }) => {
  const observerRef = useRef(null);

  //utk mengganti data jika brpindah hal
  useEffect(() => {
    // Lazy loading
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      if (imageObserver) {
        imageObserver.disconnect();
      }
    };
  }, [posts]);

  //mnmpilkan grid yg berisi postcard
  return (
    <div className="posts-grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
