# Suitmedia Ideas Page (Magang Berdampak 2025)

This is a front-end implementation of the **Ideas** page from Suitmedia, developed as part of the **Magang Berdampak 2025** technical test.

## 🔍 Features

- ✅ Responsive header with hide-on-scroll behavior
- ✅ Banner section with parallax scroll effect and angled bottom
- ✅ Dynamic post list with API integration from Suitmedia backend
- ✅ Sorting (latest/oldest) & pagination controls
- ✅ Lazy loading for images
- ✅ 3-line ellipsis on post titles
- ✅ Clean and responsive UI

## ⚙️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS (no framework)

## 🔗 API Endpoint

Data is fetched from Suitmedia's public API:
https://suitmedia-backend.suitdev.com/api/ideas
with parameters:
- ?page[number]=1
- &page[size]=10
- &append[]=small_image
- &append[]=medium_image
- &sort=-published_at


## 🚀 Getting Started


### 1. Clone the repo

```bash
git clone https://github.com/stawberriespie/suitmedia-fe25.git
cd suitmedia-fe25
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
Visit http://localhost:5173 to view the app.

## 📦 Folder Structure
```bash
src/
│
├── components/
│   ├── Banner.jsx
│   ├── PostCard.jsx
│   ├── PostGrid.jsx
│   ├── Pagination.jsx
│   ├── Loading.jsx
│
├── services/
│   ├── api.js
│ 
├── App.jsx
├── main.jsx
├── styles/
│   └── *.css
