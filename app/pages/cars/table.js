import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

const MODE_DEFAULT = 'default';
const MODE_COMPACT = 'compact';

export default function Table(props) {
  const {mode, cars} = props;

  function onModeSwitch(e) {
    e.preventDefault();
    props.onModeChange(mode === MODE_DEFAULT ? MODE_COMPACT : MODE_DEFAULT);
  }

  function onUpdateClick(e, car) {
    e.preventDefault();
    props.onUpdate(car);
  }

  function onDeleteClick(e, car) {
    e.preventDefault();
    props.onDelete(car);
  }

  const tableClass = styles.table + ' ' + styles[`table__${mode}`];
  const cellClass = styles.cell + ' ' + styles[`cell__${mode}`];

  return (
    <div>
      <table className={tableClass}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.cell} width='20%'>&nbsp;</th>
            <th className={styles.cell} width='20%'>Цена</th>
            <th className={styles.cell} width='15%'>Год</th>
            <th className={styles.cell} width='15%'>Двигатель</th>
            <th className={styles.cell} data-right>
              <a href='#' onClick={onModeSwitch}>
                {mode === MODE_DEFAULT ? 'Компактный вид' : 'Нормальный вид'}
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id} className={styles.row}>
              <td className={cellClass}>{car.code}</td>
              <td className={cellClass} data-center>{car.price}</td>
              <td className={cellClass} data-center>{car.year}</td>
              <td className={cellClass} data-center>{car.engine}</td>
              <td className={cellClass} data-right>
                <a
                  href={`/cars/${car.id}/update`}
                  onClick={e => onUpdateClick(e, car)}
                  className={styles.action}>
                  Изменить
                </a>
                <a
                  href='#'
                  onClick={e => onDeleteClick(e, car)}
                  className={styles.action}>
                  Удалить
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,

  mode: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired
};
