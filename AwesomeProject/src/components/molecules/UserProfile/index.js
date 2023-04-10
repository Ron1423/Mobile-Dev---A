import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, AppContainer , StyleSheet, Text, View} from 'react-native';
import UserPicture from '../../atoms/UserPicture';

const UserProfile = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUser = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style = {styles.row}>
              <View>
                <UserPicture/>
              </View>
              <View style = {styles.dataView}>
                <Text style = {{fontWeight : 'bold'}}>Nama : {item.name}</Text>
                <Text style = {{fontWeight : 'bold'}}>Username : {item.username}</Text>
                <Text style = {{fontWeight : 'bold'}}>Email : {item.email}</Text>
                <Text style = {{fontWeight : 'bold'}}>Address : {item.address.street},{item.address.city}</Text>
                <Text style = {{fontWeight : 'bold'}}>Phone : {item.phone}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dataView : {
    flex : 1,
    marginHorizontal : 4,
    justifyContent : 'center'
  },
  row : {
    marginBottom : 10,
    flexDirection : 'row',
    borderColor: '#4F200D',
    borderWidth: 2,
    borderRadius : 15
  }
})

export default UserProfile;