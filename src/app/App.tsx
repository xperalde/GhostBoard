import type { FC } from 'react';
import MainLayout from '../shared/layouts/MainLayout.tsx';
import Footer from '../widgets/LayoutFooter/Footer.tsx';
import Header from '../widgets/LayoutHeader/Header.tsx';
import PostList from '../widgets/PostList/PostList.tsx';
import { mockPosts } from '../entities/post/api/api.ts';
import ThemeProvider from '../shared/lib/theme/ThemeProvider.tsx';
const App: FC = () => {
  return (
    <ThemeProvider>
      <MainLayout Header={<Header />} Footer={<Footer />}>
        <PostList posts={mockPosts} />
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
