import VueCurrencyFilter from 'vue-currency-filter'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(VueCurrencyFilter,
  {
    symbol : 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })
}
