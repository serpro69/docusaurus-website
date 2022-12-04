import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';
export default function HomepageDocumentation(): JSX.Element {
    return (
      <section className={styles.documentation}>
        <div className="container">
          <div className="row text--center">
            <p className={clsx("text--center", styles.documentationText)}>Our community-curated knowledge base is an eclectic collection of in-depth knowledge on Docusaurus customisations. It's a fantastic companion to the Docusaurus documentation.</p>
            <p className={clsx("text--center", styles.documentationButton)}>
              <Link className={clsx('button button--secondary button--lg')} to="https://docusaurus.io/docs">Check out the Docusaurus documentation</Link>
            </p>
          </div>
        </div>
      </section>
    );
  }