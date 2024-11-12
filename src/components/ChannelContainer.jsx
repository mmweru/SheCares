import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react';
import ChannelInner from './ChannelInner';
import CreateChannel from './CreateChannel';
import EditChannel from './EditChannel';
import TeamMessage from './TeamMessage';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType, }
) => {
  const { channel } = useChatContext();

  if(isCreating) {
    return (
      <div className="channel__container">
         <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing) {
    return (
      <div className="channel__container">
         <EditChannel setIsEditing={setIsEditing} />
      </div>
    )
  }

  const EmptyState = () => {
    <div className="channel-empty__container">
      <div className="channel-empty__first">This is the beginning of your chat history</div>
      <div className="channel-empty__second">Send messages, attachments, links, emojis, and more</div>

    </div>
  }

  return (
    <div className='text-white channel__container'>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}

      > 
         <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer
