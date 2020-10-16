import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = () => {
    return (
        <div class="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    meonher
                    <span className="message__timestamp">
                        timestamp
                    </span>
                </h4>
                <p>This is a message!</p>
            </div>
        </div>
    )
}

export { Message }
