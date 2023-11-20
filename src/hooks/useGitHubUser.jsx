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
  const { data: userData, error, isValidating: loading } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { userData, error, loading };
};

export default useGitHubUser;
