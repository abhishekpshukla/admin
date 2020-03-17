// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type Props = {
  statValue: string,
  statLabel: string,
  icon: any,
  backColor: 'red' | 'blue' | 'violet' | 'green',
  urlPath: string,
};

const StatsCard = ({
  statValue = '0',
  statLabel = 'unknown',
  icon = <i className="fa fa-check-square-o" />,
  backColor = 'blue',
  urlPath = '/',
}: Props) => {
  return (
    <div className="sm-st clearfix">
      <span className={`sm-st-icon st-${backColor}`}>{icon}</span>
      <div className="sm-st-info">
        <Link to={{
          pathname: urlPath,
        }}>
          <span>{statValue}</span>
          <div>{statLabel}</div>
        </Link>
      </div>
    </div>
  )
};

StatsCard.displayName = StatsCard;

StatsCard.propTypes = {
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.oneOf(['red', 'blue', 'violet', 'green']),
};

export default StatsCard;
