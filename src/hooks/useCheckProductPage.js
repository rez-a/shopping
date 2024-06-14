import { useParams } from 'next/navigation';

const useCheckProductPage = () => {
  const params = useParams();

  return !!params?.productSlug;
};

export default useCheckProductPage;
