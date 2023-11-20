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
  if (!username) {
    return { userData: null, error: null, loading: false };
  }

  const { data: userData, error, isValidating: loading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return { userData, error, loading };
};

export default useGitHubUser;
