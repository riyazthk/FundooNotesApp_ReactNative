import {useEffect} from 'react';
import message from '../fireBaseConfig/fireBaseAuthenticationConfig';
const pushNotification = () => {
  useEffect(() => {
    message.message
      .getToken({
        vapidKey:
          'BLIws-QO5vSXO4Nd5EybpVl1O7p3B03UHWtYnZ_p7RZueBFwR09CftorNRTL69y7x-LvNKzB5tQeT7g-shaSs_M',
      })
      .then((token) => {
        console.log('token', token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <View></View>;
};
export default pushNotification;
