import React from 'react';
import styles from './Button.module.scss';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={styles.button} {...props} />;
}
