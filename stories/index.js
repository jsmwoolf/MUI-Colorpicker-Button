import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from '@material-ui/styles'

import ColorPicker from '../src/index'

class Controlled extends React.Component {
  state = { value: '#fff' }

  handleChange = (value) => {
    this.setState({ value })
    action('changed')(value)
  }

  render () {
    return (
      <ThemeProvider theme={{}}>
        <ColorPicker
          value={this.state.value}
          onChange={this.handleChange}
          name='Change color'
        />
      </ThemeProvider>
    )
  }
}

storiesOf('ColorPicker2', module)
  .add('simple', () => (
    <ThemeProvider theme={{}}>
      <ColorPicker
        onChange={action('changed')}
        name='Change color'
      />
    </ThemeProvider>
  ))
  .add('controlled', () => (
    <Controlled />
  ))
