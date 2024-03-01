import { useQuery } from '@apollo/client';
import { GET_ALL_POST } from '../apollo/posts/posts';
import Post from '../components/Post/Post';
import { IPost } from '../types/posts/post';

type useFetchPostData = {
  query: IPost[];
};

const AppController = () => {
  const { data, loading, error } = useQuery<useFetchPostData>(GET_ALL_POST);

  return (
    <>
      {loading && <>Loading</>}
      {error && <>{error}</>}
      {data?.query &&
        data.query.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
    </> //plug
  );
};

export default AppController;
