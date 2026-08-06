import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes, basename: '/' },
  ({ router, isClient }) => {
    if (!isClient) return;
    let prevPath = router.state.location.pathname;
    router.subscribe((state) => {
      const path = state.location.pathname;
      if (path !== prevPath) {
        prevPath = path;
        if (typeof fbq !== 'undefined') {
          fbq('track', 'PageView');
        }
      }
    });
  },
);
