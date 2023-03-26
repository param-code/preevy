import BaseCommand from '../base-command'

// eslint-disable-next-line no-use-before-define
export default class Version extends BaseCommand<typeof Version> {
  static description = 'Show Preevy version'

  static enableJsonFlag = true

  async run(): Promise<unknown> {
    const { flags } = await this.parse(Version)
    const log = this.logger

    if (flags.json) {
      return this.config.version
    }

    log.info(this.config.version)
    return undefined
  }
}