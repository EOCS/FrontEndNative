import * as React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NoticeBar, Card } from '@ant-design/react-native';

import styles from './style'
function Detail() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.name}>新冠状肺炎</Text>
          <Text style={styles.tag}>治愈</Text>
        </View>
        <Text style={styles.content}>主治医生：张云</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.name}>发病描述</Text>
        </View>
        <Text style={styles.content}>
          自1月21日以来的4天时间里，我经历了突发高热、寒战、极度乏力、眩晕、腹泻和咳嗽，经历了不安、自责和镇静，开始自行居家隔离治疗至今，体温基本正常，症状基本消失。
          事实证明，我自己的居家隔离自救方案是可行的。
          我把我这几天的诊治经过和心路历程整理后写了下来，希望能给有类似情况的朋友们些许帮助。
          1月20号是我的24小时内科二线班，晚上睡在办公室沙发上，整晚都没休息好。上午处理完病人，午饭后就开始感觉有点眩晕，乏力。到四五点钟的时候，乏力感越来越重，走路像踩在棉花上一样。
          这个时候我竟然还没有怀疑到自己开始发热了，想着应该是下夜班疲劳的原因，回家洗个热水澡，睡一觉可能就好了。
          发热、乏力、腹泻加上与高度疑似患者有密切接触史，没有流涕、鼻塞等卡他（卡他：临床术语，指流涕、鼻塞、打喷嚏等症状）症状，临床可高度疑诊新型冠状病毒感染。
        </Text>
      </View>

      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.name}>诊断证明</Text>
        </View>

        <View style={styles.imgWrapper}>
          <Image style={styles.img} source={{uri: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'}} />
          <Image style={styles.img} source={{uri: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'}} />
          <Image style={styles.img} source={{uri: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'}} />
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.name}>治疗过程</Text>
        </View>
        <Text style={styles.content}>
          自1月21日以来的4天时间里，我经历了突发高热、寒战、极度乏力、眩晕、腹泻和咳嗽，经历了不安、自责和镇静，开始自行居家隔离治疗至今，体温基本正常，症状基本消失。
          事实证明，我自己的居家隔离自救方案是可行的。
          我把我这几天的诊治经过和心路历程整理后写了下来，希望能给有类似情况的朋友们些许帮助。
          1月20号是我的24小时内科二线班，晚上睡在办公室沙发上，整晚都没休息好。上午处理完病人，午饭后就开始感觉有点眩晕，乏力。到四五点钟的时候，乏力感越来越重，走路像踩在棉花上一样。
          这个时候我竟然还没有怀疑到自己开始发热了，想着应该是下夜班疲劳的原因，回家洗个热水澡，睡一觉可能就好了。
          发热、乏力、腹泻加上与高度疑似患者有密切接触史，没有流涕、鼻塞等卡他（卡他：临床术语，指流涕、鼻塞、打喷嚏等症状）症状，临床可高度疑诊新型冠状病毒感染。
        </Text>
      </View>
    </ScrollView>
  );
}

export default Detail