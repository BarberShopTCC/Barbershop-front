import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

interface Props {
  history: any;
  children?: any;
}

function ScrollToTop({ history, children }: Props) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
