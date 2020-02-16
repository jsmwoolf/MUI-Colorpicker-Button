import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import Button from '@material-ui/core/Button'

import { DEFAULT_CONVERTER, converters } from '../transformers'
import PickerDialog from './PickerDialog'

const ColorPicker = ({
  // ColorPicker
  onChange,
  convert,
  name,

  // Button
  value,

  // State
  showPicker,
  setShowPicker,
  internalValue,
  setValue
}) => (
  <>
    <Button
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      style={{
        backgroundColor: value
      }}
    >
      {name}
    </Button>
    {showPicker && (
      <PickerDialog
        value={value === undefined ? internalValue : value}
        onClick={() => {
          setShowPicker(false)
          onChange(value)
        }}
        onChange={c => {
          const newValue = converters[convert](c)
          setValue(newValue)
          onChange(newValue)
        }}
      />
    )}
  </>
)

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  convert: PropTypes.oneOf(Object.keys(converters)),
  name: PropTypes.string,
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  internalValue: PropTypes.string,
  setValue: PropTypes.func
}

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER
}

const makeColorPicker = compose(
  withState('showPicker', 'setShowPicker', false),
  withState('internalValue', 'setValue', ({ defaultValue }) => defaultValue)
)

const MakedColorPicker = makeColorPicker(ColorPicker)

const ColorPickerField = ({ input: { value, onChange, ...restInput }, meta: { touched, error }, ...restProps }) => (
  <MakedColorPicker
    value={value}
    onChange={onChange}
    errorText={touched && error}
    {...restInput}
    {...restProps}
  />
)

ColorPickerField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
}

export default MakedColorPicker

export {
  ColorPickerField
}
