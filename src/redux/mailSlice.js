import { createSlice } from '@reduxjs/toolkit';


const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMsgIsOpen: false,
  },
  reducers: {
    openSendMsg: (state) => {
      state.sendMsgIsOpen= true;
    },
    closeSendMsg: (state) => {
      state.sendMsgIsOpen = false;
    },
  },
});

export const { openSendMsg, closeSendMsg } = mailSlice.actions;
export const selectSendMsgIsOpen =(state) => state.mail.sendMsgIsOpen;
export default mailSlice.reducer;

