import { useParams } from 'next/navigation';

const useCheckShouldBeNavbar = () => {
  const params = useParams();

  return !!params?.productSlug;
};

export default useCheckShouldBeNavbar;
