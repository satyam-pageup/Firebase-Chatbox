export const APIRoutes = {

    register: "/registration",
    login: '/user/login',
    updateSystemToken: '/UpdateSystemToken',
    getChatBox: '/CommunityMessage/GetChatBox',
    getMessageById: (id: number) => `/CommunityMessage/DisplayMessage/${id}`,
}