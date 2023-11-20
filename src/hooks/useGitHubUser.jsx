import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('User not found');
  }
  const data = await response.json();
  return data;
};

const useGitHubUser = (username) => {
  const { data: userData, error, isValidating: loading, revalidate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetch = () => {
    if (username) {
      revalidate();
    }
  };

  return { userData, error, loading, refetch };
};

export default useGitHubUser;
