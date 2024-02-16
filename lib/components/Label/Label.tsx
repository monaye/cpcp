import styles from './Label.module.scss';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={styles.label} {...props} />;
}
