class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}
