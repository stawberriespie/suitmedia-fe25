import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import PostGrid from './PostGrid';
import Controls from './Controls';
import Loading from './Loading';
import Pagination from './Pagination';
import { fetchPosts } from '../services/api';
import '../styles/TestSuitmedia.css';

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState('-published_at');
  const [currentPerPage, setCurrentPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showingInfo, setShowingInfo] = useState('');

  // Load posts dri API
  const loadPosts = async (page = currentPage, sort = currentSort, perPage = currentPerPage) => {
    setLoading(true);
    try {
      const response = await fetchPosts(page, sort, perPage);
      setPosts(response.data);
      setTotalPages(response.meta.last_page);
      setTotalItems(response.meta.total);
      setShowingInfo(`Showing ${response.meta.from} - ${response.meta.to} of ${response.meta.total}`);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
    loadPosts(page, currentSort, currentPerPage);
  };

  // Handle sort changes
  const handleSortChange = (sort) => {
    setCurrentSort(sort);
    setCurrentPage(1);
    loadPosts(1, sort, currentPerPage);
  };

  // Handle per page changes
  const handlePerPageChange = (perPage) => {
    setCurrentPerPage(perPage);
    setCurrentPage(1);
    loadPosts(1, currentSort, perPage);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="blog-list-page">
      <Header />
      <Banner />
      
      <main className="main-content">
        <div className="container">
          <Controls
            showingInfo={showingInfo}
            currentSort={currentSort}
            currentPerPage={currentPerPage}
            onSortChange={handleSortChange}
            onPerPageChange={handlePerPageChange}
          />
          
          {loading ? (
            <Loading />
          ) : (
            <>
              <PostGrid posts={posts} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogListPage;
