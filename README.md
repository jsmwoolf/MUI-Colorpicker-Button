# Color Picker Button component for material-ui

![`<ColorPicker>` example](./doc/screenshot.png)

This Color Picker component for material-ui derives from [Loic Mahieu's repository](https://github.com/loicmahieu/material-ui-color-picker) in which, rather than a textfield input, a button input is used instead.  Apart from the substitution of using a button, the underlying implementation is the same.

## Installation

For material-ui (v1):

```sh
npm install --save material-ui-color-picker
```

## Usage

```js
import React from 'react'
import ColorPicker from 'material-ui-color-picker'

<ColorPicker
  onChange={color => console.log(color)}
  /* 
    Add the below attribute if you want the button
    to change color.
  */
  value={value} 
  name='Change color'
/>
```

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
