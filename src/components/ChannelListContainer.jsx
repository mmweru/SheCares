import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie';
//import { ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import WomenGroup from '../assets/images/girl2.png';
import LucideLogOut from '../assets/logout.png';
import ChannelSearch from './ChannelSearch';
import TeamChannelList from './TeamChannelList';
import TeamChannelPreview from './TeamChannelPreview';

const cookies = new Cookies();


const Sidebar = ({ logout }) => (
   <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
           <div className='icon1__inner'>
              <img src={WomenGroup} alt="Women" width="30" height="25" />
           </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
           <div className='icon1__inner' onClick={logout}>
              <img src={LucideLogOut} alt="Logout" width="30" height="25" />
           </div>
        </div>
   </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>SheCares ❤️</p>
    </div>
)

const ChannelListContainer = () => {
  const logout = () => {
   cookies.remove("token");
   cookies.remove('userId');
   cookies.remove('userName');
   cookies.remove('fullName');
   cookies.remove('avatarURL');
   cookies.remove('hashedPassowrd');
   cookies.remove('phoneNumber');

   window.location.reload();
  }

  return (
    <>
      <Sidebar logout={logout} />
      <div className='channel-list__list__wrapper'>
           <CompanyHeader />
           <ChannelSearch />
           <ChannelList 
              filters={{}}
              channelRenderFilterFn={() => {}}
              List={(listProps) => (
                <TeamChannelList 
                   {...listProps}
                   type="team"
                />
            )}
            Preview={(previewProps) => (
              <TeamChannelPreview 
                  {...previewProps}
                  type="team"
              />
            )}
           />
           <ChannelList 
              filters={{}}
              channelRenderFilterFn={() => {}}
              List={(listProps) => (
                <TeamChannelList 
                   {...listProps}
                   type="messaging"
                />
            )}
            Preview={(previewProps) => (
              <TeamChannelPreview 
                  {...previewProps}
                  type="messaging"
              />
            )}
           />
      </div>
    </>
  )
}

export default ChannelListContainer;
