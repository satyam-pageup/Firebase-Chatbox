export const APIRoutes = {

    register: "/registration",
    login: '/user/login',
    updateSystemToken: '/UpdateSystemToken',
    getChatBox: '/CommunityMessage/GetChatBox',
    sendMessage: (receiverId: number) => `/CommunityMessage/SendMessage/${receiverId}`,
    getMessageById: (id: number) => `/CommunityMessage/DisplayMessage/${id}`,
}