import * as React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NoticeBar, Card } from '@ant-design/react-native';

import styles from './style'
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rightBtn} onPress={() => navigation.navigate('Search')}>
        <Image style={styles.rightBtnImg} source={require('../../images/search.png')} />
      </TouchableOpacity>

      <Text style={styles.btmBtn} onPress={() => navigation.navigate('Search')}>+</Text>

      <ScrollView style={styles.scrolView}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {id: 1})}>
          <Card>
            <Card.Header
              title="新冠状肺炎"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="治愈"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>住院时，每天都有许多专家对我的病情进行会诊，医护人员也是24小时全天候护理，这才让我一天天好起来。</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="北京协和医院"
              extra="主治医生：张云"
            />
          </Card>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

export default HomeScreen