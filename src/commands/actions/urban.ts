import Axios, { AxiosError } from "axios";
import log from "../../helpers/logger";
import { urban, action } from "../../types";


export const urbanAction: action = (msg, params) => {
  Axios.get(`http://urbanscraper.herokuapp.com/search/${params.text}`)
    .then(res => {
      const urbanResponse: urban[] = res.data.slice(0, params.amount || 2)

      if (urbanResponse) {

        const text = urbanResponse.map((resp, i) =>
          `__**Definition #${i + 1}**__
${resp.definition}

*Example*
${resp.example}

`)

        msg.channel.send(text.join('\n'))
      } else msg.reply('404\'d')
    })
    .catch((err: AxiosError) => {
      log(err.response, err.message)

      msg.channel.send(`Not Found
${err.message}`)
    })
}