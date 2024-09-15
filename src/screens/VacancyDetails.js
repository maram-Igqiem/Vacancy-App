// VacancyDetails.js

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const VacancyDetails = ({ route }) => {
  const { vacancy } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: vacancy.image_url }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{vacancy.title}</Text>
        <Text style={styles.company}>Company: <Text style={styles.info}>{vacancy.company}</Text></Text>
        <Text style={styles.location}>Location: <Text style={styles.info}>{vacancy.location}</Text></Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.description}>{vacancy.description}</Text>
        <Text style={styles.label}>Long Description:</Text>
        <Text style={styles.longDescription}>{vacancy.long_description}</Text>
        <Text style={styles.salary}>Salary: <Text style={styles.info}>{vacancy.salary}</Text></Text>
        <Text style={styles.datePosted}>Date Posted: <Text style={styles.info}>{vacancy.date_posted}</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Light grey background
  },
  imageContainer: {
    height: 250,
    marginBottom: 15,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000', // Shadow for image container
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    elevation: 5, // Shadow for details container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', // Bold title
    color: '#333333',
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    fontWeight: '700', // Heavier bold font
    color: '#555555',
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    fontWeight: '700', // Heavier bold font
    color: '#555555',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '700', // Heavier bold font
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 15,
  },
  longDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 15,
  },
  salary: {
    fontSize: 18,
    fontWeight: '700', // Heavier bold font
    color: '#555555',
    marginBottom: 5,
  },
  datePosted: {
    fontSize: 18,
    fontWeight: '700', // Heavier bold font
    color: '#555555',
    marginBottom: 15,
  },
  info: {
    fontWeight: '400',
    color: '#000000',
  },
});

export default VacancyDetails;
