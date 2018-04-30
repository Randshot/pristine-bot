import { GuildAuditLogs } from "discord.js";

export default function average_audits(audit: GuildAuditLogs, user: string) {

  if (audit.entries.size > 0) {
    // getting audit creation time
    const audit_times = audit.entries.array().map(el => el.createdTimestamp);

    // if any audits
    const diffs = audit_times.map((current, i) => {

      const next = audit_times[i + 1];

      // next = older
      // current = newer 
      // return time difference between current and next audit
      return date_diff(next, current)

      // remove last value 'undefined'
    }).splice(0, audit_times.length - 1)

    const average = diffs.reduce((prev, curr) => prev + curr) / diffs.length

    const text = `
    <@!${user}>'s average is
    
    ${(average).toFixed(2)} Seconds
    ${(average / 60).toFixed(2)} Minutes
    ${(average / 60 / 60).toFixed(2)} Hours
    ${(average / 60 / 60 / 24).toFixed(2)} Days
    `;

    return text
  } else return 'No audits found'

}

function date_diff(oldD: number, newD: number) {
  var old = new Date(oldD).getTime();
  var recent = new Date(newD).getTime();

  var seconds = Math.abs(recent - old) / 1000;

  return seconds
}