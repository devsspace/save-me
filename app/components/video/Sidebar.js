import { SocketContext } from 'app/contexts/videoContext';
import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';




const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  console.log(me)
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>

              <h6>Account Info</h6>
              <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me}>
                <button>
                  Copy Your ID
                </button>
              </CopyToClipboard>

              <h6>Make a call</h6>
              <input placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />

              {callAccepted && !callEnded ? (
                <button onClick={leaveCall}>
                  Hang Up
                </button>
              ) : (
                <button onClick={() => callUser(idToCall)}>
                  Call
                </button>
              )}
        </form>
        {children}
    </div>
  );
};

export default Sidebar;
