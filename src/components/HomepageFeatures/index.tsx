import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Native for Nervos/CKB & RGB++',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        REI Wallet is the first browser extention wallet that natively designed for Nervos/CKB.
        Easy to use, secure and fast.
      </>
    ),
  },
  {
    title: 'Manage xUDTs and DOBs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        As a browser extension, REI Wallet secures your login, manages your xUDT and trade your DOBs.
      </>
    ),
  },
  {
    title: 'Easy to integrate with DApps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        REI Wallet provides a simple and easy to use API for DApps to interact with the wallet.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
