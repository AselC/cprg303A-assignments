import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function App() {
  const handleHeartPress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* TOP NAVIGATION BAR */}
      <View style={styles.topHeader}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.title}>OOTD_EVERYDAY</Text>
          <Text style={styles.subtitle}>Posts</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* POST SECTION */}
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <Image
              source={require('./assets/profile.jpg')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>ootd_everyday</Text>
              <Text style={styles.via}>via frenchie_fry39</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Feather name="more-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Image
          source={require('./assets/insta-post.jpg')}
          style={styles.postImage}
        />

        <View style={styles.actionRow}>
          <View style={styles.iconRow}>
            <TouchableOpacity onPress={handleHeartPress}>
              <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <Feather name="message-circle" size={24} color="black" style={styles.icon} />
            <Feather name="send" size={24} color="black" style={styles.icon} />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.likeText}>
            Liked by <Text style={styles.bold}>paisley.print.48</Text> and{' '}
            <Text style={styles.bold}>7 others</Text>
          </Text>

          <Text style={styles.caption}>
            <Text style={styles.bold}>frenchie_fry39 </Text>
            Fresh shot on a sunny day! ☀️
          </Text>

          <Text style={styles.viewComments}>View all 12 comments</Text>

          <Text style={styles.comment}>
            <Text style={styles.bold}>lil_wyatt838 </Text>
            Awesome tones
          </Text>
          <Text style={styles.comment}>
            <Text style={styles.bold}>pia.in.a.pod </Text>
            Gorg. Love it! ❤️
          </Text>

          <Text style={styles.timestamp}>1 day ago</Text>
        </View>
      </View>

      {/* BOTTOM NAVIGATION BAR */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={26} color="black" />
        <Ionicons name="search-outline" size={26} color="black" />
        <Feather name="plus" size={26} color="black" />
        <MaterialCommunityIcons name="movie-open-play-outline" size={26} color="black" />
        <Image source={require('./assets/profile.jpg')} style={styles.profileIcon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#8e8e8e',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  via: {
    fontSize: 12,
    color: 'gray',
  },
  postImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 3 / 4,
    resizeMode: 'cover',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconRow: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  textBlock: {
    paddingHorizontal: 15,
    paddingTop: 5,
    gap: 4,
  },
  likeText: {
    fontSize: 14,
  },
  caption: {
    fontSize: 14,
  },
  viewComments: {
    color: 'gray',
    fontSize: 13,
  },
  comment: {
    fontSize: 14,
  },
  timestamp: {
    fontSize: 11,
    color: 'gray',
  },
  bold: {
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
});