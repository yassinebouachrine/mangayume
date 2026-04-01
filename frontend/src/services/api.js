// L'URL de ton backend déployé séparément sur Vercel
const API_URL = import.meta.env.VITE_API_URL || '';

const api = {
  // Helper pour les requêtes
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    };
    
    // Ne pas mettre Content-Type pour FormData
    if (!(options.body instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }
    
    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ 
        error: 'Erreur réseau' 
      }));
      throw new Error(error.error || `Erreur ${response.status}`);
    }
    
    return response.json();
  },

  // Auth
  login: (data) => api.request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  register: (data) => api.request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  getProfile: () => api.request('/api/auth/profile'),
  
  // Manga
  getMangas: (params = '') => api.request(`/api/manga${params ? '?' + params : ''}`),
  getManga: (id) => api.request(`/api/manga/${id}`),
  getFeatured: () => api.request('/api/manga/featured'),
  getPopular: (limit = 10) => api.request(`/api/manga/popular?limit=${limit}`),
  getLatest: (limit = 20) => api.request(`/api/manga/latest?limit=${limit}`),
  
  // Chapters  
  getChapter: (id) => api.request(`/api/chapters/${id}`),
  getLatestChapters: (limit = 30) => api.request(`/api/chapters/latest?limit=${limit}`),
  
  // Genres
  getGenres: () => api.request('/api/manga/genres'),
  
  // Favorites
  toggleFavorite: (mangaId) => api.request(`/api/auth/favorites/${mangaId}`, {
    method: 'POST',
  }),
  getFavorites: () => api.request('/api/auth/favorites'),
  
  // Comments
  getComments: (mangaId, page = 1) => api.request(
    `/api/comments/manga/${mangaId}?page=${page}`
  ),
  createComment: (data) => api.request('/api/comments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Health
  health: () => api.request('/api/health'),
};

export default api;