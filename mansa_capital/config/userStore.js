//zustand store to keep user data
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


const useAuthStore = create(
  persist(
    (set) => ({
      loggedInUserData: null,
      isActiveSubscriber: null,
      token: null,
      _hasHydrated: false,
      setLoggedInUserData: (userData) => set({ loggedInUserData: userData }),
      setIsActiveSubscriber: (activeSubscriber) => {
        set({
          isActiveSubscriber: activeSubscriber,
        });
      },
      setToken: (token) => set({ token }),
      clearAuthData: () => set({ loggedInUserData: null,isActiveSubscriber: false, token: null }),
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: 'mansa_capital',
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    }   
  )
);

export default useAuthStore;