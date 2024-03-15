import { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = mdCodeModulesLoader(conf);

  conf.module!.exprContextCritical = false;
  conf.ignoreWarnings = [
    {
      module: /node_modules[\\/]parse5[\\/]/,
    },
  ];
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
