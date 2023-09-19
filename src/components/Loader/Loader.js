import { Circles } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyle>
      <Circles
        type="Circles"
        color="#4fa94d"
        height={100}
        width={100}
        ariaLabel="circles-loading"
      />
    </LoaderStyle>
  );
};
