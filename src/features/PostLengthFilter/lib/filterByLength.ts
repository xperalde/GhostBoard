import type { Post } from '../../../widgets/PostList/PostList';

export function filterByLength(posts: Post[], maxLength: number) {
  if (maxLength <= 0) return posts;

  return (posts = posts.filter((post) => post.title.length < maxLength));
}
