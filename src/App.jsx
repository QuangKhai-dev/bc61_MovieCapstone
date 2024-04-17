import { createContext } from 'react';
import useRouteCustom from './routes/useRouteCustom';
import { message } from 'antd';

export const AlertContext = createContext();

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const myRoutes = useRouteCustom();

  const handleAlert = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        handleAlert,
      }}
    >
      {contextHolder}
      {myRoutes}
    </AlertContext.Provider>
  );
}

export default App;
