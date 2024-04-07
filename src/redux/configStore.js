import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return 'Quang Khải';
    },
  },
});
