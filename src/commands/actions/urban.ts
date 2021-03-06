import Axios from "axios";
import { urbanResponse, actionFunction } from "../../types";
import Action from '../../classes/Act';
import { Requirements } from '../../classes/Requirements';

const requirements: Requirements = {}

const description = 'Searches text on Urban Dictionary'

const action: actionFunction = async req => {
  return await Axios
    .get(`http://urbanscraper.herokuapp.com/search/${req.text}`)
    .then(async res => {

      const response: urbanResponse[] = res.data.slice(0, req.params.amount || 1)

      if (!response) return await req.msg.reply('404\'d')

      const embed = {
        embed: {
          author: {
            name: req.msg.author.username,
            icon_url: req.msg.author.avatarURL
          },
          title: "Urban Definitions on " + req.text,
          url: `https://www.urbandictionary.com/define.php?term=${req.text}`.replace(/\s/g, '%20'),
          description: 'Some definitions are too long for Discord, click the link to see them complete.',
          fields: fieldsSort(response),
          timestamp: new Date()
        }
      }

      return await req.msg.channel.send(embed)
    })
}

const urban = new Action(requirements, action, description)
export default urban

function fieldsSort(response: urbanResponse[]) {
  const fields: object[] = []

  response.map((def, i) => {

    fields.push({
      name: `Definition #${i + 1}`,
      value: def.definition.slice(0, 1023),
      inline: true
    });

    fields.push({
      name: `*Example*`,
      value: def.example.slice(0, 1023)
    });
  });

  return fields
}
