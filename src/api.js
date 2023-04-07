

const BASE_URL = 'https://api-writewise-2ysy66xomq-uc.a.run.app/';

export const submitDailyReport = async (name, date, activities) => {
  try {
    const response = await fetch(`${BASE_URL}/api/daily_report/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        date,
        activities: activities.split(','),
      }),
    });

    const data = await response.json();
    // await AsyncStorage.setItem('report', JSON.stringify(data['message']));
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const submitGoal = async (date,name,age,goals) => {
    try {
      const response = await fetch(`${BASE_URL}/api/goal_report/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            name,
            age,
            goals,
        }),
      });
  
      const data = await response.json();
    //   await AsyncStorage.setItem('report', JSON.stringify(data['message']));
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

export const submitObservations = async (date,name,age,goalObservations,descriptions) => {
    try {
      const response = await fetch(`${BASE_URL}/api/observations_report/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            name,
            age,
            goalObservations,
            descriptions
          
         
        }),
      });
  
      const data = await response.json();
    //   await AsyncStorage.setItem('report', JSON.stringify(data['message']));
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };


export const submitChat = async(message, messages)=>{

  try {
    const response = await fetch(`${BASE_URL}/api/chat/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       message,
       messages,
      }),
    });

    const data = await response.json();
  //   await AsyncStorage.setItem('report', JSON.stringify(data['message']));
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }

}


