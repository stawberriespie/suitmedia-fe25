import React from 'react';
import '../styles/PostCard.css';

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const imageUrl = post.small_image && post.small_image[0] 
    ? post.small_image[0].url 
    : `https://images.unsplash.com/photo-${1500000000000 + post.id}?w=400&h=300&fit=crop&auto=format`;

  return (
    <div className="post-card">
      <img 
        className="post-thumbnail" 
        data-src={imageUrl} 
        alt={post.title}
      />
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-date">{formatDate(post.published_at)}</div>
      </div>
    </div>
  );
};

export default PostCard;
