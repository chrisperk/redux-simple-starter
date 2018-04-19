import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = data => _.round(_.sum(data) / data.length);

const Chart = props =>
  (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default Chart;
