import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'wiki',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        网维的知识库
      </>
    ),
    link: '/docs/wiki/首页',
  },
  {
    title: '开发组文档',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        开发组的文档
      </>
    ),
    link: "/docs/devdocs/首页",
  },
  {
    title: '公告',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        公告和博客
      </>
    ),
    link:"/blog",
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
         <a href={FeatureList.link}>
          <Svg className={styles.featureSvg} role="img" />
         </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

