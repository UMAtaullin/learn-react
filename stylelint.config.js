module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': [
      // Размеры
      'width',
      'height',
      'min-width',
      'max-width',
      'min-height',
      'max-height',

      // Отступы
      'margin',
      'padding',

      // Границы
      'border',
      'border-radius',

      // Фоновые свойства
      'background-color',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',

      // Свойства расположения
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // Свойства Flexbox
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'align-content',

      // Свойства Grid
      'grid-template-columns',
      'grid-template-rows',
      'grid-gap',

      // Типографика
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'color',

      // Прочие свойства
      'opacity',
      'overflow',
      'transition'
    ]
  }
}
