import { ChatEngine } from 'react-chat-engine';
import { Button } from './components/ui/button'
import { AuthScreen } from './features/auth/components/auth-screen';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelListContainer from './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';
import Auth from './components/Auth';

import './Community.css';
import 'stream-chat-react/dist/css/v2/index.css';
import { useState } from 'react';

const cookies = new Cookies();

const apiKey = '3jkykyx7w4ah';
const client  = StreamChat.getInstance(apiKey);

const authToken = cookies.get("token");

if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('userName'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassowrd: cookies.get('hashedPassowrd'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const Community = () => {
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    

    if (!authToken) return <Auth />
    return (
           <div className="app__wrapper flex py-14 justify-center">
              <Chat client={client} theme='team light'>
                 <ChannelListContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                  />
                  <ChannelContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}                  
                  />

              </Chat>
      </div>
     
    );
}

export default Community;