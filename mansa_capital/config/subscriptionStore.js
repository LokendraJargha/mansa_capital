// config/useSubsStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSubsStore = create(
  persist(
    (set) => ({
      subscriptionScheduleId: null,
      subscribedUserData: null,
      token: null,
      isHydrated: false,
      
      setSubscribedUserData: (subsData) => set({ subscribedUserData: subsData }),
      setSubscriptionScheduleId: (subsId) => set({ subscriptionScheduleId: subsId }),
      setToken: (token) => set({ token }),
      clearSubscriptionData: () => set({ subscribedUserData: null, token: null }),
      setIsHydrated: (state) => set({ isHydrated: state }),
    }),
    {
      name: 'mansa_capital',
      onRehydrateStorage: () => (state) => {
        state.setIsHydrated(true);
      },
    }
  )
);

export default useSubsStore;
