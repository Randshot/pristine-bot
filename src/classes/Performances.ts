import { performance } from "perf_hooks";

export class Performance {
  constructor(
    public name: string,
    public t0: number
  ) { }

  reset() {
    this.t0 = performance.now()
  }

  end() {
    const diff = Math.round((performance.now() - this.t0) * 1e2) / 1e2
    const string = `\n${this.name} ran in ${diff} ms\n`

    console.log(string)

    return string
  }
}

export class Performances {
  static tests: Performance[] = []

  static start(name: string) {
    const found = this.tests.find(test => test.name === name)

    if (!found) {
      const newTest = new Performance(name, performance.now());
      this.tests.push(newTest)

      return newTest
    }

    found.reset()
    return found
  }

  static find(name: string): Performance {
    const test = this.tests.find(test => test.name === name)

    if (test instanceof Performance)
      return test

    throw new Error('Test not found')
  }
}