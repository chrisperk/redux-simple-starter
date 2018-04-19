import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = props =>
  (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};

export default Chart;
