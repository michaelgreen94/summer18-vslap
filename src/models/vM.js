export default class Vendr {
  constructor(data) {
    this.name = data.name
    this.transactionTotal = data.transactionTotal
    this.machineTotoal = data.machineItems
    this.currency = data.currency
    this.items = data.machineItems
  }
}