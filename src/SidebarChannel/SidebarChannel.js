import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../features/appSlice';
import './SidebarChannel.css'

const SidebarChannel = ({id, channel}) => {
    const dispatch = useDispatch();
    
    const selectChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channel.channelName
        }))
    }

    return (
        <div className="sidebarChannel">
            <h4 onClick={selectChannel} >
                <span className="sidebarChannel__hash">#</span>{channel.channelName}
            </h4>
        </div>
    )
}

export { SidebarChannel }
