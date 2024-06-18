import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSubsStore = create(
  persist(
    (set) => ({
      subscribedUserData: null,
      token: null,
      _hasHydrated: false,
      setSubscribedUserData: (subsData) => set({ subscribedUserData: subsData }),
      setToken: (token) => set({ token }),
      clearSubscriptionData: () => set({ subscribedUserData: null, token: null }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: 'mansa_capital',
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    }
  )
);

export default useSubsStore;
