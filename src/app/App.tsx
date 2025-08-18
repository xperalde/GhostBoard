import type { FC } from 'react';
import MainLayout from '../shared/layouts/MainLayout.tsx';
import Footer from '../widgets/LayoutFooter/Footer.tsx';
import Header from '../widgets/LayoutHeader/Header.tsx';
import PostList from '../widgets/PostList/PostList.tsx';
import { mockPosts } from '../entities/post/api/api.ts';
import ThemeProvider from '../shared/lib/theme/ThemeProvider.tsx';
import { useEffect, useState } from 'react';
import withLoading from '../shared/lib/hoc/withLoading.tsx';

const PostListWithLoading = withLoading(PostList);

const App: FC = () => {
  const [posts, setPosts] = useState<typeof mockPosts>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout Header={<Header />} Footer={<Footer />}>
        <PostListWithLoading posts={posts} isLoading={isLoading} />
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
