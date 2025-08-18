import type { ComponentType } from 'react';
import Preloader from '../../ui/Preloader/Preloader';
type withLoadingProps = {
  isLoading: boolean;
};
function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  return function ComponentWithLoading(props: P & withLoadingProps) {
    const { isLoading, ...rest } = props;
    console.log('Loading...');
    if (isLoading) {
      console.log('Loading...');
      return <Preloader />;
    }

    return <WrappedComponent {...(rest as P)} />;
  };
}

export default withLoading;
