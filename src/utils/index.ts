export default class Utils {
  public outPutType<Target>(target: Target): string {
    return Object.prototype.toString.call(target).split(' ')[1].slice(0, -1)
  }
}
