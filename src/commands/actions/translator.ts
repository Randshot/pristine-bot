import log from '../../helpers/logger'
import { Languages } from './helpers/langs'
import * as translate from 'google-translate-api'
import { action } from '../../types';

export const translatorAction: action = (msg, params) => {
  return translate(params.text, {
    from: switchText(params.from) || 'auto',
    to: switchText(params.to) || 'en'
  })
    .then((res: Response) => {
      msg.channel.send(`${res.text}`)
      return res
    })
    .catch((err: Response) => {
      log(err)
      msg.channel.send(`Error: ${JSON.stringify(err)}`)
      return err
    })
}

function switchText(language: string = ''): string | void {
  language = language.replace(/\b\w/g, l => l.toUpperCase())

  for (let lang in Languages)
    if (Languages[lang] === language)
      return Languages[lang]
}