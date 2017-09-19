import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

export default class View extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,

    car: PropTypes.object.isRequired
  };

  constructor(options) {
    super(options);
    this.state.values = this.props.car;
  }

  state = {
    values: {},
    errors: {}
  };

  fields = {};

  onChange(e) {
    const {name, value} = e.target;
    const values = Object.assign({},
      this.state.values,
      {[name]: value}
    );

    this.setState({values});
  }

  onSubmit(e) {
    e.preventDefault();
    const {values} = this.state;

    const errors = this.onValidate(values);
    if (Object.keys(errors).length) {
      this.setState({errors});
      return;
    }

    this.props.onSubmit(this.state.values);
  }

  onValidate(values) {
    let errors = {};
    for (let name in this.fields) {
      if (this.fields.hasOwnProperty(name)) {
        const field = this.fields[name];
        const value = values[name];
        if (field.dataset.required && !value) {
          errors[name] = true;
        }
      }
    }

    return errors;
  }

  onCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  render() {
    const {values, errors} = this.state;
    return (
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <form
            onSubmit={e => this.onSubmit(e)}
            onReset={e => this.onCancel(e)}>
            <input
              value={values.code}
              name='code'
              ref={input => (this.fields.code = input)}
              data-required
              data-error={errors.code}
              onChange={e => this.onChange(e)}
              className={styles.input}/>
            <input
              value={values.price}
              name='price'
              ref={input => (this.fields.price = input)}
              data-required
              data-error={errors.price}
              onChange={e => this.onChange(e)}
              className={styles.input}/>
            <input
              value={values.year}
              name='year'
              ref={input => (this.fields.year = input)}
              data-required
              data-error={errors.year}
              onChange={e => this.onChange(e)}
              className={styles.input}/>
            <input
              value={values.engine}
              name='engine'
              ref={input => (this.fields.engine = input)}
              data-required
              data-error={errors.engine}
              onChange={e => this.onChange(e)}
              className={styles.input}/>
            <button
              type='submit'
              className={styles.button}>
              Сохранить
            </button>
            <button
              type='reset'
              className={styles.button}>
              Отменить
            </button>
          </form>
        </div>
      </div>
    );
  }
}
