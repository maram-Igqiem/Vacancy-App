import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const VacancyList = ({ navigation }) => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get('https://www.unhcrjo.org/jobs/api');
        if (Array.isArray(response.data)) {
          setVacancies(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (err) {
        setError('Failed to fetch vacancies');
      } finally {
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0072BC" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const renderVacancyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('VacancyDetails', { vacancy: item })}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title || 'No Title'}</Text>
          <Text style={styles.cardCompany}>{item.company || 'No Company'}</Text>
          <Text style={styles.cardDescription}>{item.description || 'No Description'}</Text>
          <Text>{item.date_posted || 'No Date Posted'}</Text>
        </View>
        <Image
          source={{ uri: item.image_url || 'https://via.placeholder.com/100' }}
          style={styles.cardThumbnail}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vacancies}
        keyExtractor={item => item.id ? item.id.toString() : 'default_key'}
        renderItem={renderVacancyItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardItem: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    alignItems: 'flex-start',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  cardCompany: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  cardThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginLeft: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#000000',
  },
  errorText: {
    color: '#000000',
  },
});

export default VacancyList;
