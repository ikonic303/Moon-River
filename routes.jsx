import React from 'react';
import Home from './Home';
import Services from './Services';
import About from './About';
import ServiceArea from './ServiceArea';
import Contact from './Contact';
import Blog from './Blog';
import Post from './Post';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import NotFound from './NotFound';
import { getAllPosts, getPost } from './lib/blog.js';

export const PHONE = '(303) 901-0048';

async function blogListLoader() {
  if (!import.meta.env.SSR) return null;
  try {
    return await getAllPosts();
  } catch {
    return [];
  }
}

async function postLoader({ params }) {
  if (!import.meta.env.SSR) return null;
  try {
    const post = await getPost(params.slug);
    return post && post.status === 'published' ? post : null;
  } catch {
    return null;
  }
}

async function blogStaticPaths() {
  try {
    const posts = await getAllPosts();
    return posts.map((p) => `/blog/${p.slug}`);
  } catch {
    return [];
  }
}

export const routes = [
  { path: '/', element: <Home phone={PHONE} /> },
  { path: '/services', element: <Services phone={PHONE} /> },
  { path: '/about', element: <About phone={PHONE} /> },
  { path: '/service-area', element: <ServiceArea phone={PHONE} /> },
  { path: '/contact', element: <Contact phone={PHONE} /> },
  { path: '/blog', element: <Blog phone={PHONE} />, loader: blogListLoader },
  {
    path: '/blog/:slug',
    element: <Post phone={PHONE} />,
    loader: postLoader,
    getStaticPaths: blogStaticPaths,
  },
  { path: '/privacy-policy', element: <PrivacyPolicy phone={PHONE} /> },
  { path: '/terms', element: <Terms phone={PHONE} /> },
  { path: '/404', element: <NotFound phone={PHONE} /> },
  { path: '*', element: <NotFound phone={PHONE} /> },
];

export default routes;
