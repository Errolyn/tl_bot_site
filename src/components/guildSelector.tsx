import React from "react";

interface SelectorProps {
  guilds: Array<Guild>
}

// This is the entire infromation set from the api about a guild. I think for this component it really would only need the ID and Name. The rest could probably live somewhere else.
interface Guild {
  id: string,
  name: string,
  icon: string,
  owner: boolean,
  permissions: number,
  features: Array<string>,
  permissions_new: string
}
export const GuildsSelector: React.FC<SelectorProps> = ({ guilds }) => {
  return <select>
    <option value="" selected>Choose Guild</option>
    {guilds.map((guild) => <option key={guild.id} value={guild.name} >{guild.name}</option>)} {/* Should we only show guilds in this list that a user can make edits to, or all handle the rest on the form page */}
  </select>
}

