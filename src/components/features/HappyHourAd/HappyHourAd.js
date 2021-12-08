import React from 'react';
import styles from './HappyHourAd.module.scss';

const getCountdownTime = () => {
  const currentTime = new Date();
  const nextNoon = new Date(
    Date.UTC(
      currentTime.getUTCFullYear(),
      currentTime.getUTCMonth(),
      currentTime.getUTCDate(),
      12,
      0,
      0,
      0
    )
  );

  if (currentTime.getUTCHours() >= 12) {
    nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
  }

  return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
};

class HappyHourAd extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  render() {
    const { title, descr } = this.props;
    const countdownTime = getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {countdownTime > 82800 ? descr : countdownTime}
        </div>
      </div>
    );
  }
}

export default HappyHourAd;
