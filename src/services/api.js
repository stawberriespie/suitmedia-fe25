// API service
const API_BASE_URL = 'https://suitmedia-backend.suitdev.com/api';

export const fetchPosts = async (page = 1, sort = '-published_at', perPage = 10) => {
  const params = new URLSearchParams({
    'page[number]': page,
    'page[size]': perPage,
    'append[]': ['small_image', 'medium_image'],
    'sort': sort
  });

  try {
    const response = await fetch(`${API_BASE_URL}/ideas?${params}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return mock data utk demo
    return getMockData(page, perPage, sort);
  }
};

// mock data utk demo
const getMockData = (page = 1, perPage = 10, sort = '-published_at') => {
  const mockPosts = [];
  const totalMockItems = 100;
  
  // membuat urutan data
  const baseDate = new Date();
  const isDescending = sort === '-published_at';
  
  //mengatur urutan data lama dan terbaru utk sort by:
  for (let i = 1; i <= totalMockItems; i++) {
    const daysOffset = i - 1;
    const publishedDate = new Date();
    publishedDate.setDate(baseDate.getDate() - (isDescending ? daysOffset : (totalMockItems - i)));

    
    mockPosts.push({
      id: i,
      title: `Kenali Tingkatan Influencers berdasarkan Jumlah Followers ${i}`,
      published_at: publishedDate.toISOString(),
      small_image: [
        {
          url: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=300&fit=crop&auto=format`
        }
      ],
      medium_image: [
        {
          url: `https://images.unsplash.com/photo-${1500000000000 + i}?w=600&h=400&fit=crop&auto=format`
        }
      ]
    });
  }

  // pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedPosts = mockPosts.slice(startIndex, endIndex);

  return {
    data: paginatedPosts,
    meta: {
      current_page: page,
      last_page: Math.ceil(totalMockItems / perPage),
      per_page: perPage,
      total: totalMockItems,
      from: startIndex + 1,
      to: Math.min(endIndex, totalMockItems)
    }
  };
};
