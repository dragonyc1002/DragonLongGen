import React from 'react';
import avatar_deep from './asset/avatar-deep.png';
import avatar_dragonDog from './asset/avatar-dragonDog.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
} from '@skyra/discord-components-react';

const avatar = {
  deep: avatar_deep,
  dragonDog: avatar_dragonDog,
}

export default function Renderer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light} id="renderer">
      <DiscordMessage
        author={props.name}
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
        <div>
        {
        /\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(props.attachment) ?
          <DiscordAttachment
            slot="attachments"
            url={props.attachment}
            style={{ maxWidth: '256px' }}
            alt="attachment"
          /> : ""
        }
        </div>
      </DiscordMessage>
    </DiscordMessages>
  );
}