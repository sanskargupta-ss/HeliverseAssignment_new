import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action) => {
      return action.payload;
    },
    addGroup: (state, action) => {
      state.push(action.payload);
    },
    removeGroup: (state, action) => {
      const groupId = action.payload;
      return state.filter((group) => group.id !== groupId);
    },
    addMemberToGroup: (state, action) => {
      const { groupId, memberId } = action.payload;
      const group = state.find((group) => group.id === groupId);
      if (group) {
        group.members.push(memberId);
      }
    },
    removeMemberFromGroup: (state, action) => {
      const { groupId, memberId } = action.payload;
      const group = state.find((group) => group.id === groupId);
      if (group) {
        group.members = group.members.filter((id) => id !== memberId);
      }
    },
  },
});

export const {
  setGroups,
  addGroup,
  removeGroup,
  addMemberToGroup,
  removeMemberFromGroup,
} = groupSlice.actions;
export default groupSlice.reducer;
