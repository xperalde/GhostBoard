import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './providers/router/AppRouter';
import ThemeProvider from '../shared/lib/theme/ThemeProvider.tsx';

const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};
export default App;
