import './style.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  const hello = useSelector((state) => state.test.hello);
  return (
      <h1>{t(hello)}</h1>
  );
};

export default IndexPage;
