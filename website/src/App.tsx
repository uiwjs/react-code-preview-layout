import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './App.module.less';
import GitHubCorners from '@uiw/react-github-corners';
import '@wcj/dark-mode';
const App = () => {
  return (
    <Fragment>
      <GitHubCorners target="__blank" fixed href="https://github.com/uiwjs/react-code-preview-layout" />
      <div className={styles.dark}>
        <dark-mode permanent></dark-mode>
      </div>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" replace>
            Document
          </NavLink>
          <NavLink to="/example" replace>
            {' '}
            Demo{' '}
          </NavLink>
          <NavLink to="/markdown-example" replace>
            Markdown Demo
          </NavLink>
        </nav>
      </header>
      <div className={styles.body}>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default App;
