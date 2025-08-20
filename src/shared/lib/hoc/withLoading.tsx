import type { ComponentType } from 'react';
import Preloader from '../../ui/Preloader/Preloader';
type withLoadingProps = {
  isLoading: boolean;
};
function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  return function ComponentWithLoading(props: P & withLoadingProps) {
    const { isLoading, ...rest } = props;
    if (isLoading) {
      return <Preloader />;
    }

    return <WrappedComponent {...(rest as P)} />;
  };
}

export default withLoading;
